import type { GearModId } from '@shared/constants/ids'
import { GEAR_MODS } from '@shared/gamedata/gear-mods'
import { useTranslation } from 'react-i18next'
import { AttributeRow } from '@/components/common/attribute-row'
import { GearModIcon } from './gear-attribute-icon'

interface Props {
  modId: GearModId
}

export function GearMod({ modId }: Props) {
  const { t } = useTranslation('gearmods')

  const data = GEAR_MODS[modId]

  if (!data) {
    return null
  }

  return (
    <AttributeRow
      icon={<GearModIcon type={data.type} />}
      value={data.format(data.value)}
      label={t(modId)}
    />
  )
}
