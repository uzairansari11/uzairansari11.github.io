'use client'

import { useEffect, useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, Bot, ChartNoAxesCombined, Clock3, Code2, Database, FileText, GraduationCap, Layers3, Mail, MapPin, PhoneCall, Search, UsersRound, Workflow, X } from 'lucide-react'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { SiExpress, SiFastapi, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiLangchain, SiLanggraph, SiMui, SiMongodb, SiNodedotjs, SiNextdotjs, SiNetlify, SiPostgresql, SiPostman, SiPrisma, SiPython, SiReact, SiRedis, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'

type PortfolioContent = typeof import('../data/portfolio.json')

const iconRegistry: Record<string, React.ComponentType<any>> = {
  Code2, Workflow, Database, Bot, Layers3, Search, ChartNoAxesCombined, PhoneCall, Clock3, UsersRound,
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiMui, SiShadcnui, SiNodedotjs, SiExpress,
  SiFastapi, SiRedis, SiPrisma, SiMongodb, SiPostgresql, SiJavascript, SiTypescript, SiPython,
  SiHtml5, SiLangchain, SiLanggraph, SiGit, SiGithub, SiPostman, SiFigma, SiVercel, SiNetlify,
}

const iconFor = (name: string) => iconRegistry[name] ?? Code2
const highlightIcons = ['Clock3', 'Layers3', 'UsersRound', 'ChartNoAxesCombined']

const monthIndex = (value: string) => {
  const [month, year] = value.trim().split(/\s+/)
  const monthNumber = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(month.slice(0, 3))
  const numericYear = Number(year)
  return monthNumber < 0 || !numericYear ? null : numericYear * 12 + monthNumber
}

const calculateExperienceMonths = (roles: PortfolioContent['experience']) => {
  const now = new Date()
  const currentMonth = now.getFullYear() * 12 + now.getMonth()
  const intervals = roles.flatMap((role) => {
    const [startLabel, endLabel] = role.period.replace(/[–—]/g, '-').split('-').map((part) => part.trim())
    const start = monthIndex(startLabel)
    const end = endLabel === 'Present' ? currentMonth + 1 : monthIndex(endLabel) === null ? null : monthIndex(endLabel)! + 1
    return start === null || end === null || end <= start ? [] : [{ start, end }]
  }).sort((a, b) => a.start - b.start)

  let months = 0
  let rangeStart = -1
  let rangeEnd = -1
  for (const interval of intervals) {
    if (rangeStart < 0) { rangeStart = interval.start; rangeEnd = interval.end; continue }
    if (interval.start <= rangeEnd) rangeEnd = Math.max(rangeEnd, interval.end)
    else { months += rangeEnd - rangeStart; rangeStart = interval.start; rangeEnd = interval.end }
  }
  if (rangeStart >= 0) months += rangeEnd - rangeStart
  return months
}

const formatExperience = (months: number) => months >= 12 ? `${Math.floor(months / 12)}y ${months % 12}m` : `${months} months`

export default function Home() {
  const [filter, setFilter] = useState('All')
  const [resumeOpen, setResumeOpen] = useState(false)
  const [content, setContent] = useState<PortfolioContent | null>(null)
  const [loadError, setLoadError] = useState(false)
  useEffect(() => { fetch('/api/portfolio', { cache: 'no-store' }).then((response) => { if (!response.ok) throw new Error('Portfolio data unavailable'); return response.json() }).then((result) => setContent(result.content as PortfolioContent)).catch(() => setLoadError(true)) }, [])
  useEffect(() => { if (!resumeOpen) return; const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setResumeOpen(false) }; window.addEventListener('keydown', closeOnEscape); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = '' } }, [resumeOpen])
  const projects = content?.projects ?? []
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.kind.includes(filter))
  if (!content) return <main className="portfolio dark portfolio-loading" aria-busy={!loadError}>
    <section className={`loader-panel ${loadError ? 'loader-failed' : ''}`} role={loadError ? 'alert' : 'status'} aria-live="polite">
      {loadError ? <><div className="loader-topline"><div className="loader-brand">ua<span>.</span></div><span className="loader-live"><i/> RETRY NEEDED</span></div><h1>Couldn’t load the portfolio</h1><p>Neon did not return the portfolio content. Check the connection, then try again.</p><button className="loader-retry" onClick={() => window.location.reload()}>Try again <ArrowUpRight size={15}/></button></> : <div className="portfolio-skeleton" aria-label="Loading portfolio" aria-hidden="true">
        <div className="loader-topline"><div className="loader-brand">ua<span>.</span></div><div className="skeleton-nav"><i/><i/><i/><i/></div></div>
        <div className="skeleton-hero"><div className="skeleton-portrait shimmer"/><div className="skeleton-identity"><i className="shimmer short"/><i className="shimmer name-line"/><i className="shimmer role-line"/><i className="shimmer meta-line"/><div className="skeleton-socials"><i className="shimmer"/><i className="shimmer"/><i className="shimmer"/></div></div><i className="skeleton-contact shimmer"/></div>
        <div className="skeleton-summary"><div><i className="shimmer short"/><i className="shimmer text-line"/><i className="shimmer text-line second"/></div><i className="skeleton-resume shimmer"/></div>
        <div className="skeleton-stats">{[0,1,2,3].map((item)=><div key={item}><i className="shimmer metric-line"/><i className="shimmer label-line"/></div>)}</div>
        <section className="skeleton-section"><div className="skeleton-section-heading"><div><i className="shimmer short"/><i className="shimmer heading-line"/></div><i className="shimmer side-line"/></div><div className="skeleton-experience">{[0,1,2].map((item)=><article key={item}><div className="skeleton-job-heading"><i className="shimmer logo-line"/><div><i className="shimmer company-line"/><i className="shimmer role-line"/></div><i className="shimmer date-line"/></div><i className="shimmer bullet-line"/><i className="shimmer bullet-line second"/><div className="skeleton-tags"><i className="shimmer"/><i className="shimmer"/><i className="shimmer"/></div></article>)}</div></section>
        <section className="skeleton-section"><div className="skeleton-section-heading"><div><i className="shimmer short"/><i className="shimmer heading-line"/></div><i className="shimmer side-line"/></div><div className="skeleton-skills">{[0,1,2,3,4].map((item)=><div key={item}><i className="shimmer skill-heading"/><div>{[0,1,2,3,4].map((icon)=><i key={icon} className="shimmer skill-icon"/>)}</div></div>)}</div></section>
        <section className="skeleton-section"><div className="skeleton-section-heading"><div><i className="shimmer short"/><i className="shimmer heading-line"/></div><i className="shimmer side-line"/></div><div className="skeleton-projects">{[0,1,2].map((item)=><article key={item}><i className="shimmer project-image"/><i className="shimmer company-line"/><i className="shimmer bullet-line"/><i className="shimmer bullet-line second"/></article>)}</div></section>
        <div className="skeleton-loading-note"><span className="loader-live"><i/> LOADING PORTFOLIO DATA</span><div className="loader-progress"><span/></div></div>
      </div>}
    </section>
  </main>
  const { profile, experience, skillGroups, companyProjects, education, highlights } = content
  const experienceMonths = calculateExperienceMonths(experience)
  const currentMonthLabel = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date())
  const resumeDriveId = profile.resumeUrl.match(/(?:\/d\/|[?&]id=)([^/&?]+)/)?.[1]
  const isGoogleDocsResume = profile.resumeUrl.includes('docs.google.com/document')
  const resumeDrivePreviewUrl = resumeDriveId ? `https://${isGoogleDocsResume ? 'docs.google.com/document' : 'drive.google.com/file'}/d/${resumeDriveId}/preview` : profile.resumeUrl
  const resumeDriveViewUrl = resumeDriveId ? `https://${isGoogleDocsResume ? 'docs.google.com/document' : 'drive.google.com/file'}/d/${resumeDriveId}/${isGoogleDocsResume ? 'edit' : 'view'}` : profile.resumeUrl
  const resumeDownloadUrl = resumeDriveId && isGoogleDocsResume ? `https://docs.google.com/document/d/${resumeDriveId}/export?format=pdf` : profile.resumeUrl

  return <main className="portfolio dark">
    <div className="page-shell">
      <section className="intro" id="home">
        <div className="profile-frame"><img src={profile.photo} alt={profile.name}/></div>
        <div className="intro-copy">
          <div className="eyebrow"><span className="status-dot"/> {profile.eyebrow}</div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <div className="location"><MapPin size={14}/><span>{profile.location}</span><span className={`availability-pill ${profile.availability.status}`}>{profile.availability.label}</span></div>
          <div className="hero-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><FaLinkedinIn/></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><SiGithub/></a><a href={`mailto:${profile.email}`} aria-label="Email Uzair" title="Email"><Mail/></a><a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp"><FaWhatsapp/></a></div>
        </div>
        <a className="hero-contact button-primary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17}/></a>
        <div className="intro-summary"><div className="summary-copy"><span className="summary-eyebrow">PROFILE SUMMARY</span><p>{profile.summary}</p></div><button type="button" className="resume-open-button" onClick={() => setResumeOpen(true)} aria-haspopup="dialog"><FileText size={17}/><span>View résumé</span><ArrowUpRight size={15}/></button></div>
      </section>

      <section className="stats" aria-label="Career highlights">{highlights.map((item, index) => { const MetricIcon = iconFor(highlightIcons[index] ?? 'Code2'); return <article className="stat-card" key={item.label}><span className={`stat-icon stat-icon-${index}`}><MetricIcon size={19} strokeWidth={1.8} aria-hidden="true"/></span><div><strong>{item.value === 'dynamic_experience' ? formatExperience(experienceMonths) : item.value}</strong><small>{item.label}</small></div></article>})}</section>

      <section className="content-section" id="experience">
        <div className="section-heading"><div><span className="section-label">THE JOURNEY</span><h2>Experience</h2></div><p>What I owned, what I shipped,<br className="desktop-break"/> and the impact it made.</p></div>
      <div className="timeline">{experience.map((job) => <article className="job" key={job.company}>
          <div className="job-rail"><span className={`timeline-dot ${job.current ? 'live' : ''}`}/></div>
          <div className="job-heading"><div className="job-company"><a className="company-logo" href={job.companyUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${job.company} official website`} title={`${job.company} official website`}><img src={job.logo} alt={`${job.company} logo`}/><ArrowUpRight className="company-site-arrow" size={13}/></a><div><h3>{job.company}{job.current && <span className="now">CURRENT</span>}</h3><p>{job.role}</p></div></div><div className="job-place"><span>{job.period}</span><small>{job.place}</small></div></div>
          <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <div className="tag-row">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
      </section>

      <section className="content-section skills-section" id="skills">
      <div className="section-heading"><div><span className="section-label">TOOLS OF THE TRADE</span><h2>Skills</h2></div><p>Hover or focus any icon to see<br className="desktop-break"/> the technology name.</p></div>
        <div className="skill-grid">{skillGroups.map((group, index) => { const GroupIcon = iconFor(group.icon); return <article className="skill-card" key={group.title} style={{'--skill-index': index} as React.CSSProperties}><div className="skill-title"><span className="skill-icon"><GroupIcon size={17} strokeWidth={1.7}/></span><h3>{group.title}</h3><span className="skill-index">0{index + 1}</span></div><div className="skill-logo-grid">{group.skills.map((skill) => { const SkillIcon = iconFor(skill.icon); return <span className="skill-logo" key={skill.name} tabIndex={0} aria-label={skill.name} title={skill.name} style={{'--logo-color':skill.color} as React.CSSProperties}><SkillIcon aria-hidden="true"/><span className="skill-tooltip" role="tooltip">{skill.name}</span></span>})}</div></article>})}</div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading"><div><span className="section-label">SELECTED BUILDS</span><h2>Projects</h2></div><p>Enterprise products I helped ship,<br className="desktop-break"/> plus personal builds with live code.</p></div>
        <div className="project-intro"><h3>Enterprise projects</h3><p>Built at TalkWisely. Each card explains the product, my contribution, and a measured outcome.</p></div>
        <div className="company-projects">{companyProjects.map((project, index) => { const Icon = iconFor(project.icon); return <article className={`company-project ${project.color}`} key={project.name} style={{'--project-index': index} as React.CSSProperties}>
          <div className="company-project-top"><span className="project-icon"><Icon size={21} strokeWidth={1.7}/></span><span className="project-company">{project.company}</span><ArrowUpRight className="project-link-icon" size={16}/></div>
          <h3>{project.name}</h3><p>{project.description}</p><div className="company-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>})}</div>
        <div className="personal-heading"><h3>Personal builds</h3><span>Live demos · source code</span></div>
        <div className="project-filters" aria-label="Filter projects">{['All', 'GenAI', 'Full stack', 'Frontend', 'Freelance'].map((item) => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}<span>{item === 'All' ? projects.length : projects.filter((project) => project.kind.includes(item)).length}</span></button>)}</div>
        <div className="project-grid">{visibleProjects.map((project) => <article className="project-card" key={project.name}>
          <a className="project-image" href={project.demo || project.code} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} ${project.demo ? 'demo' : 'repository'}`}><img src={project.image} alt={`${project.name} project cover`}/><span className="project-image-kind">{project.type}</span><span className="image-link" aria-hidden="true"><ArrowUpRight size={17}/></span></a>
          <div className="project-card-body"><div className="project-title"><div><h3>{project.name}</h3><span>{project.type}</span></div><div className="project-actions">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.name}`} title="Open live demo"><ArrowUpRight size={15}/><span>Live</span></a>}<a href={project.code} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.name}`} title="View source code"><SiGithub/><span>Code</span></a>{project.video && <a href={project.video} target="_blank" rel="noreferrer" aria-label={`Find ${project.name} demo video on LinkedIn`} title="Find the demo video on LinkedIn"><FaLinkedinIn/><span>Video</span></a>}</div></div>
            <p>{project.description}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}</div>
      </section>

      <section className="content-section education-section" id="education">
        <div className="section-heading"><div><span className="section-label">FOUNDATIONS</span><h2>Education</h2></div><p>Engineering roots, product mindset.</p></div>
        <div className="education-list">{education.map((item) => <article key={item.school}><a className={`education-brand ${item.school.startsWith('Dr.') ? 'aktu-brand' : ''}`} href={item.url} target="_blank" rel="noreferrer" aria-label={`Visit ${item.school} official website`}><img src={item.logo} alt={`${item.school} logo`}/></a><div><h3>{item.school}</h3><p>{item.program}</p></div><time>{item.period}</time></article>)}</div>
      </section>


      <section className="contact-section" id="contact"><div><span className="section-label">HAVE SOMETHING IN MIND?</span><h2>Let’s make it<br/>work beautifully.</h2></div><div className="contact-actions"><a className="button-primary" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a><a className="whatsapp-button" href={`https://wa.me/${profile.phone}`} target="_blank" rel="noreferrer"><FaWhatsapp size={17}/> WhatsApp</a></div></section>
      <footer className="footer"><span>© {new Date().getFullYear()} {profile.name}</span><div className="footer-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><SiGithub size={19}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn size={19}/></a><a href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Mail size={19}/></a><a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><FaWhatsapp size={19}/></a></div></footer>
      {resumeOpen && <div className="resume-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false) }}><section className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title" tabIndex={-1}><header className="resume-modal-header"><div className="resume-modal-title-block"><h2 id="resume-title">Résumé</h2><p className="resume-modal-subtitle">{profile.name} · Original Google Drive file</p></div><div className="resume-modal-actions"><a className="resume-drive-link" href={resumeDriveViewUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={15}/> Open in Drive</a><a className="resume-download" href={resumeDownloadUrl}><ArrowDownToLine size={16}/> Download original PDF</a><button type="button" className="resume-close" onClick={() => setResumeOpen(false)} aria-label="Close résumé preview" title="Close"><X size={19}/></button></div></header><div className="resume-preview"><div className="resume-frame-wrap"><iframe src={resumeDrivePreviewUrl} title={`${profile.name} original résumé from Google Drive`} allow="autoplay"/></div><div className="resume-preview-footer"><span>Original résumé from Google Drive</span><a href={resumeDownloadUrl}><ArrowDownToLine size={14}/> Download original PDF</a></div></div></section></div>}
    </div>
  </main>
}
