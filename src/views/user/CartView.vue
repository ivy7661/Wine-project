<template>
  <div class="container">
    <div class="bg-cart">
      <h2 class="pt-5">購物車資訊</h2>
    </div>
    <img src="/images/footerContainer.png" class="w-100 my-5" />
    <div class="row">
      <div class="col-8">
        <!-- 購物車清單外框 -->
        <div class="cartList d-flex flex-column border border-primary rounded">
          <div class="bg-secondary text-white mb-3 p-3 ps-4">訂購清單</div>
          <div class="p-3">
            <div class="card shadow d-flex flex-row justify-content-center mb-3" v-for="(product,key) in cart" :key="key">
              <img :src="`/images/wine_images/${product.image}.jpg`" class="card-img-top" :alt="product.chineseName" />
              <div class="card-body">
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
                <h5 class="card-title">{{ product.chineseName }}</h5>
                <p>750 ml</p>
                <div class="input-group mb-3">
                  <span class="input-group-text">數量</span>
                  <input type="number" min="0" class="form-control text-end" v-model.number="product.qty" @click="updateCartQty(product)"/>
                </div>
                <strong class="text-danger">$ {{ product.price }}</strong>
              </div>
              <a href="#" @click="deleteCartItem(product)" class="btn btn-secondary d-flex justify-content-center align-items-center"
                ><i class="bi bi-trash"></i
              ></a>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5 mb-5">
            <div class="bg-black text-center line" style="height: 1px"></div>
          </div>
          <div class="d-flex flex-column align-items-end pe-3">
            <p class="text-primary fs-5">恭喜您達成單次消費滿3000，此次消費免運費！</p>
            <div>
              <span>(共 {{cart.length}}件商品)</span>
              <p>小計: {{ calculateSubtotal}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="totalPrice">
          <div class="card">
            <div class="card-header bg-secondary text-white">購物車</div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="card-text">商品小計</p>
                <p class="card-text">NT$ {{ calculateSubtotal }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="card-text">運費價格</p>
                <p class="card-text">NT$ {{ shipping }}</p>
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
              <p class="card-text text-danger">NT$ {{ calculateTotalPrice }}</p>
            </div>
            <a href="#" class="btn btn-primary py-3">前往結帳頁面</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        .catch((err) => {
          console.log('未正確取得購物車');
          console.log(err.data);
        });
    },
    updateCartQty(product) {
      const url = `${VITE_API_URL}/carts`;
      const newData = {
        qty: product.qty
      };
      axios.patch(`${url}/${product.id}`, newData)
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        });
    },
    deleteCartItem(product) {
      const url = `${VITE_API_URL}/carts`;
      axios.delete(`${url}/${product.id}`, {
        userId: this.userId,
        id: product.id
      }).then((res) => {
        console.log(res.data);
        this.getCartList();
      }).catch((err) => {
        console.log(err);
      });
    },
    applyFreeShippingCoupon() {
      const url = `${VITE_API_URL}/coupons`;
      const code = {
        code: 'freeShipping',
        id: 1
      };

      axios.post(url, code)
        .then((res) => {
          console.log(res.data);
          this.coupon = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  watch: {
    calculateSubtotal(newTotal) {
      if (newTotal >= 3000) {
        // 購物車總金額超過 3000，發送折抵運費的優惠券
        this.applyFreeShippingCoupon();
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
    calculateTotalPrice() {
      const subtotal = this.calculateSubtotal;
      const discount = this.coupon ? this.coupon.discount : 0;
      return subtotal + this.shipping - discount;
    }
  },
  mounted() {
    const { userId } = this.getUserCookie();
    this.userId = userId;
    this.getCartList();
  }
};
</script>

<style lang="scss" scoped>
a:hover {
  cursor: pointer;
}
.bg-cart {
  padding-top: 50px;
  padding-bottom: 50px;
}
.cartList .card {
  height: 230px;
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
}
.line {
  width: 95%;
}
</style>
