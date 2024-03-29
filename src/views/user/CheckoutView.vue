<template>
  <div>
    <loading v-model:active="isLoading" :is-full-page="fullPage">
      <template #default>
        <WineGlassLoader />
      </template>
    </loading>
    <div class="bg-checkout pb-4">
      <h2 class="pb-5 text-white container">填寫訂單資訊</h2>
    </div>
    <div class="container pb-5">
      <img src="/images/footerContainer.png" class="w-100 mb-5" />
      <div class="progress mb-5 fs-5" role="progressbar" aria-label="Animated striped example">
        <div
          class="progress-bar bg-primary"
          role="progressbar"
          style="width: 33%"
          aria-valuenow="33"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          確認購物車
        </div>
        <div
          class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
          role="progressbar"
          style="width: 33%"
          aria-valuenow="33"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          填寫資料
        </div>
        <div
          class="progress-bar bg-secondary"
          role="progressbar"
          style="width: 34%"
          aria-valuenow="34"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          完成訂單
        </div>
      </div>
      <VeeForm ref="checkout-form" v-slot="{ errors }" @submit="createOrder">
        <div class="row gy-4 flex-column flex-md-row">
          <div class="col-12 col-md-8">
            <h4 class="pb-4">1. 收件者資訊</h4>
            <div class="pb-5">
              <div class="form-floating mb-3">
                <VeeField
                  id="customerName"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入名稱"
                  rules="required|min:2|max:16"
                  v-model="userData.user.customerName"
                />
                <label for="username">姓名</label>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-floating mb-3">
                <VeeField
                  id="customerAddress"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="userData.user.customerAddress"
                ></VeeField>
                <label for="customerAddress">寄送地址</label>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-floating mb-3">
                <VeeField
                  id="customerTel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  :rules="isPhone"
                  v-model="userData.user.customerTel"
                ></VeeField>
                <label for="customerTel">電話</label>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-floating mb-3">
                <VeeField
                  id="customerEmail"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="userData.user.customerEmail"
                ></VeeField>
                <label for="customerEmail">電子郵件</label>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
            <h4 class="pb-4">2. 付款資訊</h4>
            <div class="pb-5">
              <div class="form-floating mb-3">
                <VeeField
                  id="creditCard"
                  name="信用卡號"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['信用卡號'] }"
                  placeholder="請輸入信用卡號"
                  :rules="isCreditCard"
                  v-model="userData.payment.creditCard"
                ></VeeField>
                <label for="creditCard">卡號</label>
                <ErrorMessage name="信用卡號" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-floating mb-3">
                <VeeField
                  id="cardName"
                  name="持卡人姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['持卡人姓名'] }"
                  placeholder="請輸入持卡人姓名"
                  rules="required|min:2|max:16"
                  v-model="userData.payment.cardName"
                ></VeeField>
                <label for="cardName">持卡人姓名</label>
                <ErrorMessage name="持卡人姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-floating mb-3">
                <VeeField
                  id="cardExpiration"
                  name="有效日期"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['有效日期'] }"
                  placeholder="請輸入有效日期 (MM/YY)"
                  :rules="isDateFormat"
                  v-model="userData.payment.cardExpiration"
                ></VeeField>
                <label for="cardExpiration">有效日期 (MMYY)</label>
                <ErrorMessage name="有效日期" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-floating mb-3">
                <VeeField
                  id="secureCode"
                  name="安全碼"
                  type="number"
                  class="form-control"
                  :class="{ 'is-invalid': errors['安全碼'] }"
                  placeholder="請輸入三位數的安全碼"
                  :rules="isSecurityCode"
                  v-model="userData.payment.secureCode"
                ></VeeField>
                <label for="secureCode">安全碼</label>
                <ErrorMessage name="安全碼" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="totalPrice pb-5">
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
                <div class="card-body d-flex flex-column justify-content-between">
                  <div class="d-flex justify-content-between fw-bold">
                    <p class="card-text">總計</p>
                    <p class="card-text text-danger fs-4">NT$ {{ calculateTotalPrice }} 元</p>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="eighteenPlusAgree"
                      id="eighteenPlusAgree"
                    />
                    <label class="form-check-label" for="eighteenPlusAgree"> 我已年滿18歲 </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="privacyAgree"
                      id="privacyAgree"
                    />
                    <label class="form-check-label" for="privacyAgree">
                      我同意服務及隱私權條款
                    </label>
                  </div>
                </div>
                <button
                  href="#"
                  type="submit"
                  class="btn bg-primary-low fs-5 text-white py-3"
                  :class="{'notAllow' : !checkoutAgree}"
                >
                  確認完成並付款
                </button>
              </div>
            </div>
          </div>
        </div>
      </VeeForm>
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
  name: 'CheckoutPage',
  data() {
    return {
      title: '結帳頁面',
      cartAll: [],
      cart: [],
      userData: {
        user: {
          customerEmail: '',
          customerName: '',
          customerTel: '',
          customerAddress: ''
        },
        payment: {
          creditCard: '',
          cardName: '',
          cardExpiration: '',
          secureCode: ''
        }
      },
      quantityOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      coupon: null,
      shipping: 300,
      newQty: 1,
      eighteenPlusAgree: false,
      privacyAgree: false,
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
    getCartList() {
      const url = `${VITE_API_URL}/carts`;
      axios
        .get(url)
        .then((res) => {
          this.setLoadingTime();
          this.cartAll = res.data;
          this.cart = res.data.filter((item) => item.userId === this.userId);
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
            this.resetUserCarts();
          })
          .catch(() => {});
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
              this.resetUserCarts();
              this.getCartList();
              Swal.fire({
                title: '移出購物車',
                text: '商品已經成功移出購物車',
                icon: 'success'
              });
            })
            .catch(() => {
            });
        } else {
          product.qty = 1;
        }
      });
    },
    clearCart() {
      const url = `${VITE_API_URL}/carts`;
      this.cart.forEach((product) => {
        axios
          .delete(`${url}/${product.id}`)
          .then(() => {
            this.resetUserCarts();
          })
          .catch(() => {
          });
      });
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
    },
    applyFreeShippingCoupon() {
      const url = `${VITE_API_URL}/coupons`;
      axios
        .get(url)
        .then((res) => {
          this.coupon = res.data[0];
        })
        .catch(() => {});
    },
    seeProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    isSecurityCode(value) {
      return /^\d{3}$/.test(value) ? true : '需要正確的三位數安全碼';
    },
    isCreditCard(value) {
      return /^\d{16}$/.test(value) ? true : '需要正確的信用卡號';
    },
    isDateFormat(value) {
      return /^\d{2}\d{2}$/.test(value) ? true : '需要正確的日期格式 MMYY';
    },
    createOrder() {
      const url = `${VITE_API_URL}/orders`;
      const currentDate = new Date();
      const formattedDateTime = `${currentDate.getFullYear()}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
      const orderData = {
        userId: this.userId,
        user: {
          userId: this.userId,
          name: this.userData.user.customerName,
          phone: this.userData.user.customerTel,
          email: this.userData.user.customerEmail,
          address: this.userData.user.customerAddress
        },
        cart: this.cart,
        is_paid: 1,
        orderStatus: '訂單已成立',
        create_at: formattedDateTime
      };
      axios
        .post(url, orderData)
        .then((res) => {
          this.clearCart();
          this.userData = {
            user: {
              customerEmail: '',
              customerName: '',
              customerTel: '',
              customerAddress: ''
            },
            payment: {
              creditCard: '',
              cardName: '',
              cardExpiration: '',
              secureCode: ''
            }
          };
          this.toPaymentReceived();
        })
        .catch(() => {
          Swal.fire({
            title: '付款失敗',
            text: '請稍後再試',
            icon: 'error'
          });
        });
    },
    toPaymentReceived() {
      this.$router.push({ name: 'PaymentReceived' });
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
    },
    checkoutAgree() {
      return this.eighteenPlusAgree && this.privacyAgree;
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
.notAllow {
  cursor: not-allowed;
}
.progress {
  height: 48px;
}
@media (max-width: 767px) {
  .progress {
    font-size: 14px;
  }
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
.bg-checkout {
  padding-top: 90px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bg1.jpg');
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
