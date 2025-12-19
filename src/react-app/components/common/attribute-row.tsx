import type { ReactNode } from 'react'
import { cn } from '@/lib/utils' // 假设你有类似 shadcn 的 classnames 工具

interface AttributeRowProps {
  icon: ReactNode // 比如 <CoreIcon color="red" /> 或 <WeaponTypeIcon />
  value: string // "+15%" 或 "+137%"
  label: string // "突击步枪伤害"
  editable?: boolean // 是否可编辑（可选）
  isNamedItem?: boolean // 是否为具名物品（可选）
}

export function AttributeRow({
  icon,
  value,
  label,
  editable,
  isNamedItem,
  onClick,
  className,
  ...props
}: React.ComponentProps<'div'> & AttributeRowProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center gap-0.5 select-none h-[19px]',
        // 如果可点击，加个 hover 效果和手型指针，模拟游戏内的交互感
        editable && 'cursor-pointer hover:bg-white/5 active:bg-white/10 transition-colors rounded',
        className,
      )}
      {...props}
    >
      {/* 1. 图标容器：固定宽度防止文字不对齐 */}
      {icon}

      {/* 2. 数值与文本 */}
      <div className="flex items-baseline gap-0.5 leading-none text-nowrap">
        <span className="text-primary w-9">
          {value}
        </span>
        <span className={cn({
          'text-gear-highend': isNamedItem,
        })}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
