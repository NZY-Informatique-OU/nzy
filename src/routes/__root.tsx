import { Outlet, createRootRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css"
import "../index.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
