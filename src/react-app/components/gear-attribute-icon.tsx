import { GearStatType } from '@shared/types'
import iconBlue from '@/assets/blue-core.png'
import BlueModIcon from '@/assets/blue-mod.png'
import iconRed from '@/assets/red-core.png'
import RedModIcon from '@/assets/red-mod.png'
import SmallBlueCoreIcon from '@/assets/small-blue-core.png'
import SmallRedCoreIcon from '@/assets/small-red-core.png'
import iconYellow from '@/assets/yellow-core.png'
import { cn } from '@/lib/utils'

// 建立图标映射，方便复用
const CORE_ATTRIBUTE_ICON_MAP: Record<GearStatType, string> = {
  [GearStatType.Offensive]: iconRed,
  [GearStatType.Defensive]: iconBlue,
  [GearStatType.Skills]: iconYellow,
}

const ATTRIBUTE_ICON_MAP: Record<GearStatType, string> = {
  [GearStatType.Offensive]: SmallRedCoreIcon,
  [GearStatType.Defensive]: SmallBlueCoreIcon,
  [GearStatType.Skills]: SmallBlueCoreIcon,
}

const MOD_ICON_MAP: Record<GearStatType, string> = {
  [GearStatType.Offensive]: RedModIcon,
  [GearStatType.Defensive]: BlueModIcon,
  [GearStatType.Skills]: BlueModIcon,
}

export function GearCoreAttributeIcon({ type, className, ...props }: React.ComponentProps<'img'> & { type: GearStatType }) {
  const src = CORE_ATTRIBUTE_ICON_MAP[type]

  return (
    <img
      className={cn(
        'size-4 object-contain',
        className,
      )}
      src={src}
      alt="Gear Core Attribute"
      {...props}
    />
  )
}

export function GearAttributeIcon({ type, className, ...props }: React.ComponentProps<'img'> & { type: GearStatType }) {
  const src = ATTRIBUTE_ICON_MAP[type]

  return (
    <img
      className={cn(
        'size-4 object-contain',
        className,
      )}
      src={src}
      alt="Gear Attribute"
      {...props}
    />
  )
}

export function GearModIcon({ type, className, ...props }: React.ComponentProps<'img'> & { type: GearStatType }) {
  const src = MOD_ICON_MAP[type]

  return (
    <img
      className={cn(
        'size-4 object-contain',
        className,
      )}
      src={src}
      alt="Gear Mod"
      {...props}
    />
  )
}
