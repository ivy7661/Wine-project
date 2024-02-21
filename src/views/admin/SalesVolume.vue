<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <section class="wrap">
      <Pie-Chart :modified-Data="modifiedData"></Pie-Chart>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import PieChart from '../../components/admin/PieChart.vue';
const { VITE_API_URL } = import.meta.env;
export default {
  name: 'AdminSalesVolume',
  components: {
    PieChart
  },
  data() {
    return {
      title: '銷售數據',
      orders: [],
      extractedData: null,
      modifiedData: null
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    // getOrders() {
    //   const url = `${VITE_API_URL}/orders`;
    //   axios
    //     .get(url)
    //     .then((res) => {
    //       this.orders = res.data;

    //       // 提取所需的資料
    //       this.extractedData = this.orders[0].cart.map((item) => ({
    //         chineseName: item.chineseName,
    //         qty: item.qty
    //       }));

    //       this.modifiedData = this.extractedData.map((item) => ({
    //         name: item.chineseName,
    //         value: item.qty
    //       }));

    //       console.log(this.modifiedData);
    //     })
    //     .catch(() => {
    //       alert('取得訂單資訊失敗');
    //     });
    // },
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

          console.log(this.modifiedData);
        })
        .catch(() => {
          alert('取得訂單資訊失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
