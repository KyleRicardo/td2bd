import type { SkillVariantId, SpecializationId } from '../constants/ids'
import { SkillPlatformId, SkillVariantIds } from '../constants/ids'

// 2. 具体分支定义 (实际装备的东西)
export interface SkillVariantDef {
  id: SkillVariantId
  platformId: SkillPlatformId
  requiredSpecializationId?: SpecializationId
}

const SKILL_VARIANTS_REGISTRY: Record<SkillVariantId, SkillVariantDef> = {
  [SkillVariantIds.FortifiedSmartCover]: {
    id: SkillVariantIds.FortifiedSmartCover,
    platformId: SkillPlatformId.SmartCover,
  },
  [SkillVariantIds.PrecisionSmartCover]: {
    id: SkillVariantIds.PrecisionSmartCover,
    platformId: SkillPlatformId.SmartCover,
  },
  [SkillVariantIds.ShockTrap]: {
    id: SkillVariantIds.ShockTrap,
    platformId: SkillPlatformId.Trap,
  },
  [SkillVariantIds.RepairTrap]: {
    id: SkillVariantIds.RepairTrap,
    platformId: SkillPlatformId.Trap,
  },
  [SkillVariantIds.ShrapnelTrap]: {
    id: SkillVariantIds.ShrapnelTrap,
    platformId: SkillPlatformId.Trap,
  },
  [SkillVariantIds.ExplosiveStickyBomb]: {
    id: SkillVariantIds.ExplosiveStickyBomb,
    platformId: SkillPlatformId.StickyBomb,
  },
  [SkillVariantIds.BurnStickyBomb]: {
    id: SkillVariantIds.BurnStickyBomb,
    platformId: SkillPlatformId.StickyBomb,
  },
  [SkillVariantIds.EMPStickyBomb]: {
    id: SkillVariantIds.EMPStickyBomb,
    platformId: SkillPlatformId.StickyBomb,
  },
  [SkillVariantIds.HolographicDistractionDecoy]: {
    id: SkillVariantIds.HolographicDistractionDecoy,
    platformId: SkillPlatformId.Decoy,
  },
  [SkillVariantIds.ScannerPulse]: {
    id: SkillVariantIds.ScannerPulse,
    platformId: SkillPlatformId.Pulse,
  },
  [SkillVariantIds.RemotePulse]: {
    id: SkillVariantIds.RemotePulse,
    platformId: SkillPlatformId.Pulse,
  },
  [SkillVariantIds.JammerPulse]: {
    id: SkillVariantIds.JammerPulse,
    platformId: SkillPlatformId.Pulse,
  },
  [SkillVariantIds.BansheePulse]: {
    id: SkillVariantIds.BansheePulse,
    platformId: SkillPlatformId.Pulse,
  },
  [SkillVariantIds.AchillesPulse]: {
    id: SkillVariantIds.AchillesPulse,
    platformId: SkillPlatformId.Pulse,
  },
  [SkillVariantIds.AssaultTurret]: {
    id: SkillVariantIds.AssaultTurret,
    platformId: SkillPlatformId.Turret,
  },
  [SkillVariantIds.IncineratorTurret]: {
    id: SkillVariantIds.IncineratorTurret,
    platformId: SkillPlatformId.Turret,
  },
  [SkillVariantIds.SnipperTurret]: {
    id: SkillVariantIds.SnipperTurret,
    platformId: SkillPlatformId.Turret,
  },
  [SkillVariantIds.ArtilleryTurret]: {
    id: SkillVariantIds.ArtilleryTurret,
    platformId: SkillPlatformId.Turret,
  },
  [SkillVariantIds.RestorerHive]: {
    id: SkillVariantIds.RestorerHive,
    platformId: SkillPlatformId.Hive,
  },
  [SkillVariantIds.StingerHive]: {
    id: SkillVariantIds.StingerHive,
    platformId: SkillPlatformId.Hive,
  },
  [SkillVariantIds.ReviverHive]: {
    id: SkillVariantIds.ReviverHive,
    platformId: SkillPlatformId.Hive,
  },
  [SkillVariantIds.BoosterHive]: {
    id: SkillVariantIds.BoosterHive,
    platformId: SkillPlatformId.Hive,
  },
  [SkillVariantIds.ArtificerHive]: {
    id: SkillVariantIds.ArtificerHive,
    platformId: SkillPlatformId.Hive,
  },
  [SkillVariantIds.ReinforcerChemLauncher]: {
    id: SkillVariantIds.ReinforcerChemLauncher,
    platformId: SkillPlatformId.ChemLauncher,
  },
  [SkillVariantIds.FirestarterChemLauncher]: {
    id: SkillVariantIds.FirestarterChemLauncher,
    platformId: SkillPlatformId.ChemLauncher,
  },
  [SkillVariantIds.RiotFoamChemLauncher]: {
    id: SkillVariantIds.RiotFoamChemLauncher,
    platformId: SkillPlatformId.ChemLauncher,
  },
  [SkillVariantIds.OxidizerChemLauncher]: {
    id: SkillVariantIds.OxidizerChemLauncher,
    platformId: SkillPlatformId.ChemLauncher,
  },
  [SkillVariantIds.BlinderFirefly]: {
    id: SkillVariantIds.BlinderFirefly,
    platformId: SkillPlatformId.Firefly,
  },
  [SkillVariantIds.BursterFirefly]: {
    id: SkillVariantIds.BursterFirefly,
    platformId: SkillPlatformId.Firefly,
  },
  [SkillVariantIds.DemolisherFirefly]: {
    id: SkillVariantIds.DemolisherFirefly,
    platformId: SkillPlatformId.Firefly,
  },
  [SkillVariantIds.ExplosiveSeekerMine]: {
    id: SkillVariantIds.ExplosiveSeekerMine,
    platformId: SkillPlatformId.SeekerMine,
  },
  [SkillVariantIds.AirburstSeekerMine]: {
    id: SkillVariantIds.AirburstSeekerMine,
    platformId: SkillPlatformId.SeekerMine,
  },
  [SkillVariantIds.ClusterSeekerMine]: {
    id: SkillVariantIds.ClusterSeekerMine,
    platformId: SkillPlatformId.SeekerMine,
  },
  [SkillVariantIds.MenderSeekerMine]: {
    id: SkillVariantIds.MenderSeekerMine,
    platformId: SkillPlatformId.SeekerMine,
  },
  [SkillVariantIds.StrikerDrone]: {
    id: SkillVariantIds.StrikerDrone,
    platformId: SkillPlatformId.Drone,
  },
  [SkillVariantIds.DefenderDrone]: {
    id: SkillVariantIds.DefenderDrone,
    platformId: SkillPlatformId.Drone,
  },
  [SkillVariantIds.BombardierDrone]: {
    id: SkillVariantIds.BombardierDrone,
    platformId: SkillPlatformId.Drone,
  },
  [SkillVariantIds.FixerDrone]: {
    id: SkillVariantIds.FixerDrone,
    platformId: SkillPlatformId.Drone,
  },
  [SkillVariantIds.TacticianDrone]: {
    id: SkillVariantIds.TacticianDrone,
    platformId: SkillPlatformId.Drone,
  },
  [SkillVariantIds.BulwarkBallisticShield]: {
    id: SkillVariantIds.BulwarkBallisticShield,
    platformId: SkillPlatformId.BallisticShield,
  },
  [SkillVariantIds.CrusaderBallisticShield]: {
    id: SkillVariantIds.CrusaderBallisticShield,
    platformId: SkillPlatformId.BallisticShield,
  },
  [SkillVariantIds.DeflectorBallisticShield]: {
    id: SkillVariantIds.DeflectorBallisticShield,
    platformId: SkillPlatformId.BallisticShield,
  },
  [SkillVariantIds.StrikerBallisticShield]: {
    id: SkillVariantIds.StrikerBallisticShield,
    platformId: SkillPlatformId.BallisticShield,
  },
} as const

export { SKILL_VARIANTS_REGISTRY }
