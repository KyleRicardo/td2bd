// src/react-app/hooks/useGameTranslation.ts
import { useTranslation } from 'react-i18next'

export function useWeaponText(weaponId: string) {
  const { t } = useTranslation('weapons')

  return {
    name: t(`${weaponId}.name`),
    description: t(`${weaponId}.description`),
  }
}

export function useAttributeText(attrId: string) {
  const { t } = useTranslation('attributes')
  return t(attrId) // 属性通常只有名字
}
