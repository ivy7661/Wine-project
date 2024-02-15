<template>
  <div class="row justify-content-center">
    <h2 class="mt-5 font-weight-normal fw-bold text-center">{{ title }}</h2>

    <div class="col-5 py-4">
      <form id="form" class="form-signin" v-on:submit.prevent="signIn">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" required autofocus
            v-model="userData.email" />
          <label for="email">帳號</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="phone" placeholder="0988888888" required autofocus
            v-model="userData.phone" />
          <label for="phone">電話</label>
        </div>

        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
          下一步
        </button>

        <div class="text-center mt-3">
          還不是會員嗎?&nbsp;&nbsp;<RouterLink to="/register" class="p-2">立即註冊新帳號</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotView',
  components: {},
  data() {
    return {
      title: '忘記密碼?',
      userData: {
        email: '',
        username: '',
        phone: '',
        password: '',
        checkPwd: ''
      }
    };
  },
  mounted() {

  },
  methods: {
    signIn() {
      console.log('signIn: ', this.userData);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
