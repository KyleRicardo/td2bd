import type { WeaponAttributeId } from '../constants/ids'
import { WeaponAttributeIds } from '../constants/ids'

interface WeaponAttributeDef {
  id: WeaponAttributeId
  format: (v: number) => string
  standardMaxValue: number
}

export const WEAPON_ATTRIBUTE_REGISTRY: Record<WeaponAttributeId, WeaponAttributeDef> = {

  [WeaponAttributeIds.HpDamage]: {
    id: WeaponAttributeIds.HpDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
  },
  [WeaponAttributeIds.ArmorDamage]: {
    id: WeaponAttributeIds.ArmorDamage,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
  },
  [WeaponAttributeIds.DamageToTOC]: {
    id: WeaponAttributeIds.DamageToTOC,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
  },
  [WeaponAttributeIds.CritHitChance]: {
    id: WeaponAttributeIds.CritHitChance,
    format: v => `${v.toFixed(1)}%`,
    standardMaxValue: 9.5,
  },
  [WeaponAttributeIds.CritHitDamage]: {
    id: WeaponAttributeIds.CritHitDamage,
    format: v => `${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
  },
  [WeaponAttributeIds.HeadshotDamage]: {
    id: WeaponAttributeIds.HeadshotDamage,
    format: v => `${v.toFixed(0)}%`,
    standardMaxValue: 10.0,
  },
  [WeaponAttributeIds.RateOfFire]: {
    id: WeaponAttributeIds.RateOfFire,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 5.0,
  },
  [WeaponAttributeIds.MagazineSize]: {
    id: WeaponAttributeIds.MagazineSize,
    format: v => `+${v.toFixed(1)}%`,
    standardMaxValue: 12.5,
  },
  [WeaponAttributeIds.ReloadSpeed]: {
    id: WeaponAttributeIds.ReloadSpeed,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
  },
  [WeaponAttributeIds.Stability]: {
    id: WeaponAttributeIds.Stability,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
  },
  [WeaponAttributeIds.Accuracy]: {
    id: WeaponAttributeIds.Accuracy,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 12.0,
  },
  [WeaponAttributeIds.SwapSpeed]: {
    id: WeaponAttributeIds.SwapSpeed,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 15.0,
  },
  [WeaponAttributeIds.OptimalRange]: {
    id: WeaponAttributeIds.OptimalRange,
    format: v => `+${v.toFixed(0)}%`,
    standardMaxValue: 24.0,
  },
} as const
