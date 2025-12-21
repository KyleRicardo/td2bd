import type { GearAttributeId, GearBrandId, GearCoreAttributeId, GearModId, GearSetId, GearTalentId } from '@shared/constants/ids'
import type { GearSlot } from '@shared/types'
import { GearRarity } from '@shared/types'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { Card } from './card'
import { GearAttribute } from './gear-attribute'
import { GearBrandIcon } from './gear-brand-icon'
import { GearCoreAttribute } from './gear-core-attribute'
import { GearMod } from './gear-mod'
import { GearSetIcon } from './gear-set-icon'
import { GearSlotIcon } from './gear-slot-icon'
import { GearTalent } from './gear-talent'

export interface GearData {
  id: string
  slot: GearSlot
  rarity: GearRarity
  gearBrandId?: GearBrandId
  gearSetId?: GearSetId
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
    isNamedItem?: boolean
    recalibratable: boolean
  }[]
  talent?: {
    id: GearTalentId
    recalibratable: boolean
  }
  // 装备的改装槽位，最少 0 个，最多 2 个
  mods: GearModId[]
}

interface Props {
  data: GearData
}

function GearCard({ data }: Props) {
  const { t } = useTranslation()

  let displayName = ''
  if (data.rarity === GearRarity.Exotic || data.rarity === GearRarity.Named) {
    displayName = t(data.id, { ns: 'gears' })
  }
  else if (data.gearBrandId) {
    displayName = t(data.gearBrandId || '', { ns: 'brands' })
  }
  else if (data.gearSetId) {
    displayName = t(data.gearSetId || '', { ns: 'gearsets' })
  }

  return (
    <Card className="gap-0 p-0 grid grid-cols-[8px_1fr] text-[13px] min-h-[86px]">
      <div className={cn({
        'bg-gear-exotic': data.rarity === GearRarity.Exotic,
        'bg-gear-highend': data.rarity === GearRarity.HighEnd || data.rarity === GearRarity.Named,
        'bg-gear-gearset': data.rarity === GearRarity.GearSet,
      })}
      >
      </div>
      <div className={cn('flex py-0.5 overflow-hidden', {
        'bg-gear-exotic-background': data.rarity === GearRarity.Exotic,
        'bg-gear-highend-background': data.rarity === GearRarity.HighEnd || data.rarity === GearRarity.Named,
        'bg-gear-gearset-background': data.rarity === GearRarity.GearSet,
      })}
      >
        <div className="flex flex-col flex-1 gap-1 min-w-[70px] max-w-[40%] justify-center items-center overflow-clip">
          <div className="flex gap-0.5 items-center w-full">
            <GearSlotIcon slot={data.slot} />
            <span className={cn({
              'text-gear-exotic': data.rarity === GearRarity.Exotic,
              'text-gear-highend': data.rarity === GearRarity.Named,
            })}
            >
              {displayName}
            </span>
          </div>
          <div className="flex flex-col w-full pl-4">
            {data.rarity === GearRarity.Exotic && <GearSlotIcon slot={data.slot} className="size-9" />}
            {data.gearBrandId && <GearBrandIcon brandId={data.gearBrandId} className="size-9" />}
            {data.gearSetId && <GearSetIcon gearSetId={data.gearSetId} className="size-9" />}
          </div>
          <div className="flex gap-0.5 items-center w-full h-5">
            {data.talent && <GearTalent talentId={data.talent.id} recalibratable={data.talent.recalibratable} />}
          </div>
        </div>

        <div className="flex flex-col sm:flex-1 gap-0.5 overflow-hidden">
          {data.coreAttributes.map(coreAttr => (
            <GearCoreAttribute key={coreAttr.id} id={coreAttr.id} value={coreAttr.value} />
          ))}
          {data.attributes.map(attr => (
            <GearAttribute key={attr.id} id={attr.id} value={attr.value} isNamedItem={attr.isNamedItem} />
          ))}
          <div className="flex flex-col gap-0.5 mt-auto">
            {data.mods.map((modId, index) => <GearMod key={`${index}-${modId}`} modId={modId} />)}
          </div>
        </div>
      </div>
    </Card>
  )
}

export {
  GearCard,
}
