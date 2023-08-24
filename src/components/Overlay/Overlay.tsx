import {
  defineComponent,
  PropType,
  CSSProperties,
  ExtractPropTypes,
  WatchSource,
  Transition,
} from 'vue'

import { useEventListener } from '@vueuse/core'

import { isDef, extend, preventDefault } from '@/utils'
import { getZIndexStyle } from '@/utils/format'

const numericProp = [Number, String]

const truthProp = {
  type: Boolean,
  // 强制将类型变为不可变类型
  default: true as const,
}

const unknownProp = null as unknown as PropType<unknown>

export const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object as PropType<CSSProperties>,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>

// 传入一个值，该值的类型为watch函数监听的类型
// 返回一个渲染函数
// 如果传入的值为true，立马执行渲染函数
// 否则会监听传入的值，直到该值变为true后，执行渲染函数
const useLazyRender = (show: WatchSource<boolean | undefined>) => {
  const inited = ref(false)

  watch(
    show,
    (value) => {
      if (value) {
        inited.value = true
      }
    },
    { immediate: true },
  )

  return (render: () => JSX.Element) => (inited.value ? render() : null)
}

export default defineComponent({
  name: 'case-overlay',

  props: overlayProps,

  setup(props, { slots }) {
    const root = ref<HTMLElement>()
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender)

    const onTouchMove = (event: TouchEvent) => {
      if (props.lockScroll) {
        preventDefault(event)
      }
    }

    const renderOverlay = lazyRender(() => {
      const style: CSSProperties = extend(
        getZIndexStyle(props.zIndex),
        props.customStyle,
      )
      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`
      }

      return (
        <div
          v-show={props.show}
          ref={root}
          style={style}
          class={[props.className]}
        >
          {slots.default?.()}
        </div>
      )
    })

    useEventListener(root, 'touchmove', onTouchMove)

    return () => (
      <Transition v-slots={{ default: renderOverlay }} appear></Transition>
    )
  },
})
