import type { GearAttributeId } from '@shared/constants/ids'
import { GEAR_ATTRIBUTE_REGISTRY } from '@shared/gamedata/gear-attributes'
import { useTranslation } from 'react-i18next'
import { AttributeRow } from '@/components/common/attribute-row'
import { GearAttributeIcon } from './gear-attribute-icon'

interface Props {
  id: GearAttributeId
  value?: number
  isNamedItem?: boolean
}

export function GearAttribute({ id, value, isNamedItem }: Props) {
  const { t } = useTranslation('attributes')

  const config = GEAR_ATTRIBUTE_REGISTRY[id]

  if (!config) {
    return null
  }

  return (
    <AttributeRow
      icon={<GearAttributeIcon type={config.type} />}
      value={config.format(value ?? config.standardMaxValue)}
      label={t(id)}
      isNamedItem={isNamedItem}
    />
  )
}
