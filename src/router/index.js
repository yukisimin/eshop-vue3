import { createRouter, createWebHashHistory } from 'vue-router'
// import LayoutItem from '@/views/LayoutItem'
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: () => import('@/views/LayoutItem'),
    children: [{
      path: '/', component: () => import('@/views/home')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
