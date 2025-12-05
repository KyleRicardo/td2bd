import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Button } from '@/components/button'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <div className="sticky top-0 z-40 transform">
        <div className="absolute inset-0 h-full w-full bg-background/90 dark:bg-background/95 transition-opacity">
        </div>
        <nav className="relative z-40 border-b border-border backdrop-blur-sm transition-opacity">
          <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-6 xl:px-20">
            <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
              <div className="flex items-center">
                <div className="flex items-center shrink-0">
                  <Link
                    to="/"
                    activeProps={{
                      className: 'font-bold',
                    }}
                    activeOptions={{ exact: true }}
                  >
                    The Division 2 Build Tool
                  </Link>
                </div>
                <nav className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
                  <ul className="flex flex-1 list-none items-center justify-center space-x-4">
                    <li>
                      <Link
                        to="/loadouts"
                        activeProps={{
                          className: 'font-bold',
                        }}
                      >
                        配装
                      </Link>
                    </li>
                    <li>社区</li>
                    <li>百科</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button variant="outline">注册</Button>
              <Button>构建你的配装</Button>
            </div>
          </div>
        </nav>
      </div>
      <main className="relative min-h-screen">
        <Outlet />
      </main>
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
