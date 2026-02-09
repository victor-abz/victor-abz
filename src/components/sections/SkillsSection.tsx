import { useSkills } from '@/hooks/useResumeData'

export function SkillsSection() {
  const skills = useSkills()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl bg-[var(--color-card-inner)]"
          >
            <h3 className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg
                    bg-[var(--color-card)] text-[var(--color-text-secondary)]
                    border border-[var(--color-border)]
                    hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]
                    transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
