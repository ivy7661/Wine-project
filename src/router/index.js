import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
        },
        {
          path: 'checkout',
          name: 'CheckoutPage',
          component: () => import('@/views/user/CheckoutView.vue')
        },
        {
          path: 'paymentReceived',
          name: 'PaymentReceived',
          component: () => import('@/views/user/PaymentReceived.vue')
        },
        {
          path: 'shippingInfo',
          name: 'ShippingInfo',
          component: () => import('@/views/user/ShippingInfo.vue')
        },
        {
          path: 'favorite',
          name: 'FavoritePage',
          component: () => import('@/views/user/FavoriteView.vue')
        },
        {
          path: 'userOrders',
          name: 'userOrders',
          component: () => import('@/views/user/UserOrders.vue')
        },
        {
          path: 'privacyPolicy',
          name: 'privacyPolicy',
          component: () => import('@/views/user/PrivacyPolicy.vue')
        },
        {
          path: 'Knowledge',
          name: 'Knowledge',
          component: () => import('@/views/user/KnowledgeView.vue')
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
          path: 'accounts',
          name: 'AdminAccounts',
          component: () => import('@/views/admin/AccountsView.vue')
        },
        {
          path: 'products',
          name: 'AdminProducts',
          component: () => import('@/views/admin/ProductsView.vue')
        },
        {
          path: 'orders',
          name: 'AdminOrders',
          component: () => import('@/views/admin/OrdersView.vue')
        },
        {
          path: 'comments',
          name: 'AdminComments',
          component: () => import('@/views/admin/CommentsView.vue')
        },
        {
          path: 'sales',
          name: 'AdminSalesVolume',
          component: () => import('@/views/admin/SalesVolume.vue')
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
