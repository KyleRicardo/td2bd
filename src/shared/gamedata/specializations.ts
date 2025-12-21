import type { SpecializationId } from '../constants/ids'
import { SpecializationIds } from '../constants/ids'

// 2. 具体分支定义 (实际装备的东西)
export interface SpecializationDef {
  id: SpecializationId
  signatureWeaponId: string
}

const SPECIALIZATIONS_REGISTRY: Record<SpecializationId, SpecializationDef> = {
  [SpecializationIds.Survivalist]: {
    id: SpecializationIds.Survivalist,
    signatureWeaponId: 'crossbow',
  },
  [SpecializationIds.Demolitionist]: {
    id: SpecializationIds.Demolitionist,
    signatureWeaponId: 'm32a1_grenade_launcher',
  },
  [SpecializationIds.Sharpshooter]: {
    id: SpecializationIds.Sharpshooter,
    signatureWeaponId: 'tac_50_sniper_rifle',
  },
  [SpecializationIds.Gunner]: {
    id: SpecializationIds.Gunner,
    signatureWeaponId: 'minigun',
  },
  [SpecializationIds.Technician]: {
    id: SpecializationIds.Technician,
    signatureWeaponId: 'p_017_missile_launcher',
  },
  [SpecializationIds.Firewall]: {
    id: SpecializationIds.Firewall,
    signatureWeaponId: 'k8_jet_stream_flamethrower',
  },
} as const

export { SPECIALIZATIONS_REGISTRY }
