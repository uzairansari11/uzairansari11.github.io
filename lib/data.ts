/**
 * @deprecated This file is deprecated. All content has been moved to lib/constants.ts
 * These exports are kept for backward compatibility only.
 * Please import from '@/lib/constants' instead.
 */

// Re-export everything from constants for backward compatibility
export type {
  Project,
  TechStack,
  SkillWithIcon,
  Tool,
  Experience,
  ProjectMetric,
  ProjectHighlight,
} from './constants'

export {
  PERSONAL_INFO as personalInfo,
  SKILLS_WITH_ICONS as skillsWithIcons,
  TOOLS as tools,
  PROJECTS as projects,
  PROJECT_HIGHLIGHTS as projectHighlights,
  EXPERIENCES as experiences,
} from './constants'

// Legacy Skill interface - kept for compatibility
export interface Skill {
  category: string
  items: string[]
}

// Re-export skill categories in legacy format
import { SKILL_CATEGORIES } from './constants'
export const skills: Skill[] = SKILL_CATEGORIES.map(({ title, skills: items }) => ({
  category: title,
  items,
}))
