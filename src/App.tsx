import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { VCardLayout } from '@/components/layout/VCardLayout'
import AboutPage from '@/pages/AboutPage'
import ExperiencePage from '@/pages/ExperiencePage'
import ProjectsPage from '@/pages/ProjectsPage'
import SkillsPage from '@/pages/SkillsPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<VCardLayout />}>
            <Route index element={<AboutPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
