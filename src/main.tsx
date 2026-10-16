import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { PrimeReactProvider } from 'primereact/api'

const basepath = import.meta.env.BASE_URL.replace(/\/$/, '')

const router = createRouter({
  routeTree,
  basepath: basepath || undefined,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={{
    ripple: true
  }}>
    <RouterProvider router={router} />
  </PrimeReactProvider>
)
