import type { GearSlot } from '@shared/types'
import type { GearData } from '@/components/gear-card'
import type { WeaponData } from '@/components/weapon-card'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { GearCard } from '@/components/gear-card'
import { WeaponCard } from '@/components/weapon-card'
import { loadouts } from '@/mock/loadouts'
import { SkillVariantId, SpecializationId } from '@shared/constants/ids'
import { SkillCard } from '@/components/skill-card'
import { Specialization } from '@/components/specialization'

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
    activeModifierId: string | null
    passiveModifierIds: string[]
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
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Open Dialog
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>退出游戏</DialogTitle>
          </DialogHeader>
          <div>
            你确定要退出吗？
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              取消
            </DialogClose>
            <Button type="submit">退出</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h2>{data.name}</h2>
      <div className="grid gap-2 max-w-full px-2 sm:max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-1 sm:gap-2">
          <Specialization id={data.specializationId} />
          <div className="relative grid grid-cols-[72px_1fr] border">
            <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
            <div className="flex flex-col items-center justify-center gap-1">
              <img src="" className="size-7 sm:size-9" />
              <div>狂徒</div>
            </div>
            <div className="relative grid grid-rows-3 border-l">
              <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
              <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
              <div>非友军误伤</div>
              <div>鲁珀特之泪</div>
              <div>禁止入内</div>
            </div>
          </div>
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
        <div className='grid grid-cols-2 gap-2'>
          <SkillCard id={data.skills.slot1} />
          <SkillCard id={data.skills.slot2} />
        </div>
      </div>
    </>
  )
}
