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
            <RouterLink
              to="/adminLogin"
              class="nav-link d-flex align-items-center"
              @click="adminLogout"
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
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  mounted() {
    const adminTokenCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)adminToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    const adminIdCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)adminId\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    if (!adminTokenCookie || !adminIdCookie) {
      this.logout();
      Swal.fire({
        title: '無授權，請登入',
        icon: 'error'
      });
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${adminTokenCookie}`;
      this.adminCheck(adminIdCookie);
    }
  },
  methods: {
    adminCheck(adminId) {
      const api = `${import.meta.env.VITE_API_URL}/600/users/${adminId}`;

      this.$http
        .get(api)
        .then((res) => {
          if (res.data.role !== 'admin') {
            this.logout();
            Swal.fire({
              title: '無授權，請登入',
              icon: 'error'
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.logout();
        });
    },
    logout() {
      document.cookie = `adminToken=0; expires=${new Date('2000/1/1 12:00')}; path=/`;
      document.cookie = `adminId=0; expires=${new Date('2000/1/1 12:00')}; path=/`;

      this.$router.push('/adminLogin');
    },
    adminLogout() {
      this.logout();
      Swal.fire({
        title: '登出成功',
        icon: 'success'
      });
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
