import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { User, Briefcase, FolderKanban, Wrench, BookOpen, Mail } from 'lucide-react'

const navItems = [
  { to: '/', label: 'About', icon: User },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/skills', label: 'Skills', icon: Wrench },
  { to: '/blog', label: 'Blog', icon: BookOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export function ContentNav() {
  return (
    <nav className="hidden md:flex items-center gap-1 border-b border-[var(--color-border)] px-6 bg-[var(--color-card)]">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative',
              isActive
                ? 'text-[var(--color-brand)]'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
            )
          }
        >
          {({ isActive }) => (
            <>
              <Icon size={16} />
              {label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand)]" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
