import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'
import { cn } from '@/lib/utils'
import { DivisionCorner } from './division-corner'

interface ChoiceCardProps {
  id: string
  value: string | number
}

function ChoiceGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn('grid gap-2 w-full', className)}
      {...props}
    />
  )
}

function ChoiceCard({ id, value, className, ...props }: React.ComponentProps<'div'> & ChoiceCardProps) {
  return (
    <label
      data-slot="label"
      className="w-full"
      htmlFor={id}
    >
      <div
        data-slot="card"
        className={cn('relative flex gap-2 has-data-checked:bg-primary/95 border has-data-checked:[&>img]:invert has-data-checked:*:text-background', className)}
      >
        <DivisionCorner />
        {props.children}
        <RadioPrimitive.Root id={id} value={value} className="absolute" />
      </div>
    </label>
  )
}

export { ChoiceCard, ChoiceGroup }
