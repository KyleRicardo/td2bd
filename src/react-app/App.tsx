import { Button } from '@/components/ui/button'

function App() {
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
                  TD2BD
                </div>
                <nav className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
                  <ul className="flex flex-1 list-none items-center justify-center space-x-1">
                    <li>配装</li>
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

      </main>
    </>
  )
}

export default App
