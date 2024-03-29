<template>
  <div>
    <div class="bg-products pb-4">
      <loading v-model:active="isLoading" :is-full-page="fullPage">
        <template #default>
          <WineGlassLoader />
        </template>
      </loading>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <div class="px-3" v-for="productTitle in productsContent" :key="productTitle.title">
              <div v-if="selectedRegion === productTitle.title">
                <h2 class="pb-5 text-white">法國五大產區 - {{ productTitle.title }}</h2>
                <p class="text-white lh-large fs-5 font-monospace">{{ productTitle.content }}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5 d-flex flex-column justify-content-end">
            <div class="searchArea  mx-3">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="請輸入關鍵字" class="w-100 fs-5" v-model="searchKeyword" />
            </div>
            <div class="filterBox mx-3">
              <label for="wineRegion" class="text-white fs-5 pb-1">請選擇產區:</label>
              <select
                id="wineRegion"
                name="wineRegion"
                class="mb-3 fs-5"
                v-model="selectedRegion"
                @change="updateContent(selectedRegion)"
              >
                <option value="" disabled selected hidden>產區: 請選擇產區</option>
                <option value="波爾多">波爾多</option>
                <option value="布根地">布根地</option>
                <option value="香檳">香檳</option>
                <option value="羅亞爾河谷">羅亞爾河谷</option>
                <option value="薄酒萊">薄酒萊</option>
                <option value="熱賣酒品">熱賣酒品</option>
              </select>
              <div class="filterBtn d-flex justify-content-between gap-3">
                <a
                  type="button"
                  class="btn btn-primary btn-lg px-4 py-2"
                  @click.prevent="sortBy('price')"
                >
                  價格 <i :class="ascendingOrderPrice ? 'bi bi-arrow-down' : 'bi bi-arrow-up'"></i>
                </a>
                <a
                  type="button"
                  class="btn btn-primary btn-lg px-4 py-2 me-0"
                  @click.prevent="sortBy('star')"
                >
                  評價 <i :class="ascendingOrderStar ? 'bi bi-arrow-down' : 'bi bi-arrow-up'"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <img src="/images/footerContainer.png" class="w-100 mb-5" />
      <div class="productList pb-5 align-items-stretch">
        <div class="row mb-3 gy-3">
          <a class="col-12 col-md-6 col-lg-4" v-for="(product, key) in sortedProducts" :key="key"  @click.prevent="seeProduct(product.id)">
            <a href="#" class="card h-100 py-2 product_card radius-24">
              <div class="row h-100">
                <div class="col-4">
                  <a href="#" @click.prevent.stop="toggleFavorite(product)">
                    <i
                      class="bi heart position-absolute top-5 start-5"
                      :class="{
                        'bi-heart': !product.isFavorite,
                        'bi-heart-fill': product.isFavorite
                      }"
                    ></i>
                  </a>
                  <a href="#">
                    <img
                      :src="$filters.imgPath(`/images/wine_images/${product.image}.jpg`)"
                      class="card-img-top h-100"
                      :alt="product.chineseName"
                    />
                  </a>
                </div>
                <div class="col-8">
                  <div class="card-body d-flex flex-column h-100 justify-content-between">
                    <div class="mb-2">
                      <div class="d-flex mb-1 justify-content-between">
                        <span class="badge bg-danger mb-2" v-if="product.is_hot">熱門推薦</span>
                        <div class="d-flex gap-1">
                          <i
                            class="bi bi-star-fill text-warning"
                            v-for="star in product.star"
                            :key="star"
                          ></i>
                        </div>
                      </div>
                      <div>
                        <a href="#" class="text-black">
                          <h5 class="card-title flex-fill">{{ product.chineseName }}</h5>
                        </a>
                        <p class="card-text text-primary fw-bold">$ {{ product.price }}</p>
                      </div>
                    </div>
                    <div class="input-group mb-3" @click.prevent.stop>
                      <span class="input-group-text">數量</span>
                      <select
                        class="form-select"
                        v-model="product.qty"
                      >
                        <option
                          v-for="quantity in quantityOptions"
                          :key="quantity"
                          :value="quantity"
                        >
                          {{ quantity }}
                        </option>
                      </select>
                    </div>
                    <a href="#" class="btn btn-primary w-100 radius-24" @click.prevent.stop="addToCart(product)"
                      >加入購物車</a
                    >
                  </div>
                </div>
              </div>
            </a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { h } from 'vue';
