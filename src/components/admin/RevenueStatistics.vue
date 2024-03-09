<template>
  <h2>營業收入統計表</h2>
  <div class="row mt-4">
    <div class="px-3">
      <table class="table align-middle" style="width: 800px">
        <thead class="table-light">
          <tr>
            <td>商品編號</td>
            <td>商品名稱</td>
            <td class="text-end">價格</td>
            <td class="text-end">售出數量</td>
            <td class="text-end">營收</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartData" :key="item.product_id">
            <td>{{ item.product_id }}</td>
            <td>{{ item.chineseName }}</td>
            <td class="text-end">{{ item.price }}</td>
            <td class="text-end">{{ item.qty }}</td>
            <td class="text-end">{{ item.price * item.qty }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-end">總營業額</td>
            <td class="text-end">{{ this.sum }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export default {
  data() {
    return {
      cartData: [],
      sum: null
    };
  },
  mounted() {
    this.getCart();
    setTimeout(this.calculate, 100);
  },
  methods: {
    calculate() {
      let total = 0;
      this.cartData.forEach((item) => {
        total += item.qty * item.price;
      });
      this.sum = total;
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

          // 將相同 product_id 項目進行合併
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

<style lang="scss" scoped>
th,
td {
  padding: 8px 30px;
}
tr:first-child th:first-child {
  border-top-left-radius: 5px;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}
tr:first-child th:last-child {
  border-top-right-radius: 5px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}
</style>
