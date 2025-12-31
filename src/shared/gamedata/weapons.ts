import type { WeaponAttributeId, WeaponCoreAttributeId, WeaponTalentId } from '../constants/ids'
import { WeaponAttributeIds, WeaponCoreAttributeIds, WeaponTalentIds } from '../constants/ids'
import { WeaponRarity, WeaponType } from '../types'

// 定义一个严格的类型，确保数据不写歪
export interface WeaponBaseData {
  id: string
  type: WeaponType
  rarity: WeaponRarity
  // rpm: number
  // mag: number
  // baseDmg: number
  // headshotDmg: number
  // OptimalRange: number
  coreAttribute: {
    id: WeaponCoreAttributeId
    value: number
    isNamedItem?: boolean
  }
  attribute?: {
    // 普通属性，可以没有，有的话一定可以洗
    id: WeaponAttributeId
    value: number
  }
  talentId: WeaponTalentId
  mods: {
    // 武器的改装槽位，是整个配装工具里唯一允许留空的位置
    opticRail: boolean
    muzzle: boolean
    underBarrelRail: boolean
    magazineSlot: boolean
  }
}

export const WEAPONS: readonly WeaponBaseData[] = [
  {
    id: 'famas_2010',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.HighEnd,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'm4a1',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.HighEnd,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'akm',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.HighEnd,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'aug',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.HighEnd,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'p416',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.HighEnd,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'g36',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.HighEnd,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'eagle_bearer',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Exotic,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'capacitor',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Exotic,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'chameleon',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Exotic,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'the_bighorn',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Exotic,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'lexington',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'shield_breaker',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'kingslayer',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'ruther',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'care_taker',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'hunter',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'st_elmos_engine',
    type: WeaponType.AssaultRifle,
    rarity: WeaponRarity.Exotic,
    coreAttribute: {
      id: WeaponCoreAttributeIds.HpDamage,
      value: 21.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.ActumEst,
    mods: {
      opticRail: true,
      muzzle: true,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  {
    id: 'rock_n_roll',
    type: WeaponType.Shotgun,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.ArmorDamage,
      value: 12.0,
    },
    attribute: {
      id: WeaponAttributeIds.DamageToTOC,
      value: 10.0,
    },
    talentId: WeaponTalentIds.PerfectExtra,
    mods: {
      opticRail: true,
      muzzle: false,
      underBarrelRail: true,
      magazineSlot: false,
    },
  },
  {
    id: 'tdi_kard_custom',
    type: WeaponType.Pistol,
    rarity: WeaponRarity.Named,
    coreAttribute: {
      id: WeaponCoreAttributeIds.SkillTier,
      value: 1,
      isNamedItem: true,
    },
    talentId: WeaponTalentIds.Sledgehammer,
    mods: {
      opticRail: true,
      muzzle: false,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  // ... 其他武器
] as const // <--- as const 很重要，让它变成只读
