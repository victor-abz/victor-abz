import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { ContentNav } from './ContentNav'
import { MobileHeader } from './MobileHeader'
import { MobileNav } from './MobileNav'
import { Footer } from './Footer'

export function VCardLayout() {
  return (
    <div className="min-h-screen flex items-start justify-center p-0 lg:p-8 lg:py-12">
      {/* Card container — fixed height on desktop so content scrolls inside */}
      <div className="w-full max-w-6xl bg-[var(--color-card)] lg:rounded-2xl lg:shadow-2xl overflow-hidden
        lg:h-[calc(100vh-6rem)] lg:max-h-[900px] lg:min-h-[500px]">
        {/* Mobile header */}
        <MobileHeader />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Sidebar — stays visible, scrolls independently if content overflows */}
          <div className="hidden lg:flex lg:flex-col lg:shrink-0 lg:overflow-y-auto">
            <Sidebar />
          </div>

          {/* Content area — nav pinned, main scrolls */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Desktop nav — sticky at top */}
            <div className="shrink-0">
              <ContentNav />
            </div>

            {/* Page content — this is the only thing that scrolls on desktop */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-8 pb-20 md:pb-6">
              <Outlet />
            </main>

            {/* Footer — pinned at bottom of content area */}
            <div className="shrink-0">
              <Footer />
            </div>
          </div>
        </div>

        {/* Mobile bottom nav */}
        <MobileNav />
      </div>
    </div>
  )
}
