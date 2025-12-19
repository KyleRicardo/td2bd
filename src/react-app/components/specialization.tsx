import type { SpecializationId } from '@shared/constants/ids'
import { SPECIALIZATIONS_REGISTRY } from '@shared/gamedata/specializations'
import { useTranslation } from 'react-i18next'

interface Props {
  id: SpecializationId
}

function Specialization({ id }: Props) {
  const { t } = useTranslation('specializations')

  const data = SPECIALIZATIONS_REGISTRY[id]

  return (
    <div className="relative grid grid-cols-[72px_1fr] border">
      <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />

      <div className="flex flex-col items-center justify-center">
        <img src={`/assets/specializations/${data.id}.png`} className="size-9 sm:size-12" alt={t(data.id)} />
      </div>
      <div className="relative grid grid-rows-2 border-l">
        <div className="relative px-2">
          <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
          <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
          <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
          <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
          {t(data.id)}
        </div>
        <div className="border-t">
          <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
          <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
          {t(data.signatureWeaponId)}
        </div>
      </div>
    </div>
  )
}

export { Specialization }
