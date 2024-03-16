<template>
  <div>
    <loading v-model:active="isLoading" :is-full-page="fullPage">
      <template #default>
        <WineGlassLoader />
      </template>
    </loading>
    <div class="bg-paymentReceived pb-4">
      <h2 class="pb-5 text-white container">訂單已成立</h2>
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
          class="progress-bar bg-primary"
          role="progressbar"
          style="width: 33%"
          aria-valuenow="33"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          填寫資料
        </div>
        <div
          class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
          role="progressbar"
          style="width: 34%"
          aria-valuenow="34"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          完成訂單
        </div>
      </div>
      <div v-if="order" class="bg-accent-brown p-3 table-responsive">
        <h3 class="pb-4">訂單編號 #{{ order.id }} ({{ order.create_at }})</h3>
        <div class="row">
          <div class="col-6">
            <div class="mb-3"><strong>訂單編號:</strong> {{ order.id }}</div>
            <div class="mb-3"><strong>顧客姓名:</strong> {{ order.user.name }}</div>
            <div class="mb-3"><strong>連絡電話:</strong> {{ order.user.phone }}</div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <strong>付款狀態:</strong> {{ order.is_paid ? '已付款' : '未付款' }}
            </div>
            <div class="mb-3"><strong>訂單狀態:</strong> {{ order.orderStatus }}</div>
          </div>
        </div>
        <div class="row pb-3">
          <div class="col-12 col-md-6">
            <div class="mb-3"><strong>連絡信箱:</strong> {{ order.user.email }}</div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3"><strong>送貨地址:</strong> {{ order.user.address }}</div>
          </div>
        </div>
        <h3 class="pb-3">購買商品清單</h3>
        <div>
          <table class="table">
            <thead>
              <tr class="fs-5">
                <th>商品名稱</th>
                <th>單價</th>
                <th>數量</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in order.cart" :key="key" class="fs-5">
                <td>{{ item.chineseName }}</td>
                <td>NT$ {{ item.price }}</td>
                <td>{{ item.qty }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { h } from 'vue';
import WineGlassLoader from './WineGlassLoader.vue';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'PaymentReceived',
  data() {
    return {
      order: null,
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
    ...mapActions(userStore, ['setUser', 'cleanUser', 'getUserCookie']),
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
    getUserOrderList() {
      const url = `${VITE_API_URL}/orders`;
      axios
        .get(url)
        .then((res) => {
          this.setLoadingTime();
          this.orderList = res.data;
          const userOrder = this.orderList.filter((order) => order.user.userId === this.userId);
          this.order = userOrder[userOrder.length - 1];
        })
        .catch(() => {});
    }
  },
  computed: {
    ...mapState(userStore, ['getUser'])
  },
  mounted() {
    const { userId } = this.getUserCookie();
    this.userId = userId;
    this.getUserOrderList();
  }
};
</script>

<style lang="scss" scoped>
.bg-paymentReceived {
  padding-top: 90px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bg1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.progress {
  height: 48px;
}
@media (max-width: 767px) {
  .progress {
    font-size: 14px;
  }
}
.bg-paymentReceived {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
