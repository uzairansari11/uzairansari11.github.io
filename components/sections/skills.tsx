'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import {
  EXPERIENCE_CONTENT,
  SKILL_CATEGORIES,
  SKILLS_CONTENT,
  SKILLS_WITH_ICONS,
  SOFT_SKILL,
  TOOLS,
} from '@/lib/constants';
import { Brain, Briefcase, Code2, Server, Users, Wrench } from 'lucide-react';

const ICON_MAP = {
  Code2,
  Server,
  Wrench,
  Brain,
  Users,
};

function SkillIcon({ skill }: { skill: { id: string; title: string; src: string } }) {
  const needsInvert = ['Express', 'Next.js', 'Django', 'GitHub', 'Vercel'].includes(skill.title);

  return (
    <div className="flex flex-col items-center gap-2 shrink-0 group py-2">
      <div className="w-16 h-16 rounded-2xl glass-card border-border/50 flex items-center justify-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all">
        <img
          src={skill.src}
          alt={skill.title}
          className={`w-8 h-8 object-contain ${needsInvert ? 'invert' : ''}`}
        />
      </div>
      <span className="text-[11px] text-muted-foreground font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
        {skill.title}
      </span>
    </div>
  );
}

function SkillCategory({
  category,
  index,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
  index: number;
}) {
  const Icon = ICON_MAP[category.icon as keyof typeof ICON_MAP];

  return (
    <div className="group rounded-2xl glass-card p-6 hover:border-primary/30 transition-all">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-bold text-sm">{category.title}</h3>
        <span className="ml-auto text-[10px] font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-muted text-foreground rounded-lg px-3 py-1.5 font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const allIcons = [...SKILLS_WITH_ICONS, ...TOOLS];

  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          title={SKILLS_CONTENT.heading.title}
          subtitle={SKILLS_CONTENT.heading.subtitle}
        />

        {/* Scrolling Icon Marquee */}
        <div className="relative overflow-hidden mb-12 content-spacing">
          <div className="flex gap-10 animate-marquee">
            {[...allIcons, ...allIcons].map((item, i) => (
              <SkillIcon key={`${item.id}-${i}`} skill={item} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Category Grid */}
          <div className="flex items-center gap-2 my-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Technical Skills</h3>
          </div>
        <div className="grid gap-5 sm:grid-cols-2 p-2 -m-2">

          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCategory key={category.title} category={category} index={idx} />
          ))}
        </div>

          <div className="flex items-center gap-2 my-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Soft Skills</h3>
          </div>
        <div className="grid gap-5  p-2 -m-2">

          {SOFT_SKILL.map((category, idx) => (
            <SkillCategory key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
