import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { VCardLayout } from '@/components/layout/VCardLayout'
import AboutPage from '@/pages/AboutPage'

const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const SkillsPage = lazy(() => import('@/pages/SkillsPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route element={<VCardLayout />}>
              <Route index element={<AboutPage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}
