import type { WeaponTalentId } from '../constants/ids'
import { WeaponTalentIds } from '../constants/ids'
import { WeaponType } from '../types'

interface WeaponTalentDef {
  id: WeaponTalentId
  isExotic: boolean
  isPerfect: boolean
  // 兼容性，可以洗到哪些类型的武器上面，如果为空则表明不在校准库中（无法提取的奇特或具名天赋，或者活动武器的独特天赋）
  compatibility: WeaponType[]
  interpolateValues: {
    [name: string]: number
  }
}

export const WEAPON_TALENTS_REGISTRY: Record<WeaponTalentId, WeaponTalentDef> = {
  [WeaponTalentIds.ActumEst]: {
    id: WeaponTalentIds.ActumEst,
    isExotic: true,
    isPerfect: false,
    compatibility: [],
    interpolateValues: {
      stack: 100,
    },
  },
  [WeaponTalentIds.PerfectExtra]: {
    id: WeaponTalentIds.PerfectExtra,
    isExotic: false,
    isPerfect: true,
    compatibility: [],
    interpolateValues: {
      extraMags: 20,
    },
  },
  [WeaponTalentIds.Sledgehammer]: {
    id: WeaponTalentIds.Sledgehammer,
    isExotic: false,
    isPerfect: false,
    compatibility: [
      WeaponType.AssaultRifle,
      WeaponType.Rifle,
      WeaponType.MarksmanRifle,
      WeaponType.SubmachineGun,
      WeaponType.LightMachineGun,
      WeaponType.Shotgun,
      WeaponType.Pistol,
    ],
    interpolateValues: {
      armorDamageBonus: 15,
    },
  },
} as const
