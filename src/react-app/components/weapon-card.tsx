import { cn } from '@/lib/utils'
import { Card } from './card'

interface Props {
  name: string
  category: string
  rank: 'exotic' | 'named' | 'high-end'
  coreProperty: string
  property1: string
  property2: string
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
        <div className="flex flex-col gap-2">
          <img />
          <div className="flex gap-1 items-center">
            <img />
            <span>{props.talent}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className={cn({
            'text-gear-exotic': props.rank === 'exotic',
            'text-gear-highend': props.rank === 'named',
          })}
          >
            {props.name}
          </div>
          <div className="flex gap-1 items-center">
            <img />
            <span className="text-primary">+15%</span>
            <span>突击步枪伤害</span>
          </div>
          <div className="flex gap-1 items-center">
            <img />
            <span className="text-primary">+21%</span>
            <span>生命值伤害</span>
          </div>
          <div className="flex gap-1 items-center">
            <img />
            <span className="text-primary">+10%</span>
            <span>掩体伤害</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export {
  WeaponCard,
}
