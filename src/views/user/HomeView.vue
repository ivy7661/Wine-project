<template>
  <!-- 熱賣商品、引導選酒 -->
  <HomeWineSelection />

  <!-- 最新消息 -->
  <HomeNews />

  <!-- 法國特色產區 -->
  <HomeWineRegion />

  <!-- 好文分享 -->
  <HomePosts />
</template>

<script>
import HomeWineSelection from '@/components/HomeWineSelection.vue';
import HomeNews from '@/components/HomeNews.vue';
import HomeWineRegion from '@/components/HomeWineRegion.vue';
import HomePosts from '@/components/HomePosts.vue';

export default {
  name: 'HomeView',
  components: { HomeWineSelection, HomeNews, HomeWineRegion, HomePosts },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
