import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/UserLayout.vue'),
      children: [
        {
          path: '',
          name: 'HomePage',
          component: () => import('@/views/user/HomeView.vue')
        },
        {
          path: 'login',
          name: 'UserLogin',
          component: () => import('@/views/user/LoginView.vue')
        },
        {
          path: 'register',
          name: 'UserRegister',
          component: () => import('@/views/user/RegisterView.vue')
        },
        {
          path: 'forgot',
          name: 'UserForgot',
          component: () => import('@/views/user/ForgotView.vue')
        },
        {
          path: 'products',
          name: 'ProductsPage',
          component: () => import('@/views/user/ProductsView.vue')
        },
        {
          path: 'productDetail/:id',
          name: 'ProductDetail',
          component: () => import('@/views/user/ProductDetail.vue')
        },
        {
          path: 'cart',
          name: 'CartPage',
          component: () => import('@/views/user/CartView.vue')
        }
      ]
    },
    {
      path: '/adminLogin',
      name: 'AdminLogin',
      component: () => import('@/views/admin/AdminLogin.vue')
    },
    {
      path: '/admin',
      component: () => import('@/views/layout/AdminLayout.vue'),
      children: [
        {
          path: 'products',
          name: 'AdminProducts',
          component: () => import('@/views/admin/ProductsView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ],
  linkActiveClass: 'active'
});

export default router;
