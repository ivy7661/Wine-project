<template>
  <HeaderComponent />

  <div class="container">
    <RouterView />
  </div>
  
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'UserLayout',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      title: '前台頁面'
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
