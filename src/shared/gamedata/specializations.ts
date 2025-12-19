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
    signatureWeaponId: 'sv_knife',
  },
  [SpecializationIds.Demolitionist]: {
    id: SpecializationIds.Demolitionist,
    signatureWeaponId: 'dmr_launcher',
  },
  [SpecializationIds.Sharpshooter]: {
    id: SpecializationIds.Sharpshooter,
    signatureWeaponId: 'ss_marksman_rifle',
  },
  [SpecializationIds.Gunner]: {
    id: SpecializationIds.Gunner,
    signatureWeaponId: 'hg_light_machine_gun',
  },
  [SpecializationIds.Technician]: {
    id: SpecializationIds.Technician,
    signatureWeaponId: 'tnc_assault_rifle',
  },
  [SpecializationIds.Firewall]: {
    id: SpecializationIds.Firewall,
    signatureWeaponId: 'fw_pistol',
  },
} as const

export { SPECIALIZATIONS_REGISTRY }
