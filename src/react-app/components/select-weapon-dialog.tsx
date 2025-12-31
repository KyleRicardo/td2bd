import type { WeaponBaseData } from '@shared/gamedata/weapons'
import type { ListGroups } from './scrollspy'
import { WEAPONS } from '@shared/gamedata/weapons'
import { WeaponRarity, WeaponType } from '@shared/types'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { ChoiceCard } from './choice-card'
import { Scrollspy } from './scrollspy'
import { RadioGroup } from './ui/radio-group'
import { WeaponIcon } from './weapon-icon'

interface SelectWeaponDialogProps {
  titleKey: string
}

function SelectWeaponDialog({ titleKey }: SelectWeaponDialogProps) {
  const { t } = useTranslation('ui')

  const [weaponType, setWeaponType] = useState<Exclude<WeaponType, WeaponType.Pistol>>(WeaponType.AssaultRifle)

  const weaponList = useMemo(() => {
    const filteredWeapons = WEAPONS.filter(weapon => weapon.type === weaponType)
    const exotic = filteredWeapons.filter(weapon => weapon.rarity === WeaponRarity.Exotic)
    const named = filteredWeapons.filter(weapon => weapon.rarity === WeaponRarity.Named)
    const highend = filteredWeapons.filter(weapon => weapon.rarity === WeaponRarity.HighEnd)

    const result: ListGroups<WeaponBaseData>[] = [
      { id: 'exotic', labelKey: 'exotic', items: exotic },
      { id: 'named', labelKey: 'named', items: named },
      { id: 'highend', labelKey: 'highend', items: highend },
    ]

    return result
  }, [weaponType])

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{t(titleKey)}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-2">
          <h2>
            {t('select-weapon-dialog.description')}
            :
            {' '}
            {t(weaponType)}
          </h2>
          <RadioGroup
            className="flex gap-2"
            defaultValue={WeaponType.AssaultRifle}
            onValueChange={value => setWeaponType(value as Exclude<WeaponType, WeaponType.Pistol>)}
          >
            {Object.values(WeaponType).filter(type => type !== WeaponType.Pistol).map(type => (
              <ChoiceCard key={type} id={type} value={type} className="size-13 justify-center items-center">
                <WeaponIcon type={type} className="size-8" />
              </ChoiceCard>
            ))}
          </RadioGroup>
          <Scrollspy
            groups={weaponList}
            renderItem={item => (
              <ChoiceCard key={item.id} id={item.id} value={item.id} className="w-full gap-0 p-0 grid grid-cols-[4px_1fr] h-9">
                <div className={cn({
                  'bg-gear-exotic': item.rarity === WeaponRarity.Exotic,
                  'bg-gear-highend': item.rarity === WeaponRarity.HighEnd || item.rarity === WeaponRarity.Named,
                })}
                >
                </div>
                <div className={cn('flex gap-2 p-1', {
                  'bg-gear-exotic-background': item.rarity === WeaponRarity.Exotic,
                  'bg-gear-highend-background': item.rarity === WeaponRarity.HighEnd || item.rarity === WeaponRarity.Named,
                })}
                >
                  <WeaponIcon type={weaponType} className="size-6" />
                  <div>{item.id}</div>
                </div>
              </ChoiceCard>
            )}
          />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>
            取消
          </DialogClose>
          <Button type="submit">退出</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { SelectWeaponDialog }
