
export const extend = Object.assign
// 不为null并且不为undefined就是定义
export const isDef = <T>(val: T): boolean => val !== null && val !== undefined

export type Numeric = number | string
