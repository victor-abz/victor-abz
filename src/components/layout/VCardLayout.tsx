import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { ContentNav } from './ContentNav'
import { MobileHeader } from './MobileHeader'
import { MobileNav } from './MobileNav'
import { Footer } from './Footer'

export function VCardLayout() {
  return (
    <div className="min-h-screen flex items-start justify-center p-0 lg:p-8 lg:py-12">
      {/* Card container */}
      <div className="w-full max-w-6xl bg-[var(--color-card)] lg:rounded-2xl lg:shadow-2xl overflow-hidden">
        {/* Mobile header */}
        <MobileHeader />

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Content area */}
          <div className="flex-1 flex flex-col min-h-screen lg:min-h-[600px]">
            {/* Desktop nav */}
            <ContentNav />

            {/* Page content */}
            <main className="flex-1 p-6 lg:p-8 pb-20 md:pb-8 overflow-y-auto">
              <Outlet />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>

        {/* Mobile bottom nav */}
        <MobileNav />
      </div>
    </div>
  )
}
