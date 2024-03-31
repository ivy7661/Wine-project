<template>
  <div class="row justify-content-center">
    <h2 class="mt-5 font-weight-normal fw-bold text-center">{{ title }}</h2>

    <div class="col-6 py-4">
      <form id="form" class="form-signin" v-on:submit.prevent="login">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            required
            autofocus
            v-model="userData.email"
          />
          <label for="email">帳號</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            autocomplete="false"
            required
            v-model="userData.password"
          />
          <label for="password">密碼</label>
        </div>

        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">登入</button>

        <div class="checkbox mb-3">
          <label> <input type="checkbox" value="remember-me" /> 記住我 </label>
        </div>

        <div class="text-center">
          <RouterLink to="/" class="p-2">回到首頁</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { addDays } from '@/utils/helpers';

export default {
  name: 'AdminLogin',
  components: {},
  data() {
    return {
      title: '管理者登入頁',
      userData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      const api = `${import.meta.env.VITE_API_URL}/login`;

      this.$http
        .post(api, this.userData)
        .then((res) => {
          // role 用來判斷是否為管理員
          if (res.data.accessToken && res.data.user.role === 'admin') {
            const getDateTime = addDays(new Date(), 2);
            document.cookie = `adminToken=${res.data.accessToken}; expires=${new Date(getDateTime)}; path=/`;
            document.cookie = `adminId=${res.data.user.id}; expires=${new Date(getDateTime)}; path=/`;

            this.$router.push('/admin/accounts');
            Swal.fire({
              title: '登入成功',
              text: `管理員：${res.data.user.name}`,
              icon: 'success'
            });
          } else {
            Swal.fire({
              title: '登入失敗',
              text: '',
              icon: 'error'
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: err.response?.data || '登入失敗',
            text: '',
            icon: 'error'
          });
          this.isLoading = false;
        });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
