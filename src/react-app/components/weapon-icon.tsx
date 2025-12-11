import type { WeaponType } from '@shared/types'
import { cn } from '@/lib/utils'

function WeaponIcon({ type, className, ...props }: React.ComponentProps<'img'> & { type: WeaponType }) {
  return (
    <img
      className={cn(
        'size-12',
        className,
      )}
      src={`/assets/weapons/${type}.png`}
      alt={type}
      {...props}
    />
  )
}

export { WeaponIcon }
