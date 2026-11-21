import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { neon } from '@neondatabase/serverless'
import nextEnv from '@next/env'
import { PDFParse } from 'pdf-parse'

const { loadEnvConfig } = nextEnv
loadEnvConfig(process.cwd())
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) throw new Error('DATABASE_URL is missing. Run `neon env pull` first.')

const portfolio = JSON.parse(await readFile(new URL('../data/portfolio.json', import.meta.url), 'utf8'))
const driveFileId = process.env.RESUME_DRIVE_FILE_ID ?? new URL(portfolio.profile.resumeUrl).searchParams.get('id')
if (!driveFileId) throw new Error('Could not determine the Google Drive resume file ID.')

const response = await fetch(`https://drive.google.com/uc?export=download&id=${encodeURIComponent(driveFileId)}`)
if (!response.ok) throw new Error(`Google Drive download failed: HTTP ${response.status}`)
const fileBytes = Buffer.from(await response.arrayBuffer())
if (!fileBytes.subarray(0, 5).equals(Buffer.from('%PDF-'))) {
  throw new Error('Google Drive did not return a PDF. Check that the resume is shared for link access.')
}

const parser = new PDFParse({ data: fileBytes })
let extractedText
try {
  extractedText = (await parser.getText()).text.trim()
} finally {
  await parser.destroy()
}
if (!extractedText) throw new Error('The PDF has no extractable text; OCR would be needed for this resume.')

const digest = createHash('sha256').update(fileBytes).digest('hex')
const sql = neon(databaseUrl)
const changed = await sql`
  INSERT INTO resume_sync (id, drive_file_id, sha256, mime_type, file_bytes, extracted_text)
  VALUES ('latest', ${driveFileId}, ${digest}, 'application/pdf', decode(${fileBytes.toString('base64')}, 'base64'), ${extractedText})
  ON CONFLICT (id) DO UPDATE SET
    drive_file_id = EXCLUDED.drive_file_id,
    sha256 = EXCLUDED.sha256,
    mime_type = EXCLUDED.mime_type,
    file_bytes = EXCLUDED.file_bytes,
    extracted_text = EXCLUDED.extracted_text,
    synced_at = now()
  WHERE resume_sync.sha256 IS DISTINCT FROM EXCLUDED.sha256
  RETURNING sha256, synced_at
`
if (changed.length) {
  console.log(`Synced changed Google Drive resume to Neon (${fileBytes.length} bytes, ${extractedText.length} text characters).`)
} else {
  const [saved] = await sql`SELECT sha256, synced_at FROM resume_sync WHERE id = 'latest'`
  console.log(`Resume unchanged; Neon copy is current (${fileBytes.length} bytes, ${extractedText.length} text characters).`)
  console.log(`sha256=${saved.sha256}; synced_at=${saved.synced_at}`)
}
