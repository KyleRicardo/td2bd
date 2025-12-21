import type { SeasonalModifierId } from '../constants/ids'
import { SeasonalModifierIds } from '../constants/ids'

export enum ModifierType {
  Active = 'active',
  Passive = 'passive',
}

// 2. 具体分支定义 (实际装备的东西)
export interface SeasonalModifierDef {
  id: SeasonalModifierId
  type: ModifierType
  seasonId: string
}

const SEASONAL_MODIFIERS_REGISTRY: Record<SeasonalModifierId, SeasonalModifierDef> = {
  [SeasonalModifierIds.Zealot]: {
    id: 'zealot',
    type: ModifierType.Active,
    seasonId: 'Y7S3',
  },
  [SeasonalModifierIds.UnfriendlyFire]: {
    id: 'unfriendly_fire',
    type: ModifierType.Passive,
    seasonId: 'Y7S3',
  },
  [SeasonalModifierIds.RupertsTears]: {
    id: 'ruperts_tears',
    type: ModifierType.Passive,
    seasonId: 'Y7S3',
  },
  [SeasonalModifierIds.Forbidden]: {
    id: 'forbidden',
    type: ModifierType.Passive,
    seasonId: 'Y7S3',
  },
} as const

export { SEASONAL_MODIFIERS_REGISTRY }
