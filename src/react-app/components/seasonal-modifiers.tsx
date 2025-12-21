import type { SeasonalModifierId } from '@shared/constants/ids'
import { useTranslation } from 'react-i18next'

interface SeasonalModifierData {
  enabled: boolean
  activeModifier: SeasonalModifierId | null
  passiveModifiers: {
    slot1: SeasonalModifierId | null
    slot2: SeasonalModifierId | null
    slot3: SeasonalModifierId | null
  }
}

function ActiveSeasonalModifier({ modifierId }: { modifierId: SeasonalModifierId | null }) {
  const { t } = useTranslation('seasonal-modifiers')

  return (
    <div className="flex flex-col items-center justify-center gap-1 p-1">
      {modifierId
        ? (
            <>
              <img src={`/assets/seasonal-modifiers/${modifierId}.png`} className="size-7 sm:size-9" />
              <div>{t(modifierId)}</div>
            </>
          )
        : (
            <div>无</div>
          )}
    </div>
  )
}

function PassiveSeasonalModifier({ modifierId }: { modifierId: SeasonalModifierId | null }) {
  const { t } = useTranslation('seasonal-modifiers')

  return (
    <div className="flex items-center gap-2">
      {modifierId
        ? (
            <>
              <img src={`/assets/seasonal-modifiers/${modifierId}.png`} className="size-4 object-contain" />
              <div>{t(modifierId)}</div>
            </>
          )
        : (
            <div>无</div>
          )}
    </div>
  )
}

function SeasonalModifiers({ data }: { data: SeasonalModifierData }) {
  return (
    <div className="relative grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] border text-sm">
      <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
      <ActiveSeasonalModifier modifierId={data.activeModifier} />
      <div className="relative grid grid-rows-3 border-l px-2 py-1 gap-0.5">
        <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
        <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
        <PassiveSeasonalModifier modifierId={data.passiveModifiers.slot1} />
        <PassiveSeasonalModifier modifierId={data.passiveModifiers.slot2} />
        <PassiveSeasonalModifier modifierId={data.passiveModifiers.slot3} />
      </div>
    </div>
  )
}

export { SeasonalModifiers }
