import { banChapter } from '../common'
import { CHAPTER__CONFIGURATION } from '@/constants'

import { isDef } from '../basic'

import { describe, it, expect, test } from 'vitest'

describe('禁用章', () => {
  it('禁用第一章', () => {
    const afterDispose = banChapter(CHAPTER__CONFIGURATION, ['foreword'])
    expect(afterDispose[0].disabled).toBeTruthy()
    expect(afterDispose[1].disabled).toBeFalsy()
    expect(afterDispose[2].disabled).toBeFalsy()
    expect(afterDispose[3].disabled).toBeFalsy()
    expect(afterDispose[4].disabled).toBeFalsy()
  })

  it('禁用第二章', () => {
    const afterDispose = banChapter(CHAPTER__CONFIGURATION, ['purest'])
    expect(afterDispose[1].disabled).toBeTruthy()
    expect(afterDispose[0].disabled).toBeFalsy()
    expect(afterDispose[2].disabled).toBeFalsy()
    expect(afterDispose[3].disabled).toBeFalsy()
    expect(afterDispose[4].disabled).toBeFalsy()
  })

  it('禁用第三章，第四章', () => {
    const afterDispose = banChapter(CHAPTER__CONFIGURATION, [
      'suspension-island',
      'dream-city',
      'programming-creation',
    ])
    expect(afterDispose[0].disabled).toBeFalsy()
    expect(afterDispose[1].disabled).toBeFalsy()
    expect(afterDispose[2].disabled).toBeTruthy()
    expect(afterDispose[3].disabled).toBeTruthy()
    expect(afterDispose[4].disabled).toBeTruthy()
  })
})

//
test('isDef', ()=> {
  expect(isDef(null)).toBeFalsy()
  expect(isDef(undefined)).toBeFalsy()
  expect(isDef(true)).toBeTruthy()
  expect(isDef(0)).toBeTruthy()
  expect(isDef(1)).toBeTruthy()
  expect(isDef('1')).toBeTruthy()
  expect(isDef([])).toBeTruthy()
  expect(isDef({})).toBeTruthy()
})
