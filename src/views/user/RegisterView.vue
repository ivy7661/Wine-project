<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="fs-3 mt-5 font-weight-normal fw-bold text-center">{{ title }}</h2>
      <h2 class="fs-3 mt-0 mb-3 font-weight-normal fw-bold text-center">
        已經擁有 Vin Chateau 帳號嗎?<RouterLink to="/login" class="p-2">立即登入</RouterLink>
      </h2>

      <div class="col-5 py-4">
        <VeeForm ref="register-form" class="form-signin" v-slot="{ errors }" @submit="register">
          <!-- <code> {{ errors }} </code> -->
          <div class="form-floating mb-3">
            <VeeField id="email" name="帳號" type="email" class="form-control" :class="{ 'is-invalid': errors['帳號'] }"
              placeholder="請輸入 Email" rules="email|required" v-model="form.user.email" autofocus />
            <label for="email">帳號</label>
            <ErrorMessage name="帳號" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-3">
            <VeeField id="username" name="名稱" type="text" class="form-control" :class="{ 'is-invalid': errors['名稱'] }"
              placeholder="請輸入名稱" rules="required|min:2|max:10" v-model="form.user.username" />
            <label for="username">名稱</label>
            <ErrorMessage name="名稱" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-3">
            <VeeField id="phone" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話" :rules="isPhoneRule" v-model="form.user.phone" />
            <label for="phone">電話</label>
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-3">
            <VeeField id="password" name="密碼" type="password" class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }" placeholder="請輸入密碼" autocomplete="false" :rules="isPasswordRule"
              v-model="form.user.password" />
            <label for="password">密碼</label>
            <ErrorMessage name="密碼" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-3">
            <VeeField id="checkPwd" name="確認密碼" type="password" class="form-control"
              :class="{ 'is-invalid': errors['確認密碼'] }" placeholder="Password" autocomplete="false"
              :rules="checkPWDRule" v-model="form.user.checkPwd" />
            <label for="checkPwd">確認密碼</label>
            <ErrorMessage name="確認密碼" class="invalid-feedback" />
          </div>

          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            註冊
          </button>

          <div class="text-center mt-3">
            <RouterLink to="/" class="p-2">回首頁</RouterLink>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

import { mapActions } from 'pinia';
import userStore from '@/stores/user';

import { phoneNumber, userPassword } from '@/utils/regex';

export default {
  name: 'RegisterView',
  components: {},
  data() {
    return {
      title: '立即註冊',
      form: {
        user: {
          email: '',
          username: '',
          phone: '',
          password: '',
          checkPwd: ''
        },
        message: ''
      }
    };
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'setUserCookie']),
    register() {
      const api = `${import.meta.env.VITE_API_URL}/register1`;

      const postData = {
        email: this.form.user.email,
        username: this.form.user.username,
        phone: this.form.user.phone,
        password: this.form.user.password,
        role: 'user'
      };

      this.$http.post(api, postData)
        .then((res) => {
          this.setUserCookie(res.data.user.id, res.data.accessToken);
          this.setUser(res.data.user);

          Swal.fire({
            title: '註冊成功',
            text: `歡迎 ${res.data.user.username} 加入 Vin Chateau 會員`,
            icon: 'success'
          });

          this.$router.push('/');
        })
        .catch((err) => {
          Swal.fire({
            title: err.response?.data || '註冊失敗',
            text: '',
            icon: 'error'
          });
        });
    },
    checkPWDRule(value) {
      return value === this.form.user.password ? true : '密碼不一致';
    },
    isPasswordRule(value) {
      return userPassword.test(value) ? true : '密碼長度為 6 ~ 12 碼，需包含英文及數字';
    },
    isPhoneRule(value) {
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    }
  }
};
</script>

<style lang="scss" scoped></style>
