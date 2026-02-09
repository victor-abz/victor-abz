export interface Meta {
  version: string
  lastUpdated: string
}

export interface Profile {
  network: string
  username: string
  url: string
}

export interface BlogConfig {
  url: string
  host: string
}

export interface Basics {
  name: string
  headline: string
  summary: string
  email: string
  phone: string
  location: string
  url: string
  avatar: string
  resumePdf: string
  blog: BlogConfig
  profiles: Profile[]
}

export interface WorkExperience {
  company: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
}

export interface Project {
  name: string
  company: string
  date: string
  url: string
  summary: string
  highlights: string[]
  tags: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Certification {
  name: string
  authority: string
  date: string
  url: string
}

export interface Language {
  language: string
  fluency: string
}

export interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: string
  endDate: string
}

export interface ResumeData {
  meta: Meta
  basics: Basics
  work: WorkExperience[]
  projects: Project[]
  skills: SkillCategory[]
  certifications: Certification[]
  languages: Language[]
  education: Education[]
}

// Hashnode API types
export interface BlogPost {
  title: string
  brief: string
  coverImage: { url: string } | null
  publishedAt: string
  slug: string
  url: string
  readTimeInMinutes: number
  tags: { name: string; slug: string }[]
}
