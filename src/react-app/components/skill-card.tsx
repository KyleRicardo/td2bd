import type { SkillVariantId } from '@shared/constants/ids'
import { SKILL_VARIANTS_REGISTRY } from '@shared/gamedata/skills'
import { useTranslation } from 'react-i18next'
import { Card } from './card'

interface Props {
  id: SkillVariantId
}

function SkillCard({ id }: Props) {
  const { t } = useTranslation('skills')

  const skill = SKILL_VARIANTS_REGISTRY[id]

  return (
    <Card className="px-4 py-2 flex flex-row items-center gap-4 min-h-15 backdrop-blur-lg text-sm">
      <div>
        <img
          src={`/assets/skills/${id}.png`}
          alt={t(id)}
          className="size-9 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div>{t(id)}</div>
        <div>{t(skill.platformId)}</div>
      </div>
    </Card>
  )
}

export { SkillCard }
