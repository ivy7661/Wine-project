<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <section class="wrap">
      <h2 class="section-title">全品項營收比重</h2>
      <Pie-Chart></Pie-Chart>
    </section>
  </div>
</template>

<script>
import PieChart from '../../components/admin/PieChart.vue';
export default {
  name: 'AdminSalesVolume',
  components: {
    PieChart
  },
  data() {
    return {
      title: '銷售數據'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
