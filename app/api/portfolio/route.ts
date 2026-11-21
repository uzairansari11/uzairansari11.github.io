import { neon } from '@neondatabase/serverless'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return Response.json({ error: 'Portfolio database is not configured.' }, { status: 503 })
  }

  try {
    const sql = neon(databaseUrl)
    const [row] = await sql`SELECT content, updated_at FROM portfolio_content WHERE id = 'main'`
    if (!row) return Response.json({ error: 'Portfolio content has not been seeded.' }, { status: 503 })
    return Response.json(row, { headers: { 'Cache-Control': 'no-store, max-age=0' } })
  } catch (error) {
    console.error('Failed to load portfolio content from Neon', error)
    return Response.json({ error: 'Could not load portfolio content.' }, { status: 503 })
  }
}
