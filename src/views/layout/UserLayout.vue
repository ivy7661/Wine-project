<template>
  <HeaderComponent :userId="user?.id" />

  <div class="container">
    <RouterView />
  </div>

  <FooterComponent />
</template>

<script>
import axios from 'axios';

import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user';

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'UserLayout',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      title: '前台頁面'
    };
  },
  mounted() {
    const { userToken, userId } = this.getUserCooke;

    if (!userToken || !userId) {
      this.logout();
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
      this.userCheck(userId);
    }
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'cleanUser']),
    userCheck(userId) {
      const api = `${import.meta.env.VITE_API_URL}/600/users/${userId}`;

      this.$http.get(api)
        .then((res) => {
          // console.log(res.data);
          if (res.data.role !== 'user') {
            this.logout();
          } else {
            this.setUser(res.data);

            // 如果是在登入頁，就導回首頁
            if (this.$route.path === '/login') {
              this.$router.push('/');
            }
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.logout();
        });
    },
    logout() {
      this.cleanUser();
      // this.$router.push('/');
    }
  },
  computed: {
    ...mapState(userStore, ['user', 'getUserCooke'])
  }
};
</script>

<style lang="scss" scoped>
</style>
