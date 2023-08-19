export type ChapterConfiguration = {
  id: string
  name?: string
  // 是否在列表中展示
  isShow?: boolean
  children?: ChapterConfiguration[]
}
export const CHAPTER__CONFIGURATION: ChapterConfiguration[] = [
  {
    id: 'foreword',
    name: '序章',
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
  },
  {
    id: 'dream-city',
  },
  {
    id: 'programming-creation',
  },
]
