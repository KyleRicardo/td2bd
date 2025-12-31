import { createFileRoute } from '@tanstack/react-router'
import { GlobeIcon, ImportIcon, PlusIcon } from 'lucide-react'
import armorImg from '@/assets/armor.png'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { SelectWeaponDialog } from '@/components/select-weapon-dialog'

export const Route = createFileRoute('/loadouts/')({
  component: LoadoutList,
})

function LoadoutList() {
  return (
    <>
      <div className="container relative mx-auto px-6 pt-16 pb-0 sm:px-16 lg:pt-28 xl:px-20">
        <h2 className="text-xl my-4">配装列表</h2>
        <Card>
          <div className="flex w-full h-[720px] justify-center items-center">
            <div data-slot="preview">
              <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-4 text-balance rounded-xl border-dashed p-6 text-center md:p-12" data-slot="empty">
                <div className="flex max-w-sm flex-col items-center text-center">
                  <div className="relative mb-4" data-slot="empty-media">
                    <img src={armorImg} className="size-8" />
                  </div>
                  <div className="font-heading text-xl leading-none" data-slot="empty-title">尚无配装方案</div>
                  <div
                    className="text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4 [[data-slot=empty-title]+&]:mt-1"
                    data-slot="empty-description"
                  >
                    您目前尚未保存任何配装方案，请创建一个新的配装方案，或者从分享链接导入
                  </div>
                </div>
                <div className="flex w-full justify-center items-center gap-4">
                  <Button>
                    <PlusIcon />
                    Create Loadout
                  </Button>
                  <Button variant="outline">
                    <ImportIcon />
                    导入配装
                  </Button>
                </div>
                <Button variant="link">
                  <GlobeIcon />
                  浏览社区配装
                </Button>
                <SelectWeaponDialog titleKey="select primary weapon" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
