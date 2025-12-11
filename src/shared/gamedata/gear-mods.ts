import type { GearModId } from '../constants/ids'
import { GearModIds } from '../constants/ids'
import { GearStatType } from '../types'

interface GearModData {
  id: GearModId
  type: GearStatType
  format: (v: number) => string
  value: number
}

export const GEAR_MODS: Record<GearModId, GearModData> = {
  [GearModIds.CritHitChance]: {
    id: GearModIds.CritHitChance,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 6.0,
  },
  [GearModIds.CritHitDamage]: {
    id: GearModIds.CritHitDamage,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 12.0,
  },
  [GearModIds.HeadshotDamage]: {
    id: GearModIds.HeadshotDamage,
    type: GearStatType.Offensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.EliteProtection]: {
    id: GearModIds.EliteProtection,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 13.0,
  },
  [GearModIds.BleedResist]: {
    id: GearModIds.BleedResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.DisruptResist]: {
    id: GearModIds.DisruptResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.BurnResist]: {
    id: GearModIds.BurnResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.EnsnareResist]: {
    id: GearModIds.EnsnareResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.ShockResist]: {
    id: GearModIds.ShockResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.DisorientResist]: {
    id: GearModIds.DisorientResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.BlindResist]: {
    id: GearModIds.BlindResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.PulseResist]: {
    id: GearModIds.PulseResist,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
  [GearModIds.IncomRepair]: {
    id: GearModIds.IncomRepair,
    type: GearStatType.Defensive,
    format: v => `+${v.toFixed(0)}%`,
    value: 20.0,
  },
  [GearModIds.ArmorOnKill]: {
    id: GearModIds.ArmorOnKill,
    type: GearStatType.Defensive,
    format: v => `+${v}`,
    value: 18935,
  },
  [GearModIds.SkillHaste]: {
    id: GearModIds.SkillHaste,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    value: 12.0,
  },
  [GearModIds.RepairSkills]: {
    id: GearModIds.RepairSkills,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    value: 20.0,
  },
  [GearModIds.SkillDuration]: {
    id: GearModIds.SkillDuration,
    type: GearStatType.Skills,
    format: v => `+${v.toFixed(0)}%`,
    value: 10.0,
  },
} as const
