import type { GearSetId } from '@shared/constants/ids'
import { cn } from '@/lib/utils'

export function GearSetIcon({ gearSetId, className, ...props }: React.ComponentProps<'img'> & { gearSetId: GearSetId }) {
  return (
    <img
      className={cn(
        'size-4 object-contain',
        className,
      )}
      src={`/assets/gearsets/${gearSetId}.png`}
      alt={gearSetId}
      {...props}
    />
  )
}
