import { neon } from '@neondatabase/serverless'
import nextEnv from '@next/env'
const { loadEnvConfig } = nextEnv
loadEnvConfig(process.cwd())
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is missing.')
const sql = neon(process.env.DATABASE_URL)
const [row] = await sql`SELECT content FROM portfolio_content WHERE id = 'main'`
if (!row) throw new Error('Seed the portfolio before applying this migration.')
const content = row.content
content.profile.availability ??= { status: 'employed', label: 'Currently at Newtuple Technologies' }
await sql`UPDATE portfolio_content SET content = ${JSON.stringify(content)}::jsonb, updated_at = now() WHERE id = 'main'`
console.log('Added the editable employment-status pill to Neon profile content.')
