import type { WeaponCoreAttributeId } from '@shared/constants/ids'
import { WEAPON_CORE_ATTRIBUTE_REGISTRY } from '@shared/gamedata/weapon-core-attributes'
import { useTranslation } from 'react-i18next'
import WeaponCoreAttributeIcon from '@/assets/weapon-core-attribute.png'
import { AttributeRow } from '@/components/common/attribute-row'

interface Props {
  attributeId: WeaponCoreAttributeId
  value: number
  isNamedItem?: boolean
}

export function WeaponCoreAttribute({ attributeId, value, isNamedItem }: Props) {
  const { t } = useTranslation('attributes')

  const attributeData = WEAPON_CORE_ATTRIBUTE_REGISTRY[attributeId]

  return (
    <AttributeRow
      icon={<img src={WeaponCoreAttributeIcon} className="size-4" alt="Weapon Core Attribute" />}
      value={attributeData.format(value)}
      label={t(attributeId)}
      isNamedItem={isNamedItem}
    />
  )
}
