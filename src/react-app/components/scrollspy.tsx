import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { DivisionCorner } from './division-corner'
import { ScrollArea } from './scroll-area'
import { ScrollspyPrimitive } from './ui/scrollspy'

export interface ListGroups<T> {
  id: string
  labelKey: string
  items: T[]
}

interface ScrollspyProps<T> {
  groups: ListGroups<T>[]
  renderItem: (item: T) => React.ReactNode
  className?: string
}

function Scrollspy<T extends { id: string }>({ groups, renderItem, className }: ScrollspyProps<T>) {
  const parentRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className={cn('flex grow gap-4', className)}>
      <div className="flex flex-col gap-2 w-16 shrink-0 border-y">
        <ScrollspyPrimitive offset={50} targetRef={parentRef} className="relative flex flex-1 flex-col" history={false}>
          <DivisionCorner />
          {groups.map(group => (
            <button
              type="button"
              key={group.id}
              data-scrollspy-anchor={group.id}
              className="grow border-b border-border/20 last:border-b-0 data-[active=true]:bg-accent data-[active=true]:text-primary"
            >
              {group.labelKey}
            </button>
          ))}
        </ScrollspyPrimitive>
      </div>
      <div className="relative flex-1 border-y">
        <DivisionCorner />
        <ScrollArea className="h-[500px] pe-5 -me-5" viewportRef={parentRef}>
          <div className="px-2">
            {groups.map(group => (
              <div key={group.id} id={group.id} className="">
                <h3 className="text-foreground text-base my-2">{group.labelKey}</h3>
                <div className="space-y-2">
                  {group.items.map(item => (
                    <div key={item.id}>
                      {renderItem(item)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export { Scrollspy }