import WineGlassLoader from './WineGlassLoader.vue';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'UserProductsView',
  data() {
    return {
      products: [],
      selectedRegion: '熱賣酒品',
      productsContent: '',
      currentSort: '',
      selectedRegionProducts: [],
      filteredProducts: [],
      cart: [],
      ascendingOrderPrice: true,
      ascendingOrderStar: true,
      searchKeyword: '',
      favoriteList: [],
      allFavoriteList: [],
      quantityOptions: [1, 2, 3, 4],
      userId: '',
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    Loading,
    WineGlassLoader
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'cleanUser', 'getUserCookie', 'resetUserCarts']),
    doLoading() {
      const loader = this.$loading.show(
        {
          props: { spinner: WineGlassLoader },
          // Pass props by their camelCased names
          container: this.$refs.loadingContainer,
          canCancel: true,
          color: '#000000',
          loader: 'spinner',
          width: 64,
          height: 64,
          backgroundColor: '#ffffff',
          opacity: 0.5,
          zIndex: 999
        },
        {
          // Pass slots by their names
          default: h('WineGlassLoader')
        }
      );
      loader.hide();
    },
    setLoadingTime() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 800);
    },
    getProductList() {
      const url = `${VITE_API_URL}/products`;
      axios
        .get(url)
        .then((res) => {
          this.setLoadingTime();
          this.products = res.data.map(product => ({
            ...product,
            qty: 1
          }));
          this.selectedRegionProducts = this.products.filter((product) => product.is_hot === 1);
        })
        .catch(() => {
        });
    },
    getCartList() {
      const url = `${VITE_API_URL}/carts`;
      axios
        .get(url)
        .then((res) => {
          this.cart = res.data.filter((item) => item.userId === this.userId);
        })
        .catch(() => {});
    },
    updateContent(selectedRegion) {
      const url = `${VITE_API_URL}/productsContent`;
      axios
        .get(url)
        .then((res) => {
          this.productsContent = res.data;
        })
        .catch(() => {});
    },
    sortBy(sortKey) {
      if (sortKey === 'price') {
        this.ascendingOrderPrice = !this.ascendingOrderPrice;
      } else if (sortKey === 'star') {
        this.ascendingOrderStar = !this.ascendingOrderStar;
      }
      this.currentSort = sortKey;
    },
    addToCart(product) {
      if (!this.userId) {
        Swal.fire({
          title: '請先登入',
          html: '前往登入頁面',
          icon: 'question',
          showCancelButton: true,
          cancelButtonText: '取消'
        }).then((result) => {
          if (result.isConfirmed) {
            this.goLogin();
          }
        });
        return;
      }
      const url = `${VITE_API_URL}/carts`;

      // 找出這位會員的購物車內是否已經有這個商品
      const existingProductIndex = this.cart.findIndex(
        (item) => item.product_id === product.id && item.userId === this.userId
      );
      if (existingProductIndex === -1) {
        // 如果不存在相同的 product_id及 user id，添加新商品
        const newCartItem = {
          product_id: product.id,
          chineseName: product.chineseName,
          image: product.image,
          price: product.price,
          is_hot: product.is_hot,
          star: product.star,
          qty: product.qty,
          userId: this.userId
        };
        axios
          .post(url, newCartItem)
          .then((res) => {
            this.resetUserCarts();
            Swal.fire({
              title: '成功加入購物車',
              text: '商品已經成功加入購物車',
              icon: 'success'
            });
          })
          .catch(() => {
            Swal.fire({
              title: '加入購物車失敗',
              text: '請稍後再試',
              icon: 'error'
            });
          });
      } else {
        // 如果存在相同的 product_id，更新數量
        // 購物車的 id
        const cartId = this.cart[existingProductIndex].id;
        // 更新數量
        this.cart[existingProductIndex].qty += product.qty;
        const updateQty = {
          qty: this.cart[existingProductIndex].qty
        };
        axios
          .patch(`${url}/${cartId}`, updateQty)
          .then((res) => {
            this.resetUserCarts();
            Swal.fire({
              title: '成功加入購物車',
              text: '商品已經成功加入購物車',
              icon: 'success'
            });
          })
          .catch(() => {
            Swal.fire({
              title: '加入購物車失敗',
              text: '請稍後再試',
              icon: 'error'
            });
          });
      }
      this.getCartList();
    },
    seeProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    goLogin() {
      this.$router.push({ name: 'UserLogin' });
    },
    getFavoriteList() {
      const url = `${VITE_API_URL}/favorite`;
      axios
        .get(url)
        .then((res) => {
          this.allFavoriteList = res.data;
          this.favoriteList = res.data.filter((item) => item.userId === this.userId);
          this.checkFavoriteStatus();
        })
        .catch(() => {});
    },
    checkFavoriteStatus() {
      // 遍歷所有產品，檢查它們是否在願望清單中
      this.sortedProducts.forEach((product) => {
        product.isFavorite = this.isProductInFavorite(product.id);
      });
    },
    isProductInFavorite(productId) {
      // 根據產品ID檢查產品是否在最愛清單中
      return this.favoriteList.some((favorite) => favorite.productId === productId);
    },
    addToFavorite(id) {
      if (!this.userId) {
        Swal.fire({
          title: '請先登入',
          html: '前往登入頁面',
          icon: 'question',
          showCancelButton: true,
          cancelButtonText: '取消'
        }).then((result) => {
          if (result.isConfirmed) {
            this.goLogin();
          }
        });
        return;
      }
      const url = `${VITE_API_URL}/favorite`;

      const currentDate = new Date();
      // 將日期轉化格式 'YYYY/MM/DD'
      const formattedDate = `${currentDate.getFullYear()}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}`;
      const favoriteData = {
        userId: this.userId,
        productId: id,
        created_at: formattedDate
      };
      axios
        .post(url, favoriteData)
        .then((res) => {
          this.getFavoriteList();
          Swal.fire({
            title: '加入最愛',
            text: '商品已經成功加入最愛清單。',
            icon: 'success'
          });
        })
        .catch(() => {
        });
    },
    toggleFavorite(product) {
      // 檢查產品是否在最愛清單中
      const isFavorite = this.isProductInFavorite(product.id);

      // 如果產品已經在最愛清單中，從最愛清單中移除，否則加入到最愛清單
      if (isFavorite) {
        this.removeFromFavorite(product.id);
      } else {
        this.addToFavorite(product.id);
      }
    },
    removeFromFavorite(id) {
      if (!this.userId) {
        Swal.fire({
          title: '請先登入',
          html: '前往登入頁面',
          icon: 'question',
          showCancelButton: true,
          cancelButtonText: '取消'
        }).then((result) => {
          if (result.isConfirmed) {
            this.goLogin();
          }
        });
        return;
      }
      const url = `${VITE_API_URL}/favorite`;
      const existingProductIndex = this.allFavoriteList.findIndex(
        (item) => item.productId === id && item.userId === this.userId
      );
      const deleteItem = this.allFavoriteList[existingProductIndex].id;
      axios
        .delete(`${url}/${deleteItem}`, {
          userId: this.userId,
          id: existingProductIndex
        })
        .then((res) => {
          this.getFavoriteList();
        })
        .catch(() => {
        });
    }
  },
  computed: {
    ...mapState(userStore, ['getUser']),
    sortedProducts() {
      let productsToSort = [];

      if (this.selectedRegion === '熱賣酒品') {
        productsToSort = this.products.filter((product) => product.is_hot === 1);
      } else {
        productsToSort = this.products.filter((product) => {
          return product.place === this.selectedRegion;
        });
      }

      const getKeyword = this.searchKeyword.trim();
      if (getKeyword) {
        // 使用 searchKeyword 篩選所有產品
        productsToSort = productsToSort.filter(product => product.chineseName.includes(getKeyword));
      }

      // 排序
      const sortedProducts = productsToSort.sort((a, b) => {
        if (this.currentSort === 'price') {
          return this.ascendingOrderPrice ? a.price - b.price : b.price - a.price;
        } else if (this.currentSort === 'star') {
          return this.ascendingOrderStar ? a.star - b.star : b.star - a.star;
        }
        return 0;
      });

      return sortedProducts;
    }
  },
  mounted() {
    const { userId } = this.getUserCookie();
    this.userId = userId;
    this.getProductList();
    this.getCartList();
    this.updateContent();
    this.getFavoriteList();
  }
};
</script>

<style lang="scss" scoped>
.radius-24{
  border-radius: 24px;
}
.bg-products {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/bg_wine_shelf.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 90px;
}
.btn-primary:hover {
  background-color: #d9381e;
}
.heart:hover {
  color: red;
  transform: scale(1.5);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.searchArea {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  i {
    margin-right: 5px;
  }
  input {
    border: none;
    outline: none;
    flex: 1;
  }
}
.filterBox {
  margin-top: 10px;
}

.filterBox select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.filterBtn button {
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.filterBtn button:hover {
  background-color: #f0f0f0;
}
.product_card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
