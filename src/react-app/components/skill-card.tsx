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
    <Card className="gap-0 p-0 min-h-15 text-sm">
      <div className="flex items-center gap-4 px-4 py-2">
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
      </div>
    </Card>
  )
}

export { SkillCard }
