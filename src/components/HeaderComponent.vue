<template>
  <header class="bg-dark">
    <div class="p-3">
      <img src="/images/Logo.png" alt="LOGO">
      <nav class="nav d-flex">
        <RouterLink to="/" class="p-2">首頁</RouterLink>
        <RouterLink to="/products" class="p-2">商品列表</RouterLink>
        <RouterLink to="/productDetail/1234567879" class="p-2">商品介紹</RouterLink>
        <RouterLink to="/cart" class="p-2">購物車</RouterLink>
        <RouterLink to="/login" class="p-2">登入頁</RouterLink>
        <RouterLink to="/register" class="p-2">註冊頁</RouterLink>
        <RouterLink to="/error" class="p-2">404</RouterLink>
        <RouterLink to="/admin/products" class="p-2">管理者頁面</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
