import type * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-6 border bg-clip-padding py-6',
        className,
      )}
      data-slot="card"
      {...props}
    >
      <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
      {props.children}
    </div>
  )
}

export {
  Card,
}
