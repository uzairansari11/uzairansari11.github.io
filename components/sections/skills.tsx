'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import {
  EXPERIENCE_CONTENT,
  SKILL_CATEGORIES,
  SKILLS_CONTENT,
  SOFT_SKILL,
} from '@/lib/constants';
import { Brain, Briefcase, Code2, Server, Users, Wrench } from 'lucide-react';

const ICON_MAP = {
  Code2,
  Server,
  Wrench,
  Brain,
  Users,
};

function SkillCategory({
  category,
  index,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
  index: number;
}) {
  const Icon = ICON_MAP[category.icon as keyof typeof ICON_MAP];

  return (
    <div className="surface-glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">{category.title}</h3>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-[.14em] text-primary">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="cursor-default rounded-md border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/35 hover:text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionHeading
          title={SKILLS_CONTENT.heading.title}
          subtitle={SKILLS_CONTENT.heading.subtitle}
          tag="// TECHNICAL SKILLS"
        />

        {/* Category Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
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
