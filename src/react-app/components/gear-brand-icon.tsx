import type { GearBrandId } from '@shared/constants/ids'
import { cn } from '@/lib/utils'

export function GearBrandIcon({ brandId, className, ...props }: React.ComponentProps<'img'> & { brandId: GearBrandId }) {
  return (
    <img
      className={cn(
        'size-4 object-contain',
        className,
      )}
      src={`/assets/brands/${brandId}.png`}
      alt={brandId}
      {...props}
    />
  )
}
