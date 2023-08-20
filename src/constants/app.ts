import Foreword from '@/assets/img/foreword.png'
import Purest from '@/assets/img/purest.png'
import SuspensionIsland from '@/assets/img/suspension_island.png'
import DreamCity from '@/assets/img/dream_city.png'
import ProgrammingCity from '@/assets/img/programming_creation.png'

import { banChapter } from '@/utils/index'

export type ChapterConfiguration = {
  id: string
  name?: string
  // 是否在列表中展示
  isShow?: boolean
  // 章有图片
  img?: string
  // 是否禁用
  disabled?: boolean
  children?: ChapterConfiguration[]
}
const CHAPTER__CONFIGURATION: ChapterConfiguration[] = [
  {
    id: 'foreword',
    name: '序章',
    img: Foreword,
    children: [
      {
        id: 'foreword-start-video',
      },
      {
        id: 'foreword-guide',
      },
      {
        id: 'foreword-awards',
      },
    ],
  },
  {
    id: 'purest',
    name: '纯境',
    img: Purest,
    children: [
      {
        id: 'purest-start',
      },
      {
        id: 'purest-emission',
      },
      {
        id: 'purest-emission-video',
      },
      {
        id: 'purest-upgrade',
      },
      {
        id: 'purest-block',
        children: [
          {
            id: 'purest-block-guide',
          },
          {
            id: 'purest-block-complex',
          },
          {
            id: 'purest-block-stairs',
          },
          {
            id: 'purest-block-video',
          },
          {
            id: 'purest-block-circulation',
          },
        ],
      },
      {
        id: 'purest-awards',
      },
    ],
  },
  {
    id: 'suspension-island',
    img: SuspensionIsland,
  },
  {
    id: 'dream-city',
    img: DreamCity,
  },
  {
    id: 'programming-creation',
    img: ProgrammingCity,
  },
]

banChapter(CHAPTER__CONFIGURATION, [
  // 'purest',
  'suspension-island',
  'dream-city',
  'programming-creation',
])
export { CHAPTER__CONFIGURATION }
