<template>
  <div class="row">
    <h1>{{ title }}</h1>

    <a href="/" class="btn btn-primary">回到首頁</a>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  components: {},
  data() {
    return {
      title: '管理者登入頁'
    };
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
</style>
