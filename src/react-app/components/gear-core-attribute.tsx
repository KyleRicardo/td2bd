import type { GearCoreAttributeId } from '@shared/constants/ids'
import { GEAR_CORE_ATTRIBUTE_REGISTRY } from '@shared/gamedata/gear-core-attributes'
import { useTranslation } from 'react-i18next'
import { AttributeRow } from '@/components/common/attribute-row'
import { GearCoreAttributeIcon } from './gear-attribute-icon'

interface Props {
  id: GearCoreAttributeId
  value?: number
}

export function GearCoreAttribute({ id, value }: Props) {
  const { t } = useTranslation('attributes')

  const config = GEAR_CORE_ATTRIBUTE_REGISTRY[id]

  if (!config) {
    return null // 或者抛出错误
  }

  return (
    <AttributeRow
      icon={<GearCoreAttributeIcon type={config.type} />}
      value={config.format(value ?? config.standardMaxValue)} // 格式化后的数值
      label={t(id)}
    />
  )
}
