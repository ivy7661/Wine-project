<template>
  <VueLoading :active="isLoading">
    <template #default>
      <WineGlassLoader />
    </template>
  </VueLoading>

  <div class="container mb-5">
    <div class="row">
      <div class="d-flex justify-content-between align-items-end mt-3">
        <h2 class="mt-5 mb-1 fs-3 font-weight-normal fw-bold">會員 / {{ title }}</h2>

      </div>
      <img src="/images/footerContainer.png" class="w-100 mt-5 mb-3" />

      <div class="col-12">
        <table class="table order-table mt-4 mx-2">
          <thead class="table-light">
            <tr>
              <th width="120">訂單日期</th>
              <th width="120">訂單編號</th>
              <th width="120">付款狀態</th>
              <th width="150">訂單狀態</th>
              <th width="120">訂單金額</th>
              <th width="120" class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.create_at }}</td>
              <td>{{ order.id }}</td>
              <td>
                <span v-if="order.is_paid" class="text-success">已付款</span>
                <span v-else>未付款</span>
              </td>
              <td>
                <span v-if="order.orderStatus === '訂單已完成'" class="text-success">訂單已完成</span>
                <span v-else-if="order.orderStatus === '訂單已成立'">訂單已成立</span>
                <span v-else>配送中</span>
              </td>
              <td class="text-right">
                NT ${{ $filters.currency(catTotalPrice(order.cart)) }}
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-outline-primary" @click="openModal(order)">
                  查看/評論
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <OrderProductModal ref="orderProductModal" :cartProduct="cartProduct" :userData="userData" :orderId="tmpOrderId" />
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import WineGlassLoader from './WineGlassLoader.vue';

import { mapActions } from 'pinia';
import userStore from '@/stores/user';

import OrderProductModal from '@/components/OrderProductModal.vue';

export default {
  name: 'UserOrders',
  components: { OrderProductModal, WineGlassLoader },
  data() {
    return {
      title: '會員訂單',
      isLoading: true,
      orders: [],
      cartProduct: [],
      userData: {},
      tmpOrderId: 0,
      userId: 0
    };
  },
  mounted() {
    const { userToken, userId } = this.getUserCookie();
    if (userToken && userId) {
      this.userId = userId;
      this.getOrders();
    } else {
      this.$router.push('/login');
    }
  },
  methods: {
    ...mapActions(userStore, ['getUserCookie']),
    getOrders() {
      if (!this.userId) return;

      const api = `${import.meta.env.VITE_API_URL}/orders?userId=${this.userId}`;

      this.$http.get(api)
        .then((res) => {
          // console.log('getOrders', res.data);
          this.orders = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },
    comment(item) {
      if (!this.userId || !item?.id) return;

      Swal.fire({
        title: '確認移除收藏嗎?',
        text: `商品: ${item.product.chineseName}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${import.meta.env.VITE_API_URL}/favorite/${item.id}`)
            .then((res) => {
              // console.log(res.data);
              this.getFavoriteList();
              this.resetUserFavorites();
              Swal.fire({
                title: '刪除成功',
                text: '',
                icon: 'success'
              });
            })
            .catch((error) => {
              console.log(error.response);
              Swal.fire({
                title: '收藏失敗',
                text: '',
                icon: 'error'
              });
            });
        }
      });
    },
    openModal(order) {
      this.cartProduct = order.cart;
      this.tmpOrderId = order.id;
      this.userData = order.user;
      this.$refs.orderProductModal.openModal();
    },
    /**
     * 計算購物車總價
     */
    catTotalPrice(cart) {
      return cart.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.order-table {
  button {
    letter-spacing: 3px;
  }
}
</style>
