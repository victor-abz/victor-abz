import { GraduationCap, Languages, Award, ExternalLink, BarChart3, Mic2 } from 'lucide-react'
import {
  useBasics,
  useLanguages,
  useEducation,
  useCertifications,
  useImpact,
  useFeatured,
} from '@/hooks/useResumeData'

export function AboutSection() {
  const basics = useBasics()
  const languages = useLanguages()
  const education = useEducation()
  const certifications = useCertifications()
  const impact = useImpact()
  const featured = useFeatured()

  return (
    <div className="space-y-8">
      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {basics.summary}
        </p>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 size={20} className="text-[var(--color-brand)]" />
          <h3 className="text-lg font-semibold">Selected Impact</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {impact.map((item) => (
            <div key={item.label} className="p-4 rounded-xl bg-[var(--color-card-inner)]">
              <div className="text-2xl font-bold text-[var(--color-brand)]">{item.value}</div>
              <div className="font-medium text-sm mt-1">{item.label}</div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {featured.map((item) => (
        <section key={item.url}>
          <div className="flex items-center gap-2 mb-4">
            <Mic2 size={20} className="text-[var(--color-brand)]" />
            <h3 className="text-lg font-semibold">Featured {item.type}</h3>
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-[var(--color-card-inner)] hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold group-hover:text-[var(--color-brand)] transition-colors">
                  {item.title}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                  {item.description}
                </p>
              </div>
              <ExternalLink size={16} className="shrink-0 text-[var(--color-text-secondary)]" />
            </div>
          </a>
        </section>
      ))}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={20} className="text-[var(--color-brand)]" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="space-y-3">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-3 rounded-lg bg-[var(--color-card-inner)]"
              >
                <div className="font-medium">{edu.studyType} in {edu.area}</div>
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-brand)] hover:underline"
                >
                  {edu.institution}
                </a>
                {(edu.startDate || edu.endDate) && (
                  <div className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Languages size={20} className="text-[var(--color-brand)]" />
            <h3 className="text-lg font-semibold">Languages</h3>
          </div>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div
                key={lang.language}
                className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-card-inner)]"
              >
                <span className="font-medium">{lang.language}</span>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {lang.fluency}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Certifications */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Award size={20} className="text-[var(--color-brand)]" />
          <h3 className="text-lg font-semibold">Certifications</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="p-3 rounded-lg bg-[var(--color-card-inner)]"
            >
              <div className="font-medium text-sm">{cert.name}</div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                {cert.authority} &middot; {cert.date.split('-')[0]}
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[var(--color-brand)] hover:underline mt-1"
                >
                  View certificate <ExternalLink size={10} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
