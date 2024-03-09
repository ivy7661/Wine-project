<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="my-3">{{ title }}</h1>
      <div class="header-line">
        <img :src="headerLine" alt="header line" />
      </div>
      <h2 class="mt-4">產品營收比重</h2>

      <section class="wrap">
        <Pie-Chart></Pie-Chart>
        <Revenue-Statistics></Revenue-Statistics>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PieChart from '../../components/admin/PieChart.vue';
import RevenueStatistics from '../../components/admin/RevenueStatistics.vue';
import headerLine from '@/assets/icons/svg/header_line.svg';

const { VITE_API_URL } = import.meta.env;
export default {
  name: 'AdminSalesVolume',
  components: {
    PieChart,
    RevenueStatistics
  },
  data() {
    return {
      headerLine,
      title: '銷售數據',
      orders: []
    };
  },
  mounted() {
    this.getOrders();
    this.getCart();
  },
  methods: {
    getOrders() {
      const url = `${VITE_API_URL}/orders`;
      axios
        .get(url)
        .then((res) => {
          this.orders = res.data;
        })
        .catch(() => {
          alert('取得訂單資訊失敗');
        });
    },
    getCart() {
      const url = `${VITE_API_URL}/orders`;
      axios
        .get(url)
        .then((res) => {
          this.orders = res.data;
        })
        .catch(() => {
          alert('取得訂單資訊失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.header-line {
  display: flex;
  justify-content: left;

  img {
    width: 100%;
  }
}
</style>
