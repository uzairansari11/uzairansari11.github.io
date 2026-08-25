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
      <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center transition-all">
        <img
          src={skill.src}
          alt={skill.title}
          className={`w-8 h-8 object-contain ${needsInvert ? 'dark:invert' : ''}`}
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
    <div className="group rounded-sm glass-card p-5 sm:p-6 transition-all font-sans">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-sm bg-secondary flex items-center justify-center border border-border/60">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <h3 className="font-medium text-sm text-foreground">{category.title}</h3>
        <span className="ml-auto text-[11px] font-mono font-medium text-muted-foreground opacity-60">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-secondary/80 text-foreground border border-border/60 rounded-sm px-2.5 py-1 font-normal cursor-default"
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
          tag="// TECHNICAL SKILLS"
        />

        {/* Scrolling Icon Marquee */}
        <div className="relative overflow-hidden mb-10 content-spacing [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-10 animate-marquee">
            {[...allIcons, ...allIcons].map((item, i) => (
              <SkillIcon key={`${item.id}-${i}`} skill={item} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Category Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCategory key={category.title} category={category} index={idx} />
          ))}
          {SOFT_SKILL.map((category, idx) => (
            <SkillCategory key={category.title} category={category} index={idx + SKILL_CATEGORIES.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
