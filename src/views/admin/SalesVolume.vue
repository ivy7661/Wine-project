<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="mt-3">{{ title }}</h1>
      <h2 class="mt-4">產品營收比重</h2>
      <section class="wrap">
        <Pie-Chart :modified-Data="modifiedData"></Pie-Chart>
        <Revenue-Statistics :cart-data="cartData"></Revenue-Statistics>
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
      orders: [],
      extractedData: null,
      modifiedData: null,
      cartData: null
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

          this.extractedData = this.orders.flatMap((order) =>
            order.cart.map((item) => ({ name: item.chineseName, value: item.qty }))
          );

          // 合併重複的
          this.modifiedData = this.extractedData.reduce((acc, curr) => {
            const existingItem = acc.find((item) => item.name === curr.name);
            if (existingItem) {
              existingItem.value += curr.value;
            } else {
              acc.push({ name: curr.name, value: curr.value });
            }
            return acc;
          }, []);
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

          const transformedData = this.orders.flatMap((order) =>
            order.cart.map((item) => ({
              product_id: item.product_id,
              chineseName: item.chineseName,
              price: item.price,
              qty: item.qty
            }))
          );
          console.log(transformedData);

          // 將相同 product_id 的項目進行合併
          this.cartData = transformedData.reduce((acc, curr) => {
            const existingItem = acc.find((item) => item.product_id === curr.product_id);
            if (existingItem) {
              existingItem.qty += curr.qty;
            } else {
              acc.push({
                product_id: curr.product_id,
                chineseName: curr.chineseName,
                price: curr.price,
                qty: curr.qty
              });
            }
            return acc;
          }, []);
        })
        .catch(() => {
          alert('取得訂單資訊失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
