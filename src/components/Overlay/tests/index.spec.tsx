import { test, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'

import Overlay from '../Overlay'

test('传入z-index属性，组件的z-index应该和传入的z-index属性相等', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      zIndex: 99,
    },
  })

  const overlay = wrapper.find('.cs-overlay')

  expect((overlay.element as HTMLElement).style.zIndex).toBe('99')
})

test('可以传入class-name prop，来自定义class', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      className: 'foo',
    },
  })

  const overlay = wrapper.find('.cs-overlay')
  expect(overlay.classes()).toContain('foo')
})

test('可以传入custom-style prop，来自定义style', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      customStyle: {
        backgroundColor: 'red',
      },
    },
  })

  const overlay = wrapper.find('.cs-overlay')
  expect((overlay.element as HTMLElement).style.backgroundColor).toEqual('red')
})

test('传入duration prop，来改变默认的动画duration', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      duration: 1,
    },
  })

  const overlay = wrapper.find('.cs-overlay')
  expect((overlay.element as HTMLElement).style.animationDuration).toEqual('1s')
})

test('应该正确的渲染传入的插槽', () => {
  const wrapper = mount(Overlay, {
    slots: {
      default: () => 'Custom Default',
    },
  })

  // 第一次运行会生成一个快照
  // 第二次运行时会和已经生成的快照对比，如果不匹配测试就不会通过
  // 否则测试通过
  expect(wrapper.html()).toMatchSnapshot()
})

test('传入的lock-scroll prop为false时，应该能触发touchMove事件', () => {
  const onTouchMove = vi.fn()
  const wrapper = mount({
    render() {
      return (
        <div onTouchmove={onTouchMove}>
          <Overlay show lockScroll={false}/>
        </div>
      )
    },
  })

  const overlay = wrapper.find('.cs-overlay')
  overlay.trigger('touchmove')
  expect(onTouchMove).toHaveBeenCalledTimes(1)
})

// test('传入的lock-scroll prop为true时，应该不能触发touchMove事件', () => {
//   const onTouchMove = vi.fn()
//   const wrapper = mount({
//     render() {
//       return (
//         <div onTouchmove={onTouchMove}>
//           <Overlay show lockScroll />
//         </div>
//       )
//     },
//   })

//   const overlay = wrapper.find('.cs-overlay')
//   overlay.trigger('touchmove')
//   expect(onTouchMove).toHaveBeenCalledTimes(0)
// })

test('lazyRender为false时，禁用懒加载', () => {
  const wrapper = mount({
    render() {
      return <Overlay lazyRender={false} />
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
