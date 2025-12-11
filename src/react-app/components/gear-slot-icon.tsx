import { GearSlot } from '@shared/types'
import BackpackIcon from '@/assets/backpack.png'
import BodyArmorIcon from '@/assets/body_armor.png'
import GlovesIcon from '@/assets/gloves.png'
import HolsterIcon from '@/assets/holster.png'
import KneePadsIcon from '@/assets/knee_pads.png'
import MaskIcon from '@/assets/mask.png'
import { cn } from '@/lib/utils'

// 建立图标映射，方便复用
const GEAR_SLOT_ICON_MAP: Record<GearSlot, string> = {
  [GearSlot.Mask]: MaskIcon,
  [GearSlot.Backpack]: BackpackIcon,
  [GearSlot.BodyArmor]: BodyArmorIcon,
  [GearSlot.Gloves]: GlovesIcon,
  [GearSlot.Holster]: HolsterIcon,
  [GearSlot.KneePads]: KneePadsIcon,
}

export function GearSlotIcon({ slot, className, ...props }: React.ComponentProps<'img'> & { slot: GearSlot }) {
  const src = GEAR_SLOT_ICON_MAP[slot]

  return (
    <img
      className={cn(
        'size-4 object-contain',
        className,
      )}
      src={src}
      alt={slot}
      {...props}
    />
  )
}
