import { GearAttributeIds, GearCoreAttributeIds, GearModIds } from '@shared/constants/ids'
import { GearRarity, GearSlot, GearStatType, WeaponType } from '@shared/types'
import { createFileRoute } from '@tanstack/react-router'
import heavyGunnerImg from '@/assets/heavygunner.png'
import { Button } from '@/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { GearCard } from '@/components/gear-card'
import { WeaponCard } from '@/components/weapon-card'

export const Route = createFileRoute('/loadouts/$loadoutId')({
  component: LoadoutDetail,
})

function LoadoutDetail() {
  // const { loadoutId } = Route.useParams()

  return (
    <>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Open Dialog
        </DialogTrigger>
        <DialogPopup className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>退出游戏</DialogTitle>
          </DialogHeader>
          <DialogContent>
            你确定要退出吗？
          </DialogContent>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              取消
            </DialogClose>
            <Button type="submit">退出</Button>
          </DialogFooter>
        </DialogPopup>
      </Dialog>
      <h2>抹灭突袭</h2>
      <div className="grid gap-2 max-w-sm sm:max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-1 sm:gap-2">
          <div className="relative grid grid-cols-[72px_1fr] border">
            <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />

            <div className="flex flex-col items-center justify-center">
              <img src={heavyGunnerImg} className="size-9 sm:size-12" alt="Heavy Gunner" />
            </div>
            <div className="relative grid grid-rows-2 border-l">
              <div className="relative px-2">
                <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
                <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
                <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
                <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
                重机枪手
              </div>
              <div className="border-t">
                <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
                <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
                迷你炮机枪
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-[72px_1fr] border">
            <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
            <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
            <div className="flex flex-col items-center justify-center gap-1">
              <img src={heavyGunnerImg} className="size-7 sm:size-9" />
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
          <WeaponCard
            name="圣艾尔莫引擎"
            type={WeaponType.AssaultRifle}
            rank="exotic"
            coreProperty1="突击步枪伤害"
            coreProperty2="生命值伤害"
            property="掩体伤害"
            talent="actum_est"
          />
          <WeaponCard
            name="摇滚"
            type={WeaponType.Shotgun}
            rank="named"
            coreProperty1="霰弹枪伤害"
            coreProperty2="装甲伤害"
            property="掩体伤害"
            talent="perfect_extra"
          />
          <WeaponCard
            name={`"Kard"定制TDI`}
            type={WeaponType.Pistol}
            rank="named"
            coreProperty1="手枪伤害"
            coreProperty2="技能分阶"
            talent="sledgehammer"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <GearCard
            slot={GearSlot.Mask}
            id="coyotes_mask"
            rarity={GearRarity.Exotic}
            coreAttributes={[
              {
                id: GearCoreAttributeIds.WeaponDamage,
                value: 15.0,
              },
            ]}
            attributes={[
              {
                id: GearAttributeIds.CritHitChance,
                value: 6.0,
                recalibratable: true,
              },
            ]}
            talent={{
              id: 'pack_instincts',
              recalibratable: false,
            }}
            mods={[
              GearModIds.CritHitDamage,
            ]}
          />
        </div>
      </div>
    </>
  )
}
