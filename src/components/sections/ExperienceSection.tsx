import { ExternalLink } from 'lucide-react'
import { useWork } from '@/hooks/useResumeData'
import { formatDateRange } from '@/lib/utils'

export function ExperienceSection() {
  const work = useWork()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--color-border)] hidden md:block" />

        <div className="space-y-6">
          {work.map((job, index) => (
            <article
              key={`${job.company}-${index}`}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-[var(--color-brand)] border-2 border-[var(--color-card)] hidden md:block" />

              <div className="p-5 rounded-xl bg-[var(--color-card-inner)] hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.position}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-brand)] hover:underline flex items-center gap-1"
                        >
                          {job.company}
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-[var(--color-brand)]">{job.company}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)] font-medium shrink-0">
                    {formatDateRange(job.startDate, job.endDate)}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  {job.summary}
                </p>

                <ul className="space-y-1.5">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-text-secondary)] flex gap-2"
                    >
                      <span className="text-[var(--color-brand)] mt-1 shrink-0">&#8226;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
