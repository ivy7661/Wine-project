<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
      <h1 class="display-1 fw-bold">{{ title }}</h1>
      <a href="/" class="btn btn-primary">回到首頁</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  components: {},
  data() {
    return {
      title: '404'
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
