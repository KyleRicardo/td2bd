import type { GearAttributeId } from '../constants/ids'
import { GearAttributeIds } from '../constants/ids'
import { GearStatType } from '../types'

// 特殊的具名词条后期再慢慢加，目前先处理普通词条
interface GearAttributeDef {
  id: GearAttributeId
  type: GearStatType
  format: (v: number) => string
  standardMaxValue: number // 40级金装的标准满值
  canUseForRecalibration: boolean // 非具名的普通词条，才可用于重新校准
}

export const GEAR_ATTRIBUTE_REGISTRY: Record<GearAttributeId, GearAttributeDef> = {
  [GearAttributeIds.CritHitChance]: {
    id: GearAttributeIds.CritHitChance,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 6.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.CritHitDamage]: {
    id: GearAttributeIds.CritHitDamage,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.HeadshotDamage]: {
    id: GearAttributeIds.HeadshotDamage,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.WeaponControl]: {
    id: GearAttributeIds.WeaponControl,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.HazardProtection]: {
    id: GearAttributeIds.HazardProtection,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.ExplosionResist]: {
    id: GearAttributeIds.WeaponControl,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.ArmorRegen]: {
    id: GearAttributeIds.ArmorRegen,
    type: GearStatType.Defensive,
    format: v => `+${v}`,
    standardMaxValue: 4925,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.Health]: {
    id: GearAttributeIds.Health,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.IncomRepair]: {
    id: GearAttributeIds.IncomRepair,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.SkillDamage]: {
    id: GearAttributeIds.SkillDamage,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.SkillHaste]: {
    id: GearAttributeIds.SkillHaste,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.StatusEffect]: {
    id: GearAttributeIds.StatusEffect,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
  [GearAttributeIds.RepairSkills]: {
    id: GearAttributeIds.RepairSkills,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
    canUseForRecalibration: true,
  },
} as const
