import { useTranslation } from 'react-i18next'
import WeaponCoreAttributeIcon from '@/assets/weapon-core-attribute.png'
import { AttributeRow } from '@/components/common/attribute-row'

interface Props {
  attributeId: string
  value: string | number
  isNamedItem?: boolean
}

export function WeaponCoreAttribute2({ attributeId, value, isNamedItem }: Props) {
  const { t } = useTranslation('attributes')

  return (
    <AttributeRow
      icon={<img src={WeaponCoreAttributeIcon} className="size-4" alt="Weapon Core Attribute" />}
      value={attributeId === 'skill_tier' ? `+${value}` : `+${value}%`}
      label={t(attributeId)}
      isNamedItem={isNamedItem}
    />
  )
}
