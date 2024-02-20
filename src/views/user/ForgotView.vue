<template>
  <div class="row justify-content-center">
    <h2 class="mt-5 font-weight-normal fw-bold text-center">{{ title }}</h2>

    <div class="col-5 py-4">
      <swiper :autoHeight="true" :spaceBetween="20" :allowTouchMove="false" :allowSlidePrev="false" @swiper="onSwiper"
        class="mySwiper">
        <swiper-slide>
          <h3 class="mt-3 mb-3 font-weight-normal fw-bold text-center">請輸入資料</h3>
          <VeeForm ref="form-login" class="form-signin" v-slot="{ errors }" @submit="checkUserInfo">
            <div class="form-floating mb-3">
              <VeeField id="email" name="帳號" type="email" class="form-control" :class="{ 'is-invalid': errors['帳號'] }"
                placeholder="請輸入 Email" rules="email|required" v-model="userData.email" />
              <label for="email">帳號</label>
              <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="form-floating mb-3">
              <VeeField id="phone" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" :rules="isPhoneRule" v-model="userData.phone" />
              <label for="phone">電話</label>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              下一步
            </button>

            <div class="text-center mt-3">
              還不是會員嗎?&nbsp;&nbsp;<RouterLink to="/register" class="p-2">立即註冊新帳號</RouterLink>
            </div>
          </VeeForm>
        </swiper-slide>
        <swiper-slide>
          <h3 class="mt-3 mb-3 font-weight-normal fw-bold text-center">請重新輸入密碼</h3>
          <VeeForm ref="form-login" class="form-signin" v-slot="{ errors }" @submit="confirmResetUser">
            <div class="form-floating mb-3">
              <VeeField id="password" name="密碼" type="password" class="form-control"
                :class="{ 'is-invalid': errors['密碼'] }" placeholder="請輸入密碼" autocomplete="false" :rules="isPasswordRule"
                v-model="userData.password" />
              <label for="password">密碼</label>
              <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="form-floating mb-3">
              <VeeField id="checkPwd" name="確認密碼" type="password" class="form-control"
                :class="{ 'is-invalid': errors['確認密碼'] }" placeholder="Password" autocomplete="false"
                :rules="checkPWDRule" v-model="userData.checkPwd" />
              <label for="checkPwd">確認密碼</label>
              <ErrorMessage name="確認密碼" class="invalid-feedback"></ErrorMessage>
            </div>

            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              修改密碼
            </button>

            <div class="text-center mt-3">
              還不是會員嗎?&nbsp;&nbsp;<RouterLink to="/register" class="p-2">立即註冊新帳號</RouterLink>
            </div>
          </VeeForm>
        </swiper-slide>
      </swiper>

    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Swal from 'sweetalert2';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { phoneNumber, userPassword } from '@/utils/regex';

// Import Swiper styles
import 'swiper/css';

// 變數
const router = useRouter();
const swiperModule = ref(null);
const title = ref('忘記密碼?');
const userData = ref({
  id: 0,
  email: '',
  phone: '',
  password: '',
  checkPwd: ''
});

// 方法
const onSwiper = (swiper) => {
  swiperModule.value = swiper;
};

const checkUserInfo = () => {
  const api = `${import.meta.env.VITE_API_URL}/v1/api/uservalid`;

  axios.post(api, {
    email: userData.value.email,
    phone: userData.value.phone
  })
    .then((res) => {
      // console.log(res.data);
      if (res.data.id) {
        // 確認完資料並進入下一步
        userData.value.id = res.data.id;
        swiperModule.value.slideNext();
      } else {
        Swal.fire({
          title: '查無此會員',
          text: '',
          icon: 'error'
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
      Swal.fire({
        title: '查無此會員',
        text: '',
        icon: 'error'
      });
    });
};

const confirmResetUser = () => {
  Swal.fire({
    title: '確認修改密碼??',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '確認',
    cancelButtonText: '取消'
  }).then((result) => {
    if (result.isConfirmed) {
      resetUser();
    }
  });
};

const resetUser = () => {
  const api = `${import.meta.env.VITE_API_URL}/users/${userData.value.id}`;

  axios.patch(api, { password: userData.value.password })
    .then((res) => {
      // console.log(res.data);
      Swal.fire({
        title: '密碼已重置',
        text: '',
        icon: 'success'
      });
      router.push('/login');
    })
    .catch((err) => {
      console.log(err.response);
      Swal.fire({
        title: '密碼重置失敗',
        text: '',
        icon: 'error'
      });

      userData.value = {
        id: 0,
        email: '',
        phone: '',
        password: '',
        checkPwd: ''
      };
    });
};

// 驗證規則
const isPhoneRule = (value) => {
  return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
};
const isPasswordRule = (value) => {
  return userPassword.test(value) ? true : '密碼長度為 6 ~ 12 碼，需包含英文及數字';
};
const checkPWDRule = (value) => {
  return value === userData.value.password ? true : '密碼不一致';
};

// export default {
//   name: 'ForgotView',
//   components: {},
//   data() {
//     return {
//       step: 1,
//       title: '忘記密碼?',
//       userData: {
//         id: 0,
//         email: '',
//         phone: '',
//         password: '',
//         checkPwd: ''
//       }
//     };
//   },
//   methods: {
//     checkUserInfo() {
//       const api = `${import.meta.env.VITE_API_URL}/v1/api/uservalid`;

//       this.$http.post(api, {
//         email: this.userData.email,
//         phone: this.userData.phone
//       })
//         .then((res) => {
//           // console.log(res.data);
//           if (res.data.id) {
//             // 重置密碼
//             this.userData.id = res.data.id;
//             this.step = 2;
//           } else {
//             Swal.fire({
//               title: '查無此會員',
//               text: '',
//               icon: 'error'
//             });
//           }
//         })
//         .catch((err) => {
//           console.log(err.response);
//           Swal.fire({
//             title: '查無此會員',
//             text: '',
//             icon: 'error'
//           });
//         });
//     },
//     confirmResetUser() {
//       Swal.fire({
//         title: '確認修改密碼??',
//         text: '',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: '確認',
//         cancelButtonText: '取消'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           this.resetUser();
//         }
//       });
//     },
//     resetUser() {
//       const api = `${import.meta.env.VITE_API_URL}/users/${this.userData.id}`;

//       this.$http.patch(api, { password: this.userData.password })
//         .then((res) => {
//           // console.log(res.data);
//           Swal.fire({
//             title: '密碼已重置',
//             text: '',
//             icon: 'success'
//           });
//           this.$router.push('/login');
//         })
//         .catch((err) => {
//           console.log(err.response);
//           Swal.fire({
//             title: '密碼重置失敗',
//             text: '',
//             icon: 'error'
//           });

//           this.step = 1;
//           this.userData = {
//             id: 0,
//             email: '',
//             phone: '',
//             password: '',
//             checkPwd: ''
//           };
//         });
//     },
//     isPhoneRule(value) {
//       return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
//     },
//     isPasswordRule(value) {
//       return userPassword.test(value) ? true : '密碼長度為 6 ~ 12 碼，需包含英文及數字';
//     },
//     checkPWDRule(value) {
//       return value === this.userData.password ? true : '密碼不一致';
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.mySwiper {
  form {
    min-height: 360px;
  }
}
</style>
