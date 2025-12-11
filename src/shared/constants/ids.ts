// src/shared/constants/ids.ts

export const WeaponCoreAttributeIds = {
  // 武器核心属性 #1
  AssaultRifleDamage: 'ar_dmg',
  RifleDamage: 'rf_dmg',
  MarksmanRifleDamage: 'mmr_dmg',
  ShotgunDamage: 'sg_dmg',
  SubmachineGunDamage: 'smg_dmg',
  LightMachineGunDamage: 'lmg_dmg',
  PistolDamage: 'pistol_dmg',

  // 武器核心属性 #2
  HpDamage: 'hp_dmg',
  ArmorDamage: 'armor_dmg',
  DamageToTOC: 'toc_dmg',
  CritHitChance: 'ch_chance',
  CritHitDamage: 'ch_dmg',
  HeadshotDamage: 'hs_dmg',
} as const

export type WeaponCoreAttributeId = typeof WeaponCoreAttributeIds[keyof typeof WeaponCoreAttributeIds]

export const WeaponAttributeIds = {
  // 武器第三条属性
  HpDamage: 'hp_dmg',
  ArmorDamage: 'armor_dmg',
  DamageToTOC: 'toc_dmg',
  CritHitChance: 'ch_chance',
  CritHitDamage: 'ch_dmg',
  HeadshotDamage: 'hs_dmg',
  RateOfFire: 'rof',
  MagazineSize: 'mag_size',
  ReloadSpeed: 'reload_speed',
  Stability: 'stability',
  Accuracy: 'accuracy',
  SwapSpeed: 'swap_speed',
  OptimalRange: 'optimal_range',
} as const

export type WeaponAttributeId = typeof WeaponAttributeIds[keyof typeof WeaponAttributeIds]

export const GearCoreAttributeIds = {
  // 装备核心属性
  WeaponDamage: 'wpn_dmg',
  Armor: 'armor',
  SkillTier: 'skill_tier',
} as const

export type GearCoreAttributeId = typeof GearCoreAttributeIds[keyof typeof GearCoreAttributeIds]

// 1. 属性类型 ID
export const GearAttributeIds = {
  // 装备属性
  CritHitChance: 'ch_chance',
  CritHitDamage: 'ch_dmg',
  HeadshotDamage: 'hs_dmg',
  WeaponControl: 'wpn_ctrl',
  HazardProtection: 'hazard_protection',
  ExplosionResist: 'explosion_resist',
  ArmorRegen: 'armor_regen',
  Health: 'hp',
  IncomRepair: 'incom_repair',
  SkillDamage: 'skill_dmg',
  SkillHaste: 'skill_haste',
  StatusEffect: 'status_effect',
  RepairSkills: 'repair_skills',
} as const

export type GearAttributeId = typeof GearAttributeIds[keyof typeof GearAttributeIds]

// 1. 属性类型 ID
export const GearModIds = {
  // 属性
  CritHitChance: 'ch_chance',
  CritHitDamage: 'ch_dmg',
  HeadshotDamage: 'hs_dmg',
  EliteProtection: 'elite_protection',
  BleedResist: 'bleed_resist',
  DisruptResist: 'disrupt_resist',
  BurnResist: 'burn_resist',
  EnsnareResist: 'ensnare_resist',
  ShockResist: 'shock_resist',
  DisorientResist: 'disorient_resist',
  BlindResist: 'blind_resist',
  PulseResist: 'pulse_resist',
  IncomRepair: 'incom_repair',
  ArmorOnKill: 'armor_on_kill',
  SkillHaste: 'skill_haste',
  RepairSkills: 'repair_skills',
  SkillDuration: 'skill_duration',
  // ...
} as const

export type GearModId = typeof GearModIds[keyof typeof GearModIds]

// 2. 天赋 ID
export const TalentIds = {
  Obliterate: 'obliterate',
  Vigilance: 'vigilance',
  GlassCannon: 'glass_cannon',
  PerfectGlassCannon: 'perfect_glass_cannon', // 完美天赋视为独立 ID
  // ...
} as const

export type TalentId = typeof TalentIds[keyof typeof TalentIds]
