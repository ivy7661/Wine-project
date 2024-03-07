<template>
  <div>
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
      <div v-if="order" class="bg-accent-brown p-3">
        <h3 class="pb-4">訂單編號 #{{ order.id }} ({{ order.create_at }})</h3>
        <table class="table mb-4">
          <thead>
            <tr class="fs-5">
              <th>訂單編號</th>
              <th>顧客姓名</th>
              <th>連絡電話</th>
              <th>連絡信箱</th>
              <th>送貨地址</th>
              <th>付款狀態</th>
              <th>訂單狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr class="fs-5">
              <td>{{ order.id }}</td>
              <td>{{ order.user.name }}</td>
              <td>{{ order.user.phone }}</td>
              <td>{{ order.user.email }}</td>
              <td>{{ order.user.address }}</td>
              <td>{{ order.is_paid ? '已付款' : '未付款' }}</td>
              <td>{{ order.orderStatus }}</td>
            </tr>
          </tbody>
        </table>
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
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'PaymentReceived',
  components: {},
  data() {
    return {
      order: null,
      userId: ''
    };
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'cleanUser', 'getUserCookie']),
    getUserOrderList() {
      const url = `${VITE_API_URL}/orders`;
      axios
        .get(url)
        .then((res) => {
          this.orderList = res.data;
          const userOrder = this.orderList.filter((order) => order.user.userId === this.userId);
          this.order = userOrder[userOrder.length - 1];
        })
        .catch(() => {
        });
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/bg1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.progress {
  height: 30px;
}
.bg-paymentReceived {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
