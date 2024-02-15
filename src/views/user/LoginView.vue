<template>
  <div class="row justify-content-center">
    <h2 class="mt-5 font-weight-normal fw-bold text-center">歡迎來到 Vin Chateau</h2>
    <h2 class="mt-0 mb-5 font-weight-normal fw-bold text-center">若要開始購物，請先登入</h2>

    <div class="col-5 py-4">
      <form id="form" class="form-signin" v-on:submit.prevent="login">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" required autofocus
            v-model="userData.email" />
          <label for="email">帳號</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="false" required
            v-model="userData.password" />
          <label for="password">密碼</label>
        </div>

        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
          登入
        </button>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> 記住我
          </label>

          <!-- 忘記密碼 -->
          <RouterLink to="/forgot" class="p-2 float-end">忘記密碼</RouterLink>
        </div>

        <div class="text-center">
          還不是會員嗎?&nbsp;&nbsp;<RouterLink to="/register" class="p-2">立即註冊新帳號</RouterLink>
        </div>
      </form>
    </div>

    <div class="col-2 text-center">
      <img :src="verticalLine" alt="vertical Line">
    </div>

    <div class="col-5 py-4">
      <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
        使用 Google 快速登入
      </button>

      <div class="text-center mt-3">
        <p class="m-0">當您使用 Vin Chateau 購物</p>
        <p>代表您同意 Vin Chateau <RouterLink to="/" class="p-2">隱私權條款</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

import verticalLine from '@/assets/icons/svg/vertical_line.svg';

export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      verticalLine,
      title: '登入頁',
      isLoading: false,
      userData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      console.log(this.userData);
      const api = `${import.meta.env.VITE_APP_API_URL}/login`;
      console.log('api:', api);

      this.$http.post(api, this.userData)
        .then((res) => {
          console.log(res.data);
          if (res.data.accessToken && res.data.user.role === 'user') {
            this.$router.push('/');
          }
        })
        .catch((err) => {
          console.log(err.response);
          Swal.fire({
            title: err.response?.data || '登入失敗',
            text: '',
            icon: 'error'
          });
          this.isLoading = false;
        });
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
</style>
