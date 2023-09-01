export type Mod = string | { [key: string]: any }
export type Mods = Mod | Mod[]

export const genBem = (name: string, mods?: Mods): string => {
  if (!mods) {
    return ''
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`
  }

  if (Array.isArray(mods)) {
    return (mods as Mod[]).reduce<string>((str, mod) => {
      return str + genBem(name, mod)
    }, '')
  }

  // 对象
  return Object.keys(mods).reduce((str, k) => {
    return mods[k] ? str + genBem(name, k) : str
  }, '')

  // return
}

export const createBEM = (name: string) => {
  return (el?: Mods, mods?: Mods): Mods => {
    if (el && typeof el !== 'string') {
      mods = el
      el = ''
    }

    el = el ? `${name}__${el}` : name

    return `${el}${genBem(el, mods)}`
  }
}

export const createNamespace = (name: string) => {
  const prefixedName = `cs-${name}`

  return [
    prefixedName,
    createBEM(prefixedName),
    // createTranslate(prefixedName),
  ] as const
}
