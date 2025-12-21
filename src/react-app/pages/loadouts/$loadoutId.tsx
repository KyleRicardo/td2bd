import type { SeasonalModifierId, SkillVariantId, SpecializationId } from '@shared/constants/ids'
import type { GearSlot } from '@shared/types'
import type { GearData } from '@/components/gear-card'
import type { WeaponData } from '@/components/weapon-card'
import { createFileRoute } from '@tanstack/react-router'
import { GearCard } from '@/components/gear-card'
import { SeasonalModifiers } from '@/components/seasonal-modifiers'
import { SkillCard } from '@/components/skill-card'
import { Specialization } from '@/components/specialization'
import { WeaponCard } from '@/components/weapon-card'
import { loadouts } from '@/mock/loadouts'

export const Route = createFileRoute('/loadouts/$loadoutId')({
  component: LoadoutDetail,
})

export interface LoadoutData {
  id: string
  name: string
  description?: string
  tags?: string[]
  specializationId: SpecializationId
  seasonalModifiers: {
    enabled: boolean
    activeModifier: SeasonalModifierId | null
    passiveModifiers: {
      slot1: SeasonalModifierId | null
      slot2: SeasonalModifierId | null
      slot3: SeasonalModifierId | null
    }
  }
  weapons: {
    primary: WeaponData
    secondary: WeaponData
    sidearm: WeaponData
  }
  gears: {
    [slot in GearSlot]: GearData
  }
  skills: {
    slot1: SkillVariantId
    slot2: SkillVariantId
  }
}

function LoadoutDetail() {
  const { loadoutId } = Route.useParams()

  const data = loadouts.find(l => l.id === loadoutId)!

  return (
    <>
      <div className="grid gap-2 max-w-full px-2 sm:max-w-lg mx-auto my-4">
        <h2>{data.name}</h2>
      </div>
      <div className="grid gap-2 max-w-full px-2 sm:max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-2">
          <Specialization id={data.specializationId} />
          <SeasonalModifiers data={data.seasonalModifiers} />
        </div>
        <div className="grid gap-2">
          {data.weapons.primary && (
            <WeaponCard
              data={data.weapons.primary}
            />
          )}
          {data.weapons.secondary && (
            <WeaponCard
              data={data.weapons.secondary}
            />
          )}
          {data.weapons.sidearm && (
            <WeaponCard
              data={data.weapons.sidearm}
            />
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <GearCard data={data.gears.mask} />
          <GearCard data={data.gears.backpack} />
          <GearCard data={data.gears.body_armor} />
          <GearCard data={data.gears.gloves} />
          <GearCard data={data.gears.holster} />
          <GearCard data={data.gears.knee_pads} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <SkillCard id={data.skills.slot1} />
          <SkillCard id={data.skills.slot2} />
        </div>
      </div>
    </>
  )
}
