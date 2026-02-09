import { NavLink } from 'react-router-dom'
import { User, Briefcase, FolderKanban, Wrench, BookOpen, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'About', icon: User },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/skills', label: 'Skills', icon: Wrench },
  { to: '/blog', label: 'Blog', icon: BookOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-card)] border-t border-[var(--color-border)] z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium transition-colors',
                isActive
                  ? 'text-[var(--color-brand)]'
                  : 'text-[var(--color-text-secondary)]'
              )
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
