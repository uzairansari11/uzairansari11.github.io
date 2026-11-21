import { neon } from '@neondatabase/serverless'
import nextEnv from '@next/env'
const { loadEnvConfig } = nextEnv
loadEnvConfig(process.cwd())
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) throw new Error('DATABASE_URL is missing.')
const sql = neon(databaseUrl)
const [row] = await sql`SELECT content FROM portfolio_content WHERE id = 'main'`
if (!row) throw new Error('Seed the portfolio before applying this migration.')
const content = row.content
content.highlights[0].value = 'dynamic_experience'
content.profile.summary = 'Frontend and full-stack engineer with a product mindset, building enterprise GenAI prototypes at Newtuple. I led frontend work across four products used by 1,500+ people, cutting invoice verification time by 80% and CRM quote creation time by 97%.'
await sql`UPDATE portfolio_content SET content = ${JSON.stringify(content)}::jsonb, updated_at = now() WHERE id = 'main'`
console.log('Updated Neon content to calculate software experience from the role date ranges.')
