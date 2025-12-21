// src/shared/constants/ids.ts

export const SpecializationIds = {
  Survivalist: 'survivalist',
  Demolitionist: 'demolitionist',
  Sharpshooter: 'sharpshooter',
  Gunner: 'gunner',
  Technician: 'technician',
  Firewall: 'firewall',
} as const

export type SpecializationId = typeof SpecializationIds[keyof typeof SpecializationIds]

export const SeasonalModifierIds = {
  Zealot: 'zealot',
  UnfriendlyFire: 'unfriendly_fire',
  RupertsTears: 'ruperts_tears',
  Forbidden: 'forbidden',
} as const

export type SeasonalModifierId = typeof SeasonalModifierIds[keyof typeof SeasonalModifierIds]

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
  SkillTier: 'skill_tier',
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

export const WeaponTalentIds = {
  ActumEst: 'actum_est',
  PerfectExtra: 'perfect_extra',
  Sledgehammer: 'sledgehammer',
} as const

export type WeaponTalentId = typeof WeaponTalentIds[keyof typeof WeaponTalentIds]

export const WeaponModIds = {
  Optic552HoloSight: 'optic_552_holo_sight',
} as const

export type WeaponModId = typeof WeaponModIds[keyof typeof WeaponModIds]

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
export const GearTalentIds = {
  PackInstincts: 'pack_instincts',
  Obliterate: 'obliterate',
  Vigilance: 'vigilance',
  GlassCannon: 'glass_cannon',
  PerfectGlassCannon: 'perfect_glass_cannon', // 完美天赋视为独立 ID
  StrikersRiskManagement: 'strikers_risk_management',
  // ...
} as const

export type GearTalentId = typeof GearTalentIds[keyof typeof GearTalentIds]

export const GearBrandIds = {
  Czech: 'czech',
  Alradi: 'alradi',
  Lengmo: 'lengmo',
} as const

export type GearBrandId = typeof GearBrandIds[keyof typeof GearBrandIds]

export const GearSetIds = {
  Strikers: 'strikers',
  Hunter: 'hunter',
} as const

export type GearSetId = typeof GearSetIds[keyof typeof GearSetIds]

export enum SkillPlatformId {
  SmartCover = 'smart_cover', // 智能掩体
  Trap = 'trap', // 陷阱
  StickyBomb = 'sticky_bomb', // 黏弹
  Decoy = 'decoy', // 诱饵
  Pulse = 'pulse', // 脉冲
  Turret = 'turret', // 机枪塔
  Hive = 'hive', // 蜂窝
  ChemLauncher = 'chem_launcher', // 化学发射器
  Firefly = 'firefly', // 萤火虫
  SeekerMine = 'seeker_mine', // 滚雷
  Drone = 'drone', // 无人机
  BallisticShield = 'ballistic_shield', // 护盾
}

export const SkillVariantIds = {
  // 智能掩体
  FortifiedSmartCover: 'fortified_smart_cover',
  PrecisionSmartCover: 'precision_smart_cover',

  // 陷阱
  ShockTrap: 'shock_trap',
  RepairTrap: 'repair_trap',
  ShrapnelTrap: 'shrapnel_trap',

  // 黏弹
  ExplosiveStickyBomb: 'explosive_sticky_bomb',
  BurnStickyBomb: 'burn_sticky_bomb',
  EMPStickyBomb: 'emp_sticky_bomb',

  // 诱饵
  HolographicDistractionDecoy: 'holographic_distraction_decoy',

  // 脉冲
  ScannerPulse: 'scanner_pulse',
  RemotePulse: 'remote_pulse',
  JammerPulse: 'jammer_pulse',
  BansheePulse: 'banshee_pulse',
  AchillesPulse: 'achilles_pulse',

  // 机枪塔
  AssaultTurret: 'assault_turret',
  IncineratorTurret: 'incinerator_turret',
  SnipperTurret: 'snipper_turret',
  ArtilleryTurret: 'artillery_turret',

  // 蜂窝
  RestorerHive: 'restorer_hive',
  StingerHive: 'stinger_hive',
  ReviverHive: 'reviver_hive',
  BoosterHive: 'booster_hive',
  ArtificerHive: 'artificer_hive',

  // 化学发射器
  ReinforcerChemLauncher: 'reinforcer_chem_launcher',
  FirestarterChemLauncher: 'firestarter_chem_launcher',
  RiotFoamChemLauncher: 'riot_foam_chem_launcher',
  OxidizerChemLauncher: 'oxidizer_chem_launcher',

  // 萤火虫
  BlinderFirefly: 'blinder_firefly',
  BursterFirefly: 'burster_firefly',
  DemolisherFirefly: 'demolisher_firefly',

  // 滚雷
  ExplosiveSeekerMine: 'explosive_seeker_mine',
  AirburstSeekerMine: 'airburst_seeker_mine',
  ClusterSeekerMine: 'cluster_seeker_mine',
  MenderSeekerMine: 'mender_seeker_mine',

  // 无人机
  StrikerDrone: 'striker_drone',
  DefenderDrone: 'defender_drone',
  BombardierDrone: 'bombardier_drone',
  FixerDrone: 'fixer_drone',
  TacticianDrone: 'tactician_drone',

  // 护盾
  BulwarkBallisticShield: 'bulwark_ballistic_shield',
  CrusaderBallisticShield: 'crusader_ballistic_shield',
  DeflectorBallisticShield: 'deflector_ballistic_shield',
  StrikerBallisticShield: 'striker_ballistic_shield',

} as const

export type SkillVariantId = typeof SkillVariantIds[keyof typeof SkillVariantIds]
