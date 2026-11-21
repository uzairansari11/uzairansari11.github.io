import { neon } from '@neondatabase/serverless'
import PDFDocument from 'pdfkit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ink = '#141414'
const muted = '#5f625d'
const accent = '#597b34'
const rule = '#d8ddd2'

function makeResume(content: any) {
  return new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margins: { top: 34, bottom: 34, left: 42, right: 42 }, compress: true, info: { Title: `${content.profile.name} - Resume`, Author: content.profile.name } })
    const chunks: Buffer[] = []
    doc.on('data', (chunk: Buffer) => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    const width = doc.page.width - doc.page.margins.left - doc.page.margins.right
    const right = doc.page.width - doc.page.margins.right
    const pageBottom = () => doc.page.height - doc.page.margins.bottom
    const ensure = (height: number) => {
      if (doc.y + height > pageBottom()) doc.addPage()
    }
    const section = (title: string) => {
      ensure(28)
      doc.moveDown(0.3).font('Helvetica-Bold').fontSize(9).fillColor(accent).text(title.toUpperCase(), { characterSpacing: 0.8 })
      const y = doc.y + 4
      doc.moveTo(doc.page.margins.left, y).lineTo(right, y).lineWidth(0.6).strokeColor(rule).stroke()
      doc.y = y + 9
    }
    const bullet = (text: string) => {
      const x = doc.page.margins.left + 4
      ensure(18)
      const y = doc.y + 4
      doc.circle(x + 2, y + 4, 1.4).fillColor(accent).fill()
      doc.font('Helvetica').fontSize(8.1).fillColor(ink).text(text, x + 11, y, { width: width - 17, lineGap: 1.2 })
      doc.moveDown(0.18)
    }

    const profile = content.profile
    doc.font('Helvetica-Bold').fontSize(23).fillColor(ink).text(profile.name)
    doc.moveDown(0.13).font('Helvetica').fontSize(10.3).fillColor(accent).text(profile.role)
    doc.moveDown(0.4).font('Helvetica').fontSize(8).fillColor(muted)
      .text([profile.location, profile.phone, profile.email, profile.linkedin, profile.github].filter(Boolean).join('   |   '), { width, lineGap: 1 })
    doc.moveDown(0.5)

    section('Professional Summary')
    doc.font('Helvetica').fontSize(8.3).fillColor(ink).text(profile.summary, { width, lineGap: 1.6 })
    doc.moveDown(0.45)

    section('Experience')
    for (const job of content.experience ?? []) {
      ensure(34)
      const top = doc.y
      doc.font('Helvetica-Bold').fontSize(9).fillColor(ink).text(job.company, doc.page.margins.left, top, { width: width * 0.66 })
      doc.font('Helvetica').fontSize(7.8).fillColor(muted).text(job.period, doc.page.margins.left + width * 0.67, top, { width: width * 0.33, align: 'right' })
      doc.moveDown(0.12).font('Helvetica').fontSize(8).fillColor(accent).text(`${job.role}${job.place ? `  |  ${job.place}` : ''}`, { width })
      doc.moveDown(0.16)
      const points = job.company === 'TalkWisely Platforms' ? job.points.slice(0, 5) : job.points
      for (const point of points) bullet(point)
      doc.moveDown(0.12)
    }

    section('Selected Projects')
    const projects = (content.projects ?? []).filter((project: any) => ['DocMind', 'Clothify', 'Gadget Galaxy'].includes(project.name))
    for (const project of projects) {
      ensure(24)
      doc.font('Helvetica-Bold').fontSize(8.2).fillColor(ink).text(project.name, { continued: true })
      doc.font('Helvetica').fillColor(muted).text(`  |  ${project.type}`)
      doc.moveDown(0.1).font('Helvetica').fontSize(7.8).fillColor(ink).text(project.description, { width, lineGap: 1 })
      doc.moveDown(0.25)
    }

    section('Technical Skills')
    for (const group of content.skillGroups ?? []) {
      const names = (group.skills ?? []).map((skill: any) => skill.name).join(', ')
      ensure(18)
      doc.font('Helvetica-Bold').fontSize(7.8).fillColor(ink).text(`${group.title}: `, { continued: true })
      doc.font('Helvetica').fillColor(muted).text(names, { width, lineGap: 1 })
      doc.moveDown(0.18)
    }

    doc.end()
  })
}

export async function GET(request: Request) {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) return Response.json({ error: 'Portfolio database is not configured.' }, { status: 503 })

  try {
    const sql = neon(databaseUrl)
    const [row] = await sql`SELECT content FROM portfolio_content WHERE id = 'main'`
    if (!row) return Response.json({ error: 'Portfolio content has not been seeded.' }, { status: 503 })
    const pdf = await makeResume(row.content)
    const download = new URL(request.url).searchParams.has('download')
    return new Response(new Uint8Array(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="Uzair-Ansari-Resume.pdf"`,
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (error) {
    console.error('Failed to generate resume from Neon content', error)
    return Response.json({ error: 'Could not generate the résumé.' }, { status: 503 })
  }
}
