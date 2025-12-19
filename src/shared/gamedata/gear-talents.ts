import type { GearSetId, GearTalentId } from '../constants/ids'
import { GearSetIds, GearTalentIds } from '../constants/ids'
import { GearSlot } from '../types'

interface GearTalentDef {
  id: GearTalentId
  isExotic: boolean
  isPerfect: boolean
  gearSetId?: GearSetId
  // 兼容性，可以洗到哪个部位的装备上面，如果为空则表明不在校准库中（无法提取的奇特或具名天赋，或者装备组的天赋）
  compatibility?: GearSlot.Backpack | GearSlot.BodyArmor
  params?: Record<string, number>
}

export const GEAR_TALENTS_REGISTRY: Record<GearTalentId, GearTalentDef> = {
  [GearTalentIds.PackInstincts]: {
    id: GearTalentIds.PackInstincts,
    isExotic: true,
    isPerfect: false,
  },
  [GearTalentIds.Obliterate]: {
    id: GearTalentIds.Obliterate,
    isExotic: false,
    isPerfect: false,
    compatibility: GearSlot.BodyArmor,
    params: {
      stack: 20,
    },
  },
  [GearTalentIds.Vigilance]: {
    id: GearTalentIds.Vigilance,
    isExotic: false,
    isPerfect: false,
    compatibility: GearSlot.Backpack,
    params: {
      extraDamage: 25,
    },
  },
  [GearTalentIds.GlassCannon]: {
    id: GearTalentIds.GlassCannon,
    isExotic: false,
    isPerfect: false,
    compatibility: GearSlot.BodyArmor,
    params: {
      makingDamage: 25,
      takingDamage: 50,
    },
  },
  [GearTalentIds.PerfectGlassCannon]: {
    id: GearTalentIds.PerfectGlassCannon,
    isExotic: false,
    isPerfect: true,
    compatibility: GearSlot.BodyArmor,
    params: {
      makingDamage: 30,
      takingDamage: 60,
    },
  },
  [GearTalentIds.StrikersRiskManagement]: {
    id: GearTalentIds.StrikersRiskManagement,
    isExotic: false,
    isPerfect: false,
    compatibility: GearSlot.Backpack,
    gearSetId: GearSetIds.Strikers,
    params: {
      weaponDamagePerStack: 0.9,
    },
  },

} as const
