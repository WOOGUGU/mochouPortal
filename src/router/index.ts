import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/portal/home/index.vue')
      },
      {
        path: '/artical-list',
        component: () => import('@/views/portal/articalList/index.vue')
      },
      {
        path: '/artical-info',
        component: () => import('@/views/portal/articalInfo/index.vue')
      }
    ]
  }
]

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router
