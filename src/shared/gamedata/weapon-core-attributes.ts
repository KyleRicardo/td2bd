import type { WeaponCoreAttributeId } from '../constants/ids'
import { WeaponCoreAttributeIds } from '../constants/ids'

interface WeaponCoreAttributeDef {
  id: WeaponCoreAttributeId
  format: (v: number) => string
  standardMaxValue: number // 40级金装的标准满值
}

export const WEAPON_CORE_ATTRIBUTE_REGISTRY: Record<WeaponCoreAttributeId, WeaponCoreAttributeDef> = {
  [WeaponCoreAttributeIds.AssaultRifleDamage]: {
    id: WeaponCoreAttributeIds.AssaultRifleDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.RifleDamage]: {
    id: WeaponCoreAttributeIds.RifleDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.MarksmanRifleDamage]: {
    id: WeaponCoreAttributeIds.MarksmanRifleDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.ShotgunDamage]: {
    id: WeaponCoreAttributeIds.ShotgunDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.SubmachineGunDamage]: {
    id: WeaponCoreAttributeIds.SubmachineGunDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.LightMachineGunDamage]: {
    id: WeaponCoreAttributeIds.LightMachineGunDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.PistolDamage]: {
    id: WeaponCoreAttributeIds.PistolDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponCoreAttributeIds.HpDamage]: {
    id: WeaponCoreAttributeIds.HpDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 21.0,
  },
  [WeaponCoreAttributeIds.ArmorDamage]: {
    id: WeaponCoreAttributeIds.ArmorDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
  },
  [WeaponCoreAttributeIds.DamageToTOC]: {
    id: WeaponCoreAttributeIds.DamageToTOC,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
  },
  [WeaponCoreAttributeIds.CritHitChance]: {
    id: WeaponCoreAttributeIds.CritHitChance,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 21.0,
  },
  [WeaponCoreAttributeIds.CritHitDamage]: {
    id: WeaponCoreAttributeIds.CritHitDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 17.0,
  },
  [WeaponCoreAttributeIds.HeadshotDamage]: {
    id: WeaponCoreAttributeIds.HeadshotDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 111.0,
  },
  [WeaponCoreAttributeIds.SkillTier]: {
    id: WeaponCoreAttributeIds.SkillTier,
    format: v => `+${v}`,
    standardMaxValue: 1,
  },
} as const
