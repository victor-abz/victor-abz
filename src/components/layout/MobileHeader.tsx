import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, User, Briefcase, FolderKanban, Wrench, BookOpen, Mail, Download } from 'lucide-react'
import { useBasics } from '@/hooks/useResumeData'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'
import avatarImg from '@/assets/avatar.webp'

const navItems = [
  { to: '/', label: 'About', icon: User },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/skills', label: 'Skills', icon: Wrench },
  { to: '/blog', label: 'Blog', icon: BookOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export function MobileHeader() {
  const [open, setOpen] = useState(false)
  const basics = useBasics()

  return (
    <div className="md:hidden">
      {/* Header bar */}
      <header className="flex items-center justify-between px-4 py-3 bg-[var(--color-card)] border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <img
            src={avatarImg}
            alt={basics.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-sm">{basics.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Slide-down menu */}
      {open && (
        <div className="bg-[var(--color-card)] border-b border-[var(--color-border)] shadow-lg">
          <nav className="flex flex-col p-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)]'
                      : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-inner)]'
                  )
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}

            <div className="border-t border-[var(--color-border)] my-2" />

            <a
              href={basics.resumePdf}
              download
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                text-[var(--color-text-secondary)] hover:bg-[var(--color-card-inner)] transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
