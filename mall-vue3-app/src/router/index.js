import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/Login.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/view/User.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: () => import('@/view/ProductList.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/view/Category.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/view/ProductDetail.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/view/Cart.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/create-order',
      name: 'create-order',
      component: () => import('@/view/CreateOrder.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/view/Address.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/address-edit',
      name: 'address-edit',
      component: () => import('@/view/AddressEdit.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/view/Order.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      component: () => import('@/view/OrderDetail.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/view/Setting.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/view/About.vue'),
      meta: {
        index: 2
      }
    },
  ]
})

export default router
