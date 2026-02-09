export interface Meta {
  version: string
  lastUpdated: string
}

export interface Profile {
  network: string
  username: string
  url: string
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
  summary: string
  highlights: string[]
  tags: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
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
  languages: Language[]
  education: Education[]
}
