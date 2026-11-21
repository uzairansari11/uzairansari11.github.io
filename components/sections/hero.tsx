"use client"

import { ArrowDown, ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { PERSONAL_INFO, HERO_CONTENT } from "@/lib/constants"
import { smoothScrollTo } from "@/lib/utils"

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#171816] pb-14 pt-28 text-[#f3efe6] sm:pt-32 lg:min-h-[780px] lg:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#b7843c]/10 blur-[100px]" aria-hidden="true" />
      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.2em] text-white/55">
              <span className="h-px w-9 bg-[#d0aa6c]" />
              Software Engineer · GenAI
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.07em] sm:text-6xl md:text-7xl xl:text-[5.8rem]">
              I build <span className="font-serif italic font-normal text-[#d7b77e]">what&apos;s next.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              I&apos;m {PERSONAL_INFO.name}, building enterprise GenAI demos, conversational products, and workflows at Newtuple. Before that, I led frontend engineering across four products used by 1,500+ people.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" onClick={(event) => { event.preventDefault(); smoothScrollTo("#projects", 72) }} className="inline-flex h-12 items-center gap-2 rounded-full bg-[#d7b77e] px-6 text-sm font-semibold text-[#171816] transition-transform hover:-translate-y-0.5">
                Explore my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-white/55">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d7b77e]" /> {PERSONAL_INFO.location}</span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <a href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><FaGithub className="h-4 w-4" /> GitHub</a>
              <a href={PERSONAL_INFO.socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><FaLinkedinIn className="h-4 w-4" /> LinkedIn</a>
              <a href={PERSONAL_INFO.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white"><Mail className="h-4 w-4" /> Email</a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/15 pt-6 sm:mt-16">
              {HERO_CONTENT.stats.map(({ value, label }, index) => (
                <div key={label} className={index > 0 ? "border-l border-white/15 pl-5 sm:pl-7" : ""}>
                  <p className="text-2xl font-semibold tracking-tight text-[#f3efe6] sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-white/45 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-square">
              <div className="hero-sphere absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_34%_28%,#e5cc9d_0%,#bd8e4c_32%,#6d4924_62%,#292018_82%)] shadow-[inset_-25px_-28px_70px_rgba(0,0,0,.62),inset_16px_15px_40px_rgba(255,255,255,.36),0_35px_100px_rgba(183,132,60,.25)]" aria-hidden="true" />
              <div className="hero-orbit absolute inset-[2%] rounded-full border border-[#e0bd82]/30 [transform:rotateX(68deg)_rotateZ(-24deg)]" aria-hidden="true" />
              <div className="hero-orbit--reverse absolute inset-[12%] rounded-full border border-white/15 [transform:rotateX(68deg)_rotateZ(28deg)]" aria-hidden="true" />
              <div className="absolute left-[5%] top-[18%] h-3 w-3 rounded-full bg-[#f4dcae] shadow-[0_0_24px_8px_rgba(215,183,126,.55)]" aria-hidden="true" />

              <div className="absolute left-[4%] top-[16%] z-10 w-[42%] overflow-hidden rounded-2xl border border-white/15 bg-[#22231f] shadow-2xl shadow-black/40 sm:left-[1%]">
                <img src={PERSONAL_INFO.avatarUrl} alt={PERSONAL_INFO.name} className="aspect-[4/5] w-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-3 pt-10 sm:p-4 sm:pt-12">
                  <p className="text-xs font-semibold text-white sm:text-sm">{PERSONAL_INFO.name}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[.16em] text-white/60 sm:text-[10px]">Product · Engineering · AI</p>
                </div>
              </div>

              <div className="absolute bottom-[10%] right-[2%] z-10 rounded-2xl border border-white/10 bg-[#242520]/90 p-4 shadow-xl shadow-black/30 backdrop-blur sm:right-0 sm:p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#d7b77e]">Currently building</p>
                <p className="mt-2 text-sm font-medium text-white sm:text-base">GenAI workflows</p>
                <p className="mt-1 text-[10px] text-white/45 sm:text-xs">Conversational products · Enterprise</p>
              </div>
              <div className="absolute right-[9%] top-[5%] grid h-14 w-14 rotate-12 place-items-center rounded-2xl border border-white/15 bg-white/[.06] text-[#d7b77e] shadow-lg backdrop-blur sm:h-[68px] sm:w-[68px]">
                <span className="hero-star text-xl font-light">✳</span>
              </div>
            </div>

            <a href="#about" onClick={(event) => { event.preventDefault(); smoothScrollTo("#about", 72) }} className="mx-auto mt-3 flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[.18em] text-white/40 transition-colors hover:text-white/75">
              Scroll to explore <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
