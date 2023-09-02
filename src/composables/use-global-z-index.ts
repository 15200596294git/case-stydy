/**
 *
 */
let globalZindex = 2000

/** 读取之后自动递增 */
export const useGlobalZIndex = () => ++globalZindex

/** 重置 global z-index */
export const setGlobalZIndex = (val: number) => {
  globalZindex = val
}
