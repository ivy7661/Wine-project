<template>
  <header class="bg-dark">
    <div class="p-3">
      <!-- <img src="/images/Logo.png" alt="LOGO"> -->
      <nav class="nav d-flex">
        <RouterLink to="/" class="p-2">回前台首頁</RouterLink>
        <RouterLink to="/admin/products" class="p-2">商品管理</RouterLink>
        <RouterLink to="/adminLogin" class="p-2">登出</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>

  <footer class="footer pt-5 pb-5">
    <div class="container p-3 mb-2">
      ADMIN FOOTER
    </div>
  </footer>
</template>

<script>

export default {
  name: 'AdminLayout',
  components: {},
  data() {
    return {
      title: '後台頁面'
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
