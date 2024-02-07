<template>
  <div class="row">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  components: {},
  data() {
    return {
      title: '產品詳情'
    };
  },
  mounted() {
    console.log('ProductDetail.vue mounted', this.$route.params.id);
    this.title = '產品詳情 - ' + this.$route.params.id;
  }
};
</script>

<style lang="scss" scoped>
</style>
