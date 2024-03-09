<template>
  <loading v-model:active="isLoading">
    <template #default>
      <WineGlassLoader />
    </template>
  </loading>

  <!-- 熱賣商品、引導選酒 -->
  <HomeWineSelection @is-ready="onIsReady" />

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
import WineGlassLoader from './WineGlassLoader.vue';
import Loading from 'vue-loading-overlay';

export default {
  name: 'HomeView',
  components: { HomeWineSelection, HomeNews, HomeWineRegion, HomePosts, WineGlassLoader, Loading },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    onIsReady() {
      setTimeout(() => {
        this.isLoading = false;
      }, 600);
    }
  }
};
</script>

<style lang="scss" scoped></style>
