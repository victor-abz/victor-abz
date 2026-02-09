import resumeData from '@/data/resume.json'
import type { ResumeData } from '@/data/resume.schema'

const data = resumeData as ResumeData

export function useResumeData(): ResumeData {
  return data
}

export function useBasics() {
  return data.basics
}

export function useWork() {
  return data.work
}

export function useProjects() {
  return data.projects
}

export function useSkills() {
  return data.skills
}

export function useLanguages() {
  return data.languages
}

export function useEducation() {
  return data.education
}
