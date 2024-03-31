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

        <select class="filter-sort" v-model="sortFilter">
          <option value="1">依價格排序 ⬆</option>
          <option value="2">依價格排序 ⬇</option>
        </select>
      </div>
      <img src="/images/footerContainer.png" class="w-100 my-5" alt="line" />

      <div class="col-md-3 mt-3" v-for="item in getSortList" :key="item.id">
        <div class="card">
          <div @click="goToProductDetail(item.product.id)">
            <img class=" card-img-top" :src="$filters.imgPath(`/images/wine_images/${item.product.image}.jpg`)"
              alt="Card image cap">
          </div>
          <div class="card-body">
            <div @click="goToProductDetail(item.product.id)">
              <h5 class="card-title text-wrap">{{ item.product.chineseName }}</h5>
              <p class="card-text">{{ item.product.wineStyle }}</p>
            </div>

            <div class="d-flex justify-content-between align-items-end">
              <p class="card-text m-0">NT$ {{ item.product.price }}</p>

              <div>
                <a href="#" class="btn btn-danger mx-3" @click.prevent="removeFavorite(item)">
                  <i class="bi bi-trash"></i>
                </a>
                <a href="#" class="btn btn-warning" @click.prevent="addToUserCart(item.product)">
                  <i class="bi bi-cart3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dvi v-if="!getSortList.length">
        <div class="card" @click="goToProducts">
          <div class="card-body">
            <div class="text-center">
              <h3 class="card-title text-wrap mt-5 text-primary">您尚未收藏任何商品，請至商品頁面收藏</h3>
            </div>
          </div>
        </div>
      </dvi>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import WineGlassLoader from './WineGlassLoader.vue';

import { mapActions } from 'pinia';
import userStore from '@/stores/user';

export default {
  name: 'FavoriteView',
  components: { WineGlassLoader },
  data() {
    return {
      title: '慾望酒單',
      isLoading: true,
      userId: 0,
      sortFilter: '1',
      list: []
    };
  },
  mounted() {
    const { userToken, userId } = this.getUserCookie();
    if (userToken && userId) {
      this.userId = userId;
      this.getFavoriteList();
    } else {
      this.$router.push('/login');
    }
  },
  computed: {
    getSortList() {
      const copyData = JSON.parse(JSON.stringify(this.list));
      if (this.sortFilter === '1') {
        return copyData.sort((a, b) => a.product.price - b.product.price);
      } else {
        return copyData.sort((a, b) => b.product.price - a.product.price);
      }
    }
  },
  methods: {
    ...mapActions(userStore, ['getUserCookie', 'addToCart', 'resetUserFavorites']),
    getFavoriteList() {
      if (!this.userId) return;

      const api = `${import.meta.env.VITE_API_URL}/favorite?userId=${this.userId}&_expand=product`;

      this.$http.get(api)
        .then((res) => {
          this.list = res.data;
        })
        .catch((err) => {
          console.error(err.response);
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
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
              this.getFavoriteList();
              this.resetUserFavorites();
              Swal.fire({
                title: '刪除成功',
                text: '',
                icon: 'success'
              });
            })
            .catch(() => {
              Swal.fire({
                title: '收藏失敗',
                text: '',
                icon: 'error'
              });
            });
        }
      });
    },
    addToUserCart(product) {
      this.addToCart(product);
      // post http://localhost:3001/favorite
      // {
      //   "userId": 1,
      //   "productId": "5",
      //   "created_at": "2024/02/21";
      // }
      // get http://localhost:3001/favorite?userId=1
      // get http://localhost:3001/favorite?userId=1&_expand=product
    },
    goToProductDetail(id) {
      this.$router.push(`/productDetail/${id}`);
    },
    goToProducts() {
      this.$router.push('/products');
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-sort {
  height: 40px;
  margin-bottom: 3px;
}

.card {
  cursor: pointer;

  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  img {
    height: 470px;
    object-fit: contain;
  }
}

.card-body {
  height: 175px;
  display: flex;
  flex-wrap: wrap;

  &>div {
    width: 100%;
  }
}
</style>
