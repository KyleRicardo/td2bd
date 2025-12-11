import { useTranslation } from 'react-i18next'
import WeaponAttributeIcon from '@/assets/weapon-attribute.png'
import { AttributeRow } from '@/components/common/attribute-row'

interface Props {
  attributeId: string
  value: string | number
}

export function WeaponAttribute({ attributeId, value }: Props) {
  const { t } = useTranslation('attributes')

  return (
    <AttributeRow
      icon={<img src={WeaponAttributeIcon} className="size-4" alt="Weapon Core Attribute" />}
      value={attributeId === 'skill_tier' ? `+${value}` : `+${value}%`}
      label={t(attributeId)}
    />
  )
}
