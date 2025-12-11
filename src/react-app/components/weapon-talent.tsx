import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils' // 假设你有类似 shadcn 的 classnames 工具

interface Props {
  talentId: string // "突击步枪伤害"
  editable?: boolean // 是否可编辑（可选）
  isPerfect?: boolean // 是否为具名物品（可选）
}

export function WeaponTalent({
  talentId,
  editable,
  isPerfect,
  onClick,
  className,
  ...props
}: React.ComponentProps<'div'> & Props) {
  const { t } = useTranslation('talents')

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center gap-0.5 py-1 select-none',
        // 如果可点击，加个 hover 效果和手型指针，模拟游戏内的交互感
        editable && 'cursor-pointer hover:bg-white/5 active:bg-white/10 transition-colors rounded',
        className,
      )}
      {...props}
    >
      {/* 1. 图标容器：固定宽度防止文字不对齐 */}
      <div className="size-4 flex items-center justify-center shrink-0">
        <img src={`/assets/talents/${talentId}.png`} alt={t(talentId)} />
      </div>

      {/* 2. 文本 */}
      <div className="flex items-baseline gap-2 text-sm font-medium leading-none">
        <span className={cn({
          'text-gear-highend': isPerfect,
        })}
        >
          {t(talentId)}
        </span>
      </div>
    </div>
  )
}
