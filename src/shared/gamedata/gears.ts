import { GearRarity, GearSlot, GearStatType } from '../types'

// 定义一个严格的类型，确保数据不写歪
// 忍者包、追悼包都是有 3 条核心属性，需要兼容
export interface GearData {
  id: string
  slot: GearSlot
  rarity: GearRarity
  nameKey: string // i18n key
  brandId?: string // 金装或绿装的品牌套装名称 i18n key
  coreAttributes: {
    // 除了奇特以外，其他装备的核心属性都是可以洗的，所以recalibratable根据rarity来计算就行了
    type: GearStatType
  }[]
  // 普通属性，金装一般 2 个，绿装一般 1个，最少 0 个（追悼），最多 3 个（张牙舞爪）
  attributeSlots: number
  // 奇特或具名定死的属性，记录下序号
  fixedAttributes: {
    position: number // 从 1 开始计数
    type: GearStatType
    value: number
    labelKey: string // i18n key
  }[]
  hasTalent: boolean
  fixedTalentId?: string // 如果有固定天赋的话，写天赋ID即可
  // 装备的改装槽位，最少 0 个，最多 2 个
  modSlots: number
}

export const GEARS: readonly GearData[] = [
  {
    id: 'coyotes_mask',
    slot: GearSlot.Mask,
    rarity: GearRarity.Exotic,
    nameKey: 'coyotes_mask',
    coreAttributes: [
      { type: GearStatType.Offensive },
    ],
    attributeSlots: 2,
    fixedAttributes: [
      {
        position: 1,
        type: GearStatType.Offensive,
        value: 6,
        labelKey: 'chc',
      },
      {
        position: 2,
        type: GearStatType.Offensive,
        value: 12,
        labelKey: 'chd',
      },
    ],
    hasTalent: true,
    fixedTalentId: 'pack_instincts',
    modSlots: 1,
  },
]
