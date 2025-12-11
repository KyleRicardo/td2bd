import type { WeaponType } from '@shared/types'
import { cn } from '@/lib/utils'
import { Card } from './card'
import { WeaponAttribute } from './weapon-attribute'
import { WeaponCoreAttribute1 } from './weapon-core-attribute1'
import { WeaponCoreAttribute2 } from './weapon-core-attribute2'
import { WeaponIcon } from './weapon-icon'
import { WeaponTalent } from './weapon-talent'

interface Props {
  name: string
  type: WeaponType
  rank: 'exotic' | 'named' | 'high-end'
  coreProperty1: string
  coreProperty2: string
  property?: string
  talent: string
  mod1?: string
  mod2?: string
  mod3?: string
  mod4?: string
}

function WeaponCard(props: Props) {
  return (
    <Card className="gap-0 p-0 grid grid-cols-[8px_1fr] min-h-24 backdrop-blur-lg">
      <div className={cn({
        'bg-gear-exotic': props.rank === 'exotic',
        'bg-gear-highend': props.rank === 'high-end' || props.rank === 'named',
      })}
      >
      </div>
      <div className={cn('flex gap-2 p-1', {
        'bg-gear-exotic-background': props.rank === 'exotic',
        'bg-gear-highend-background': props.rank === 'high-end' || props.rank === 'named',
      })}
      >
        <div className="flex flex-col gap-2 min-w-20 items-center">
          <div className="flex flex-1 flex-col justify-center">
            <WeaponIcon type={props.type} />
          </div>
          <WeaponTalent talentId={props.talent} />
        </div>

        <div className="flex flex-col gap-1">
          <div className={cn({
            'text-gear-exotic': props.rank === 'exotic',
            'text-gear-highend': props.rank === 'named',
          })}
          >
            {props.name}
          </div>
          <WeaponCoreAttribute1 type={props.type} />
          <WeaponCoreAttribute2 attributeId="hp_dmg" value={21} />
          {props.property && (
            <WeaponAttribute attributeId="toc_dmg" value={12} />
          )}
        </div>
      </div>
    </Card>
  )
}

export {
  WeaponCard,
}
