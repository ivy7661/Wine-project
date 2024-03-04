<template>
  <div class="container mb-5">
    <div class="row">
      <div class="d-flex justify-content-between align-items-end mt-3">
        <h2 class="mt-5 mb-1 fs-3 font-weight-normal fw-bold">會員 / {{ title }}</h2>

        <select class="filter-sort" v-model="sortFilter">
          <option value="1">依價格排序 ⬆</option>
          <option value="2">依價格排序 ⬇</option>
        </select>
      </div>
      <img src="/images/footerContainer.png" class="w-100 my-5" />

      <div class="col-md-3 mt-3" v-for="item in getSortList" :key="item.id">
        Table
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

import { mapActions } from 'pinia';
import userStore from '@/stores/user';

export default {
  name: 'UserOrders',
  components: {},
  data() {
    return {
      title: '會員訂單',
      orderList: [],
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

      const api = `${import.meta.env.VITE_API_URL}/orders?userId=${this.userId}&_expand=user`;

      this.$http.get(api)
        .then((res) => {
          console.log('getOrders', res.data);
          this.orderList = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    removeFavorite(item) {
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
