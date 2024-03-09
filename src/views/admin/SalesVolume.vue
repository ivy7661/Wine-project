<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="mt-3">{{ title }}</h1>
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
const { VITE_API_URL } = import.meta.env;
export default {
  name: 'AdminSalesVolume',
  components: {
    PieChart,
    RevenueStatistics
  },
  data() {
    return {
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
