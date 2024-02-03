<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
          name: this.name
        })
        .then((res) => {
          console.log(res);
          alert("註冊成功");
        })
        .catch((error) => {
          console.log(error);
          alert("註冊失敗");
        });
    }
  }
};
</script>

<template>
  <form id="form">
    <h1 class="mb-4">會員註冊</h1>
    <input type="text" placeholder="請輸入會員名稱" class="mb-3 px-3 pe-4 py-2" v-model="name" />
    <br />
    <input type="text" placeholder="請輸入電子郵件" class="mb-3 px-3 pe-4 py-2" v-model="email" />
    <br />
    <input
      type="password"
      placeholder="請輸入密碼"
      class="mb-4 px-3 pe-4 py-2"
      v-model="password"
    />
    <br />
    <button class="btn btn-lg btn-primary" type="submit" @click.prevent="" v-on:click="signup">
      註冊
    </button>
  </form>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
