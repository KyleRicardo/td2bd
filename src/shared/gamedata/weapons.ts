import { WeaponRarity, WeaponType } from '../types'

// 定义一个严格的类型，确保数据不写歪
export interface WeaponBaseData {
  id: string
  type: WeaponType
  rarity: WeaponRarity
  nameKey: string // i18n key
  // rpm: number
  // mag: number
  // baseDmg: number
  // headshotDmg: number
  // OptimalRange: number
  coreAttribute: {
    value: number
    labelKey: string // i18n key
    isNamedItem?: boolean
  }
  attribute: {
    // 普通属性，可以没有，有的话一定可以洗
    value: number
    labelKey: string // i18n key
  } | null
  talent: {
    // 天赋是一定有的，但能否重新校准，根据是否为奇特天赋或具名（完美）天赋来决定
    nameKey: string // i18n key
    isPerfect?: boolean
  }
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
    nameKey: 'famas_2010',
    coreAttribute: {
      value: 21.0,
      labelKey: 'hp_dmg',
    },
    attribute: {
      value: 10.0,
      labelKey: 'dtoc',
    },
    talent: {
      nameKey: 'fast_hand',
      isPerfect: false,
    },
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
    nameKey: 'st_elmos_engine',
    coreAttribute: {
      value: 21.0,
      labelKey: 'hp_dmg',
    },
    attribute: {
      value: 10.0,
      labelKey: 'dtoc',
    },
    talent: {
      nameKey: 'actum_est',
      isPerfect: false,
    },
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
    nameKey: 'rock_n_roll',
    coreAttribute: {
      value: 12.0,
      labelKey: 'armor_dmg',
    },
    attribute: {
      value: 10.0,
      labelKey: 'dtoc',
    },
    talent: {
      nameKey: 'perfect_extra',
      isPerfect: true,
    },
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
    nameKey: 'tdi_kard_custom',
    coreAttribute: {
      value: 1,
      labelKey: 'skill_tier',
      isNamedItem: true,
    },
    attribute: null,
    talent: {
      nameKey: 'sledgehammer',
      isPerfect: false,
    },
    mods: {
      opticRail: true,
      muzzle: false,
      underBarrelRail: true,
      magazineSlot: true,
    },
  },
  // ... 其他武器
] as const // <--- as const 很重要，让它变成只读
