import { WeaponType } from '@shared/types'
import { useTranslation } from 'react-i18next'
import WeaponCoreAttributeIcon from '@/assets/weapon-core-attribute.png'
import { AttributeRow } from '@/components/common/attribute-row'

// 映射表：突击步枪 -> 突击步枪伤害
const WEAPON_CORE_ATTRIBUTE_MAP: Record<WeaponType, string> = {
  [WeaponType.AssaultRifle]: 'ar_dmg', // 对应 i18n key
  [WeaponType.Rifle]: 'rf_dmg',
  [WeaponType.MarksmanRifle]: 'mmr_dmg',
  [WeaponType.SubmachineGun]: 'smg_dmg',
  [WeaponType.LightMachineGun]: 'lmg_dmg',
  [WeaponType.Shotgun]: 'sg_dmg',
  [WeaponType.Pistol]: 'pistol_dmg',
  // ...
}

export function WeaponCoreAttribute1({ type }: { type: WeaponType }) {
  const { t } = useTranslation('attributes')
  const attrKey = WEAPON_CORE_ATTRIBUTE_MAP[type]

  return (
    <AttributeRow
      icon={<img src={WeaponCoreAttributeIcon} className="size-4" alt="Weapon Core Attribute" />} // AR图标
      value="+15%" // 固定数值
      label={t(attrKey)}
    />
  )
}
