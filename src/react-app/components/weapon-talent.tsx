import type { WeaponTalentId } from '@shared/constants/ids'
import { WEAPON_TALENTS_REGISTRY } from '@shared/gamedata/weapon-talents'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils' // 假设你有类似 shadcn 的 classnames 工具

interface Props {
  talentId: WeaponTalentId
  recalibratable: boolean // 是否可重新校准
}

export function WeaponTalent({
  talentId,
  recalibratable,
  onClick,
  className,
  ...props
}: React.ComponentProps<'div'> & Props) {
  const { t } = useTranslation('talents')

  const talentData = WEAPON_TALENTS_REGISTRY[talentId]

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center gap-0.5 select-none',
        // 如果可点击，加个 hover 效果和手型指针，模拟游戏内的交互感
        recalibratable && 'cursor-pointer hover:bg-white/5 active:bg-white/10 transition-colors rounded',
        className,
      )}
      {...props}
    >
      {/* 1. 图标容器：固定宽度防止文字不对齐 */}
      <div className="size-4 flex items-center justify-center shrink-0">
        <img src={`/assets/talents/${talentId}.png`} alt={t(talentId)} />
      </div>

      {/* 2. 文本 */}
      <div className="flex items-baseline gap-2 text-sm font-medium leading-none text-nowrap">
        <span className={cn({
          'text-gear-highend': talentData.isPerfect,
        })}
        >
          {t(talentId)}
        </span>
      </div>
    </div>
  )
}
