import type { WeaponAttributeId, WeaponCoreAttributeId, WeaponModId, WeaponTalentId } from '@shared/constants/ids'
import type { WeaponType } from '@shared/types'
import { WeaponRarity } from '@shared/types'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { Card } from './card'
import { WeaponAttribute } from './weapon-attribute'
import { WeaponCoreAttribute } from './weapon-core-attribute'
import { WeaponIcon } from './weapon-icon'
import { WeaponTalent } from './weapon-talent'

export interface WeaponData {
  id: string
  type: WeaponType
  rarity: WeaponRarity
  coreAttributes: {
    id: WeaponCoreAttributeId
    value: number
  }[]
  attribute?: {
    id: WeaponAttributeId
    value: number
  }
  talent: {
    id: WeaponTalentId
    recalibratable: boolean
  }
  mods: {
    opticRail: WeaponModId | null
    muzzle: WeaponModId | null
    underBarrelRail: WeaponModId | null
    magazineSlot: WeaponModId | null
  }
}

interface Props {
  data: WeaponData
}

function WeaponCard({ data }: Props) {
  const { t } = useTranslation('weapons')

  return (
    <Card className="gap-0 p-0 grid grid-cols-[8px_1fr] text-sm min-h-[92px] backdrop-blur-lg">
      <div className={cn({
        'bg-gear-exotic': data.rarity === WeaponRarity.Exotic,
        'bg-gear-highend': data.rarity === WeaponRarity.HighEnd || data.rarity === WeaponRarity.Named,
      })}
      >
      </div>
      <div className={cn('flex gap-2 p-1', {
        'bg-gear-exotic-background': data.rarity === WeaponRarity.Exotic,
        'bg-gear-highend-background': data.rarity === WeaponRarity.HighEnd || data.rarity === WeaponRarity.Named,
      })}
      >
        <div className="flex flex-col gap-2 min-w-20 items-center">
          <div className="flex flex-1 flex-col justify-center">
            <WeaponIcon type={data.type} />
          </div>
          <WeaponTalent talentId={data.talent.id} recalibratable={data.talent.recalibratable} />
        </div>

        <div className="flex flex-col flex-1 gap-1">
          <div className={cn({
            'text-gear-exotic': data.rarity === WeaponRarity.Exotic,
            'text-gear-highend': data.rarity === WeaponRarity.Named,
          })}
          >
            {t(data.id)}
          </div>
          {data.coreAttributes.map(coreAttr => (
            <WeaponCoreAttribute key={coreAttr.id} attributeId={coreAttr.id} value={coreAttr.value} />
          ))}
          {data.attribute && (
            <WeaponAttribute attributeId={data.attribute.id} value={data.attribute.value} />
          )}
        </div>
      </div>
    </Card>
  )
}

export {
  WeaponCard,
}
