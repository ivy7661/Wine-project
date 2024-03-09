<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-2 bg-accent-brown pt-5">
        <div class="text-center">
          <img src="/images/Logo.png" alt="logo" class="img-fluid mb-6 px-2 logo" />
        </div>
        <ul class="nav flex-column px-2">
          <li class="nav-item">
            <RouterLink to="/admin/accounts" class="nav-link">帳戶管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">商品管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">訂單管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/comments" class="nav-link">評論管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/sales" class="nav-link">銷售數據</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">回前台首頁</RouterLink>
          </li>

          <li class="nav-item mt-5">
            <RouterLink to="/adminLogin" class="nav-link d-flex align-items-center"
              ><span class="material-icons"> logout </span>登出</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="col-10 py-5">
        <div class="container">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'AdminLayout',
  components: {},
  data() {
    return {
      title: '後台頁面'
    };
  },
  mounted() {
    // const adminTokenCookie = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)adminToken\s*=\s*([^;]*).*$)|^.*$/,
    //   '$1'
    // );
    // const adminIdCookie = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)adminId\s*=\s*([^;]*).*$)|^.*$/,
    //   '$1'
    // );
    // if (!adminTokenCookie || !adminIdCookie) {
    //   this.logout();
    // } else {
    //   axios.defaults.headers.common.Authorization = `Bearer ${adminTokenCookie}`;
    //   this.adminCheck(adminIdCookie);
    // }
  },
  methods: {
    // 確認是否為管理員
    adminCheck(adminId) {
      const api = `${import.meta.env.VITE_API_URL}/600/users/${adminId}`;

      this.$http
        .get(api)
        .then((res) => {
          // console.log(res.data);
          if (res.data.role !== 'admin') {
            this.logout();
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.logout();
        });
    },
    // 登出
    logout() {
      document.cookie = `adminToken=0; expires=${new Date('2000/1/1 12:00')}; path=/`;
      document.cookie = `adminId=0; expires=${new Date('2000/1/1 12:00')}; path=/`;

      Swal.fire({
        title: '無授權，請重新登入',
        text: '',
        icon: 'error'
      });

      this.$router.push('/adminLogin');
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-weight: 500;
  border-left: 4px solid transparent;
  margin-top: 20px;
}
.nav-link.active {
  border-left: 4px solid #752525;
  font-weight: bold;
}
</style>
