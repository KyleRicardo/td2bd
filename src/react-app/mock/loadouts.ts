import type { LoadoutData } from '@/pages/loadouts/$loadoutId'
import { GearAttributeIds, GearBrandIds, GearCoreAttributeIds, GearModIds, GearSetIds, GearTalentIds, SeasonalModifierIds, SkillVariantIds, SpecializationIds, WeaponAttributeIds, WeaponCoreAttributeIds, WeaponModIds, WeaponTalentIds } from '@shared/constants/ids'
import { GearRarity, GearSlot, WeaponRarity, WeaponType } from '@shared/types'

const loadouts: LoadoutData[] = [
  {
    id: '2',
    name: '抹灭突袭',
    description: '适用于抹灭突袭任务的配装方案，注重生存和输出能力的平衡。',
    tags: ['抹灭突袭', '生存', '输出'],
    specializationId: SpecializationIds.Gunner,
    seasonalModifiers: {
      enabled: true,
      activeModifier: SeasonalModifierIds.Zealot,
      passiveModifiers: {
        slot1: SeasonalModifierIds.UnfriendlyFire,
        slot2: SeasonalModifierIds.RupertsTears,
        slot3: SeasonalModifierIds.Forbidden,
      },
    },
    weapons: {
      primary: {
        id: 'st_elmos_engine',
        type: WeaponType.AssaultRifle,
        rarity: WeaponRarity.Exotic,
        coreAttributes: [
          {
            id: WeaponCoreAttributeIds.AssaultRifleDamage,
            value: 15.0,
          },
          {
            id: WeaponCoreAttributeIds.HpDamage,
            value: 21.0,
          },
        ],
        attribute: {
          id: WeaponAttributeIds.DamageToTOC,
          value: 10.0,
        },
        talent: {
          id: WeaponTalentIds.ActumEst,
          recalibratable: false,
        },
        mods: {
          opticRail: WeaponModIds.Optic552HoloSight,
          muzzle: WeaponModIds.Optic552HoloSight,
          underBarrelRail: null,
          magazineSlot: WeaponModIds.Optic552HoloSight,
        },
      },
      secondary: {
        id: 'rock_n_roll',
        type: WeaponType.Shotgun,
        rarity: WeaponRarity.Named,
        coreAttributes: [
          {
            id: WeaponCoreAttributeIds.ShotgunDamage,
            value: 15.0,
          },
          {
            id: WeaponCoreAttributeIds.ArmorDamage,
            value: 12.0,
          },
        ],
        attribute: {
          id: WeaponAttributeIds.DamageToTOC,
          value: 10.0,
        },
        talent: {
          id: WeaponTalentIds.PerfectExtra,
          recalibratable: false,
        },
        mods: {
          opticRail: WeaponModIds.Optic552HoloSight,
          muzzle: WeaponModIds.Optic552HoloSight,
          underBarrelRail: null,
          magazineSlot: WeaponModIds.Optic552HoloSight,
        },
      },
      sidearm: {
        id: 'tdi_kard_custom',
        type: WeaponType.Pistol,
        rarity: WeaponRarity.Named,
        coreAttributes: [
          {
            id: WeaponCoreAttributeIds.PistolDamage,
            value: 15.0,
          },
          {
            id: WeaponCoreAttributeIds.SkillTier,
            value: 1,
            isNamedItem: true,
          },
        ],
        talent: {
          id: WeaponTalentIds.Sledgehammer,
          recalibratable: true,
        },
        mods: {
          opticRail: WeaponModIds.Optic552HoloSight,
          muzzle: WeaponModIds.Optic552HoloSight,
          underBarrelRail: null,
          magazineSlot: WeaponModIds.Optic552HoloSight,
        },
      },
    },
    gears: {
      mask: {
        id: 'coyotes_mask',
        slot: GearSlot.Mask,
        rarity: GearRarity.Exotic,
        coreAttributes: [
          {
            id: GearCoreAttributeIds.WeaponDamage,
            value: 15.0,
          },
        ],
        attributes: [
          {
            id: GearAttributeIds.CritHitChance,
            value: 6.0,
            recalibratable: false,
          },
          {
            id: GearAttributeIds.CritHitDamage,
            value: 12.0,
            recalibratable: false,
          },
        ],
        talent: {
          id: GearTalentIds.PackInstincts,
          recalibratable: false,
        },
        mods: [
          GearModIds.CritHitDamage,
        ],
      },
      backpack: {
        id: 'strikers_backpack',
        slot: GearSlot.Backpack,
        rarity: GearRarity.GearSet,
        gearSetId: GearSetIds.Strikers,
        coreAttributes: [
          {
            id: GearCoreAttributeIds.WeaponDamage,
            value: 15.0,
          },
        ],
        attributes: [
          {
            id: GearAttributeIds.CritHitDamage,
            value: 12.0,
            recalibratable: false,
          },
        ],
        talent: {
          id: GearTalentIds.StrikersRiskManagement,
          recalibratable: false,
        },
        mods: [
          GearModIds.CritHitDamage,
        ],
      },
      body_armor: {
        id: 'czech_armor',
        slot: GearSlot.BodyArmor,
        rarity: GearRarity.HighEnd,
        gearBrandId: GearBrandIds.Czech,
        coreAttributes: [
          {
            id: GearCoreAttributeIds.WeaponDamage,
            value: 15.0,
          },
        ],
        attributes: [
          {
            id: GearAttributeIds.CritHitChance,
            value: 6.0,
            recalibratable: false,
          },
          {
            id: GearAttributeIds.CritHitDamage,
            value: 12.0,
            recalibratable: false,
          },
        ],
        talent: {
          id: GearTalentIds.Obliterate,
          recalibratable: true,
        },
        mods: [
          GearModIds.CritHitDamage,
        ],
      },
      gloves: {
        id: 'strikers_gloves',
        slot: GearSlot.Gloves,
        rarity: GearRarity.GearSet,
        gearSetId: GearSetIds.Strikers,
        coreAttributes: [
          {
            id: GearCoreAttributeIds.WeaponDamage,
            value: 15.0,
          },
        ],
        attributes: [
          {
            id: GearAttributeIds.CritHitDamage,
            value: 12.0,
            recalibratable: false,
          },
        ],
        mods: [],
      },
      holster: {
        id: 'strikers_holster',
        slot: GearSlot.Holster,
        rarity: GearRarity.GearSet,
        gearSetId: GearSetIds.Strikers,
        coreAttributes: [
          {
            id: GearCoreAttributeIds.WeaponDamage,
            value: 15.0,
          },
        ],
        attributes: [
          {
            id: GearAttributeIds.CritHitDamage,
            value: 12.0,
            recalibratable: false,
          },
        ],
        mods: [],
      },
      knee_pads: {
        id: 'strikers_kneepads',
        slot: GearSlot.KneePads,
        rarity: GearRarity.GearSet,
        gearSetId: GearSetIds.Strikers,
        coreAttributes: [
          {
            id: GearCoreAttributeIds.WeaponDamage,
            value: 15.0,
          },
        ],
        attributes: [
          {
            id: GearAttributeIds.CritHitDamage,
            value: 12.0,
            recalibratable: false,
          },
        ],
        mods: [],
      },
    },
    skills: {
      slot1: SkillVariantIds.CrusaderBallisticShield,
      slot2: SkillVariantIds.ReviverHive,
    },
  },
]

export {
  loadouts,
}
