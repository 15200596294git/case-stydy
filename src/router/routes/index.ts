import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/foreword',
    name: 'foreword',
    component: () => import('@/views/Foreword/index.vue'),
  },
  {
    path: '/purest',
    name: 'purest',
    component: () => import('@/views/Purest/index.vue'),
  },

  {
    path: '/suspension-island',
    name: 'suspension-island',
    component: () => import('@/views/SuspensionIsland/index.vue'),
  },
  {
    path: '/dream-city',
    name: 'dream-city',
    component: () => import('@/views/DreamCity/index.vue'),
  },
  {
    path: '/programming-creation',
    name: 'programming-creation',
    component: () => import('@/views/ProgrammingCreation/index.vue'),
  },
]

export default routes
