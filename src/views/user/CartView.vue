<template>
  <div>
    <div class="bg-cart pb-4">
      <h2 class="pb-5 text-white container">購物車資訊</h2>
    </div>
    <div class="container">
      <img src="/images/footerContainer.png" class="w-100 mb-5" />
      <div class="row gy-4 flex-column-reverse flex-md-row">
        <div class="col-12 col-md-8">
          <!-- 購物車清單外框 -->
          <div class="cartList d-flex flex-column border border-primary rounded">
            <div class="bg-primary fs-5 text-white mb-3 p-3 ps-4">訂購清單</div>
            <div class="p-3">
              <div
                class="card shadow d-flex flex-row justify-content-between mb-3 fs-4 pe-3"
                v-for="(product, key) in cart"
                :key="key"
              >
                <a href="#" @click="toggleFavorite(product)">
                  <i
                    class="bi heart position-absolute top-5 start-5"
                    :class="{
                      'bi-heart': !product.isFavorite,
                      'bi-heart-fill': product.isFavorite
                    }"
                  ></i>
                </a>
                <a href="#" @click="seeProduct(product.product_id)" class="wine_image_block">
                  <div
                    class="wine_image"
                    :style="{
                      'background-image': 'url(/images/wine_images/' + product.image + '.jpg)'
                    }"
                  ></div>
                </a>
                <div class="card-body d-flex flex-column justify-content-around">
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
                  <a href="#" @click="seeProduct(product.id)">
                    <h5 class="card-title text-black fs-4">{{ product.chineseName }}</h5>
                  </a>
                  <p>750 ml</p>
                  <div class="input-group mb-3">
                    <span class="input-group-text">數量</span>
                    <input
                      type="number"
                      min="0"
                      class="form-control text-end"
                      v-model.number="product.qty"
                      @click="updateCartQty(product)"
                    />
                  </div>
                  <div class="d-flex">
                    <p class="text-danger">$ {{ product.price }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-5">
              <div class="bg-black text-center line" style="height: 1px"></div>
            </div>
            <div class="d-flex flex-column align-items-end pe-3">
              <p class="text-primary fs-5" v-if="coupon">太棒了！訂單滿3000元，獲得免運！</p>
              <p class="text-primary fs-5" v-if="!coupon">
                再 {{ 3000 - calculateSubtotal }} 元即可獲得免運唷！
              </p>
              <div>
                <p class="text-end mb-1">(共 {{ cart.length }}件商品)</p>
                <p class="fs-4">小計: NT$ {{ calculateSubtotal }} 元</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="totalPrice">
            <div class="card fs-5">
              <div class="card-header bg-primary fs-5 p-3 ps-4 text-white">購物車</div>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="card-text">商品小計</p>
                  <p class="card-text">NT$ {{ calculateSubtotal }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="card-text">運費價格</p>
                  <p class="card-text">NT$ {{ processedShipping }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="card-text">優惠卷</p>
                  <p v-if="coupon" class="card-text text-danger">- NT$ {{ coupon.discount }}</p>
                  <p v-else class="card-text">沒有可用的優惠卷</p>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="bg-black text-center line" style="height: 1px"></div>
              </div>
              <div class="card-body d-flex justify-content-between fw-bold">
                <p class="card-text">總計</p>
                <p class="card-text text-danger fs-4">NT$ {{ calculateTotalPrice }} 元</p>
              </div>
              <a
                href="#"
                class="btn bg-primary-low text-white fs-5 py-3"
                @click.prevent="toCheckoutPage"
                >前往結帳頁面</a
              >
            </div>
          </div>
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
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'CartView',
  data() {
    return {
      title: '購物車',
      cartAll: [],
      cart: [],
      favoriteList: [],
      allFavoriteList: [],
      coupon: null,
      shipping: 300,
      newQty: 1,
      userId: ''
    };
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'cleanUser', 'getUserCookie']),
    getCartList() {
      const url = `${VITE_API_URL}/carts`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res.data);
          this.cartAll = res.data;
          this.cart = res.data.filter((item) => item.userId === this.userId);
          console.log(this.cart);
        })
        .catch(() => {});
    },
    updateCartQty(product) {
      const url = `${VITE_API_URL}/carts`;
      const newData = {
        qty: product.qty
      };
      if (product.qty === 0) {
        this.deleteCartItem(product);
      } else {
        axios
          .patch(`${url}/${product.id}`, newData)
          .then((res) => {
            // console.log(res.data);
          })
          .catch(() => {
          });
      }
    },
    deleteCartItem(product) {
      Swal.fire({
        title: '確認刪除？',
        text: '刪除後將無法恢復！',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: '確定刪除',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_API_URL}/carts`;
          axios
            .delete(`${url}/${product.id}`, {
              userId: this.userId,
              id: product.id
            })
            .then((res) => {
              // console.log(res.data);
              this.getCartList();
              Swal.fire({
                title: '移出購物車',
                text: '商品已經成功移出購物車',
                icon: 'success'
              });
            })
            .catch(() => {
              // console.log(err);
            });
        } else {
          product.qty = 1;
        }
      });
    },
    seeProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
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
        .catch(() => {
          // console.log(err);
        });
    },
    checkFavoriteStatus() {
      // 遍歷所有產品，檢查它們是否在願望清單中
      this.cart.forEach((product) => {
        product.isFavorite = this.isProductInFavorite(product.id);
      });
    },
    isProductInFavorite(productId) {
      // 根據產品ID檢查產品是否在最愛清單中
      return this.favoriteList.some((favorite) => favorite.productId === productId);
    },
    addToFavorite(id) {
      if (!this.userId) {
        alert('請先登入');
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
          // console.log(res.data);
          this.getFavoriteList();
          Swal.fire({
            title: '加入最愛',
            text: '商品已經成功加入最愛清單。',
            icon: 'success'
          });
        })
        .catch(() => {
          // alert('未正確取得，請稍後再試～');
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
        alert('請先登入');
        return;
      }
      const url = `${VITE_API_URL}/favorite`;
      const existingProductIndex = this.allFavoriteList.findIndex(
        (item) => item.productId === id && item.userId === this.userId
      );
      // console.log(this.allFavoriteList[existingProductIndex].id);
      const deleteItem = this.allFavoriteList[existingProductIndex].id;
      axios
        .delete(`${url}/${deleteItem}`, {
          userId: this.userId,
          id: existingProductIndex
        })
        .then((res) => {
          // console.log(res);
          this.getFavoriteList();
          Swal.fire({
            title: '移出最愛',
            text: '商品已經成功移出最愛清單',
            icon: 'success'
          });
        })
        .catch(() => {
          // console.log(err);
        });
    },
    applyFreeShippingCoupon() {
      const url = `${VITE_API_URL}/coupons`;
      axios
        .get(url)
        .then((res) => {
          this.coupon = res.data[0];
          console.log(this.coupon);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toCheckoutPage() {
      this.$router.push({ name: 'CheckoutPage' });
    }
  },
  watch: {
    calculateSubtotal(newTotal) {
      if (newTotal >= 3000) {
        // 購物車總金額超過 3000，發送折抵運費的優惠券
        this.applyFreeShippingCoupon();
      } else if (newTotal < 3000) {
        this.coupon = null;
      }
    }
  },
  computed: {
    ...mapState(userStore, ['getUser']),
    calculateSubtotal() {
      return this.cart.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.qty;
      }, 0);
    },
    processedShipping() {
      // 如果 cart 為 null，將 shipping 設為 0
      return this.cart.length > 0 ? this.shipping : 0;
    },
    calculateTotalPrice() {
      const subtotal = this.calculateSubtotal;
      const discount = this.coupon ? this.coupon.discount : 0;
      return subtotal + this.processedShipping - discount;
    }
  },
  mounted() {
    const { userId } = this.getUserCookie();
    this.userId = userId;
    this.getCartList();
    this.getFavoriteList();
  }
};
</script>

<style lang="scss" scoped>
a:hover {
  cursor: pointer;
}
.heart:hover {
  color: red;
  transform: scale(1.5);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.bg-primary-low {
  background-color: lighten(#752525, 10%);
  &:hover {
    background-color: #d9381e;
  }
}
.bg-cart {
  padding-top: 90px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('./images/bg wine shelf.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.cartList .card {
  height: 300px;
  .wine_image_block {
    width: 33%;
    height: 100%;
  }
  .wine_image {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .card-body {
    width: 60%;
  }
}
.line {
  width: 95%;
}
</style>
