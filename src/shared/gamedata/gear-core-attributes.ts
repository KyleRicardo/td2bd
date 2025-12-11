import type { GearCoreAttributeId } from '../constants/ids'
import { GearCoreAttributeIds } from '../constants/ids'
import { GearStatType } from '../types'

interface GearCoreAttributeDef {
  id: GearCoreAttributeId
  type: GearStatType
  format: (v: number) => string
  standardMaxValue: number // 40级金装的标准满值
}

export const GEAR_CORE_ATTRIBUTE_REGISTRY: Record<GearCoreAttributeId, GearCoreAttributeDef> = {
  [GearCoreAttributeIds.WeaponDamage]: {
    id: GearCoreAttributeIds.WeaponDamage,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [GearCoreAttributeIds.Armor]: {
    id: GearCoreAttributeIds.Armor,
    type: GearStatType.Defensive,
    format: v => `+${v / 1000}k`,
    standardMaxValue: 170000,
  },
  [GearCoreAttributeIds.SkillTier]: {
    id: GearCoreAttributeIds.SkillTier,
    type: GearStatType.Skills,
    format: v => `+${v}`,
    standardMaxValue: 1,
  },
} as const
