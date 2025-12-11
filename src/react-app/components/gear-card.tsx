import type { GearAttributeId, GearCoreAttributeId, GearModId } from '@shared/constants/ids'
import type { GearRarity, GearSlot } from '@shared/types'
import { GearAttributeIds, GearCoreAttributeIds } from '@shared/constants/ids'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { Card } from './card'
import { GearAttribute } from './gear-attribute'
import { GearCoreAttribute } from './gear-core-attribute'
import { GearMod } from './gear-mod'
import { GearSlotIcon } from './gear-slot-icon'
import { WeaponTalent } from './weapon-talent'

export interface GearData {
  id: string
  slot: GearSlot
  rarity: GearRarity
  brandId?: string // 金装或绿装的品牌套装名称 i18n key
  coreAttributes: {
    // 除了奇特都可以洗
    id: GearCoreAttributeId
    value: number
  }[]
  // 普通属性，金装一般 2 个，绿装一般 1个，最少 0 个（追悼），最多 3 个（张牙舞爪）
  // 奇特或具名定死的属性，记录下序号
  attributes: {
    id: GearAttributeId
    value: number
    recalibratable: boolean
  }[]
  talent: {
    id: string
    recalibratable: boolean
  } | null
  // 装备的改装槽位，最少 0 个，最多 2 个
  mods: GearModId[]
}

function GearCard(props: GearData) {
  const { t } = useTranslation('gears')

  return (
    <Card className="gap-0 p-0 grid grid-cols-[8px_1fr] min-h-24 backdrop-blur-lg">
      <div className={cn({
        'bg-gear-exotic': props.rarity === 'exotic',
        'bg-gear-highend': props.rarity === 'high-end' || props.rarity === 'named',
        'bg-gear-gearset': props.rarity === 'gear-set',
      })}
      >
      </div>
      <div className={cn('flex gap-2 p-1', {
        'bg-gear-exotic-background': props.rarity === 'exotic',
        'bg-gear-highend-background': props.rarity === 'high-end' || props.rarity === 'named',
        'bg-gear-gearset': props.rarity === 'gear-set',
      })}
      >
        <div className="flex flex-col gap-1 min-w-20 justify-center items-center">
          <div className="flex gap-0.5 items-center w-full">
            <GearSlotIcon slot={props.slot} />
            <span className={cn({
              'text-gear-exotic': props.rarity === 'exotic',
              'text-gear-highend': props.rarity === 'named',
            })}
            >
              {t(props.id)}
            </span>
          </div>
          <GearSlotIcon slot={props.slot} className="size-9 flex-1" />
          <div className="flex gap-0.5 items-center w-full h-5">
            {props.talent && <WeaponTalent talentId={props.talent.id} />}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <GearCoreAttribute id={GearCoreAttributeIds.WeaponDamage} />
          <GearAttribute id={GearAttributeIds.CritHitChance} />
          <GearAttribute id={GearAttributeIds.CritHitDamage} />
          {props.mods.map((modId, index) => <GearMod key={index} modId={modId} />)}
        </div>
      </div>
    </Card>
  )
}

export {
  GearCard,
}
