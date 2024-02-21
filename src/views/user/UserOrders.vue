<template>
  <div class="container">
    <div class="bg-cart">
      <h2 class="pt-5">{{ title }}</h2>
    </div>
    <img src="/images/footerContainer.png" class="w-100 my-5" />
    <div class="row">
      訂單

    </div>
  </div>
</template>

<script>
export default {
  name: 'UserOrders',
  components: {},
  data() {
    return {
      title: '會員訂單'
    };
  },
  mounted() { }
};
</script>

<style lang="scss" scoped>
</style>
