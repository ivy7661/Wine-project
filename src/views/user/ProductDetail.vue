<template>
  <div>
    <div class="container">
      <loading v-model:active="isLoading" :is-full-page="fullPage">
        <template #default>
          <WineGlassLoader />
        </template>
      </loading>
      <div class="productDisplay pt-5 pb-5">
        <div class="row justify-content-between mb-4">
          <div
            class="col-12 col-md-4 product-image-block d-flex flex-column align-items-center justify-content-between"
          >
            <div class="position-relative">
              <img
                :src="$filters.imgPath(`/images/wine_images/${selectedProduct.image}.jpg`)"
                class="product-image"
                :alt="selectedProduct.chineseName"
              />
              <a href="#" @click.prevent="toggleFavorite(selectedProduct)"
                ><i
                  class="bi heart position-absolute top-5 start-10"
                  :class="{
                    'bi-heart': !selectedProduct.isFavorite,
                    'bi-heart-fill': selectedProduct.isFavorite
                  }"
                ></i
              ></a>
            </div>
            <ul class="socialFriends d-flex">
              <li>
                <a href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-line"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <span class="badge bg-danger fs-6" v-if="selectedProduct.is_hot">熱賣推薦</span>
                <div class="text-warning d-flex gap-1 mb-1">
                  <i
                    class="bi bi-star-fill text-warning"
                    v-for="star in selectedProduct.star"
                    :key="star"
                  ></i>
                </div>
              </div>
              <h3 class="card-title mb-2">{{ selectedProduct.chineseName }}</h3>
              <div class="d-flex justify-content-between mb-3">
                <p class="card-text">750ml</p>
                <p class="card-text fs-4 text-primary fw-bold">$ {{ selectedProduct.price }}</p>
              </div>
              <div class="pb-3">
                <h5 class="pb-2">風味分類</h5>
                <div class="row mx-0">
                  <div
                    class="col-3 col-lg-2 d-flex flex-column align-items-center"
                    v-for="(flavor, key) in selectedProduct.flavor"
                    :key="key"
                  >
                    <img
                      :src="$filters.imgPath(`/images/fruit_images/${flavor}.jpg`)"
                      :alt="flavor"
                      class="fruit-image rounded-circle mb-2"
                    />
                    <p>{{ flavor }}</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 class="pb-2">餐酒搭配選擇</h5>
                <div class="row mx-0">
                  <div
                    class="col-3 col-md-2 d-flex flex-column align-items-center"
                    v-for="(food, key) in selectedProduct.food"
                    :key="key"
                  >
                    <img
                      :src="$filters.imgPath(`/images/food_images/${food}.jpg`)"
                      :alt="food"
                      class="food-image rounded-circle mb-2"
                    />
                    <p>{{ food }}</p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                class="btn btn-primary w-100 py-2 mt-3 radius-24"
                @click.prevent="addToCart(selectedProduct)"
                >加入購物車</a
              >
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-4">
          <div class="col-12 col-md-6 mt-4">
            <h4 class="mb-4">葡萄酒品味</h4>
            <p class="mb-1">單寧</p>
            <div
              class="progress bg-white"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.tannin : '0%' }"
              ></div>
            </div>
            <p class="mb-1">酸度</p>
            <div
              class="progress bg-white"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.acidity : '0%' }"
              ></div>
            </div>
            <p class="mb-1">甜度</p>
            <div
              class="progress bg-white"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.sweet : '0%' }"
              ></div>
            </div>
            <p class="mb-1">酒體</p>
            <div
              class="progress bg-white"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.body : '0%' }"
              ></div>
            </div>
          </div>
          <div class="col-12 col-md-5 mt-4">
            <h4 class="mb-4">產品介紹</h4>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <th>酒種</th>
                  <td>{{ selectedProduct.wineStyle }}</td>
                </tr>
                <tr>
                  <th>產地</th>
                  <td>{{ selectedProduct.place }}</td>
                </tr>
                <tr>
                  <th>出產酒莊</th>
                  <td>{{ selectedProduct.village }}</td>
                </tr>
                <tr>
                  <th>葡萄品種</th>
                  <td>
                    <span v-for="(grape, key) in selectedProduct.grape" :key="key">
                      {{ grape }}
                      <span v-if="key < selectedProduct.grape.length - 1">, </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4 class="mb-4">好評推推推</h4>
            <div class="row d-flex align-items-stretch gy-3">
              <div class="col-12 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">
                      卡師伯： 我是第一次在網上購買酒類，配晚餐挺搭，會再購買!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">Steve: 經過醒酒後果香濃郁，比較一下價格實在物超所值！</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">小明： 普普通通，不推薦.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">
                      Lukka: 性價比不錯，但偏酸，不是很愛．
                      之前在這網站有買過其他推薦的紅酒都很不錯．
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="moreProduct py-5">
      <div class="container">
        <h3 class="text-white pb-5">您可能會喜歡的商品</h3>
        <div class="row gy-3">
          <div class="col-12 col-sm-6 col-md-3" v-for="(wine, key) in similarWines" :key="key">
            <div class="card d-flex flex-column h-100 product_card radius-24">
              <a href="#" @click.prevent="seeProduct(wine.id)">
                <img
                  :src="$filters.imgPath(`/images/wine_images/${wine.image}.jpg`)"
                  class="card-img-top"
                  :alt="wine.chineseName"
                />
              </a>
              <div class="card-body h-100 d-flex flex-column justify-content-between">
                <div class="d-flex flex-column mb-3">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="badge bg-danger" v-if="wine.is_hot">熱賣推薦</span>
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i
                        class="bi bi-star-fill text-warning"
                        v-for="star in wine.star"
                        :key="star"
                      ></i>
                    </div>
                  </div>
                  <a href="#" @click.prevent="seeProduct(wine.id)">
                    <h5 class="card-title text-black">{{ wine.chineseName }}</h5>
                  </a>
                  <p class="card-text text-primary fw-bold">$ {{ wine.price }}</p>
                </div>
                <a href="#" class="btn btn-primary w-100 radius-24" @click.prevent="addToCart(wine)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { slice } from 'lodash';
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
  name: 'ProductDetail',
  components: {
    Loading,
    WineGlassLoader
  },
  data() {
    return {
      title: '產品詳情',
      products: [],
      selectedProduct: {
        flavor: [],
        food: []
      },
      similarWines: [],
      cart: [],
      favoriteList: [],
      allFavoriteList: [],
      userId: '',
      isLoading: false,
      fullPage: true
    };
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'cleanUser', 'getUserCookie', 'resetUserCarts']),
    doLoading() {
      const loader = this.$loading.show({
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
      }, {
        // Pass slots by their names
        default: h('WineGlassLoader')
      });
      loader.hide();
    },
    setLoadingTime() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 800);
    },
    getProduct() {
      const url = `${VITE_API_URL}/products`;
      axios
        .get(url)
        .then((res) => {
          this.setLoadingTime();
          this.products = res.data;
          this.selectedProduct = this.products.find((item) => item.id === this.$route.params.id);
          this.findSimilarWinesByGrape(this.selectedProduct, this.products);
        })
        .catch(() => {});
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
          qty: 1,
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
        this.cart[existingProductIndex].qty += 1;
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
      this.selectedProduct.isFavorite = this.favoriteList.some(
        (favorite) => favorite.productId === this.selectedProduct.id
      );
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
        productId: this.selectedProduct.id,
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
        .catch(() => {});
    },
    toggleFavorite(product) {
      // 檢查產品是否在最愛清單中
      const isFavorite = this.selectedProduct.isFavorite;

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
          Swal.fire({
            title: '移出最愛',
            text: '商品已經成功移出最愛清單',
            icon: 'success'
          });
        })
        .catch(() => {});
    },
    findSimilarWinesByGrape(selectedProduct, products, numberOfSimilarWines = 4) {
      // 提取目標酒的葡萄品種
      const targetGrapes = selectedProduct.grape;

      // 遍歷所有酒，找出具有相同或相似葡萄品種的其他酒
      const similarWines = products.filter((wine) => {
        // 比較葡萄品種，可以自行定義相似度標準
        return wine.grape.some((grape) => targetGrapes.includes(grape));
      });

      // 排除目標酒自身
      const filteredSimilarWines = similarWines.filter((wine) => wine.id !== selectedProduct.id);

      // 根據某種標準排序，這裡使用簡單的排序
      filteredSimilarWines.sort((a, b) => {
        // 可以根據需要調整排序標準
        return b.star - a.star;
      });
      // 選擇前幾名的酒
      const selectedWines = filteredSimilarWines.slice(0, numberOfSimilarWines);
      this.similarWines = selectedWines;
    },
    seeProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
      this.getProduct();
    }
  },
  computed: {
    ...mapState(userStore, ['getUser'])
  },
  mounted() {
    // this.title = '產品詳情 - ' + this.$route.params.id;
    const { userId } = this.getUserCookie();
    this.userId = userId;
    this.getProduct();
    this.getCartList();
    this.getFavoriteList();
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
.radius-24{
  border-radius: 24px;
}
.heart {
  font-size: 20px;
}
.heart:hover {
  color: red;
  transform: scale(1.5);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.bi-heart:hover {
  color: red;
  transform: scale(1.5);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
  transition: transform 0.3s ease-in-out;
}
.product-image:hover {
  transform: rotate(2deg);
}
.socialFriends {
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 20px;
  li {
    padding: 10px;
    background-color: #fffbf5;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #e0e0e0;
    }
    i {
      font-size: 32px;
    }
  }
}
.fruit-image {
  max-width: 100px;
  border: 2px solid #691a06;
}
.food-image {
  max-width: 100px;
  border: 2px solid #691a06;
}
.btn-primary:hover {
  background-color: #d9381e;
}
.progress-container {
  background-color: white;
  border-radius: 5px; /* 可視情況調整邊框半徑 */
  overflow: hidden;
  margin-bottom: 15px; /* 可視情況調整底邊距 */
}

.progress-bar {
  border-radius: 5px; /* 可視情況調整邊框半徑，需與 .progress-container 一致 */
}
.moreProduct {
  background: linear-gradient(to left top, #f5ebd8, #ead8ab, #d4b685);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
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
