<template>
  <h2>營業收入統計表</h2>
  <div class="row mt-4">
    <div class="px-3">
      <table class="table align-middle border border-primary" style="width: 800px">
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
          <tr v-for="item in revenueCart" :key="item.product_id">
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
export default {
  props: ['cartData'],
  data() {
    return {
      revenueCart: [],
      sum: null
    };
  },
  mounted() {
    setTimeout(this.getCartData, 100);
    setTimeout(this.calculate, 100);
  },
  methods: {
    getCartData() {
      this.revenueCart = this.cartData;
      console.log(this.revenueCart);
    },
    calculate() {
      let total = 0;
      this.revenueCart.forEach((item) => {
        total += item.qty * item.price;
      });
      this.sum = total;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 15px;
}
</style>
