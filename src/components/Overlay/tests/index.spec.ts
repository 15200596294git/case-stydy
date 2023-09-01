import { test , expect} from 'vitest'

import { mount } from '@vue/test-utils'

import Overlay from '../Overlay'

test('传入z-index属性，组件的z-index应该和传入的z-index属性相等', ()=> {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      zIndex: 99,
    }
  })

  const overlay = wrapper.find('.cs-overlay')

  expect((overlay.element as HTMLElement).style.zIndex).toBe('99')

})

test('可以传入class-name prop，来自定义class',()=> {})

test('可以传入custom-style prop，来自定义style', ()=> {})

test('传入duration prop，来改变默认的动画duration', ()=> {})

test('应该正确的渲染传入的插槽', ()=> {})

test('传入的lock-scroll prop为false时，应该能触发touchMove事件', ()=> {})

test('传入的lock-scroll prop为true时，应该不能触发touchMove事件', ()=> {})

test('lazyRender为false时，禁用懒加载', ()=> {})
