import { readFile } from 'node:fs/promises'
import { neon } from '@neondatabase/serverless'
import nextEnv from '@next/env'
const { loadEnvConfig } = nextEnv

loadEnvConfig(process.cwd())

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) throw new Error('DATABASE_URL is missing. Run `neon env pull` first.')

const sql = neon(databaseUrl)
const content = JSON.parse(await readFile(new URL('../data/portfolio.json', import.meta.url), 'utf8'))

await sql`CREATE TABLE IF NOT EXISTS portfolio_content (
  id text PRIMARY KEY,
  content jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
)`
await sql`CREATE TABLE IF NOT EXISTS resume_sync (
  id text PRIMARY KEY,
  drive_file_id text NOT NULL,
  sha256 text NOT NULL,
  mime_type text NOT NULL,
  file_bytes bytea NOT NULL,
  extracted_text text NOT NULL,
  synced_at timestamptz NOT NULL DEFAULT now()
)`
const inserted = await sql`INSERT INTO portfolio_content (id, content) VALUES ('main', ${JSON.stringify(content)}::jsonb) ON CONFLICT (id) DO NOTHING RETURNING id`
const [row] = await sql`SELECT id, updated_at FROM portfolio_content WHERE id = 'main'`
console.log(`${inserted.length ? 'Seeded' : 'Kept existing'} portfolio_content/main; updated_at=${row.updated_at}`)
