<template>
  <div class="row justify-content-center">
    <h2 class="mt-5 font-weight-normal fw-bold text-center">歡迎來到 Vin Chateau</h2>
    <h2 class="mt-0 mb-5 font-weight-normal fw-bold text-center">若要開始購物，請先登入</h2>

    <div class="col-5 py-4">
      <VeeForm ref="form-login" class="form-signin" v-slot="{ errors }" @submit="login">
        <div class="form-floating mb-3">
          <VeeField id="email" type="email" name="帳號" class="form-control" :class="{ 'is-invalid': errors['帳號'] }"
            placeholder="請輸入 Email" rules="email|required" autofocus v-model="userData.email" />
          <label for="email">帳號</label>
          <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="form-floating">
          <VeeField id="password" name="密碼" type="password" class="form-control" :class="{ 'is-invalid': errors['密碼'] }"
            placeholder="請輸入密碼" autocomplete="false" :rules="isPasswordRule" v-model="userData.password" />
          <label for="password">密碼</label>
          <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
        </div>

        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
          登入
        </button>

        <div class="checkbox mb-3">
          <label for="isRemember">
            <input id="isRemember" type="checkbox" value="false" v-model="isRemember" /> 記住我
          </label>

          <!-- 忘記密碼 -->
          <RouterLink to="/forgot" class="p-2 float-end">忘記密碼</RouterLink>
        </div>

        <div class="text-center">
          還不是會員嗎?&nbsp;&nbsp;<RouterLink to="/register" class="p-2">立即註冊新帳號</RouterLink>
        </div>
      </VeeForm>
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

import { mapActions } from 'pinia';
import userStore from '@/stores/user';

import { userPassword } from '@/utils/regex';
import verticalLine from '@/assets/icons/svg/vertical_line.svg';

export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      verticalLine,
      title: '登入頁',
      isLoading: false,
      isRemember: false,
      userData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'setUserCookie']),
    login() {
      // console.log(this.userData, this.isRemember);

      const api = `${import.meta.env.VITE_API_URL}/login`;

      this.$http.post(api, this.userData)
        .then((res) => {
          // console.log(res.data);
          if (res.data.accessToken && res.data.user.role === 'user') {
            this.setUserCookie(res.data.user.id, res.data.accessToken);
            this.setUser(res.data.user);

            this.$router.replace('/');
          } else {
            Swal.fire({
              title: '登入失敗',
              text: '',
              icon: 'error'
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
          Swal.fire({
            title: err.response?.data || '登入失敗',
            text: '',
            icon: 'error'
          });
        });
    },
    isPasswordRule(value) {
      return userPassword.test(value) ? true : '密碼長度為 6 ~ 12 碼，需包含英文及數字';
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
