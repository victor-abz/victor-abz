import { Building2, Calendar, ExternalLink } from 'lucide-react'
import { useProjects } from '@/hooks/useResumeData'

export function ProjectsSection() {
  const projects = useProjects()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <article
            key={`${project.name}-${index}`}
            className="p-5 rounded-xl bg-[var(--color-card-inner)] hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] transition-colors shrink-0 mt-1"
                  aria-label={`Visit ${project.name}`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)] mb-3">
              <span className="flex items-center gap-1">
                <Building2 size={12} />
                {project.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {project.date}
              </span>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              {project.summary}
            </p>

            <ul className="space-y-1.5 mb-4">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-[var(--color-text-secondary)] flex gap-2"
                >
                  <span className="text-[var(--color-brand)] mt-1 shrink-0">&#8226;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-[var(--color-border)]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full
                    bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
