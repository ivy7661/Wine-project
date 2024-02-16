<template>
  <header>
    <div class="p-3">
      <!-- <img src="/images/Logo.png" alt="LOGO"> -->
      <nav class="nav d-flex">
        <RouterLink to="/" class="p-2">回前台首頁</RouterLink>
        <RouterLink to="/admin/accounts" class="p-2">帳戶管理</RouterLink>
        <RouterLink to="/admin/products" class="p-2">商品管理</RouterLink>
        <RouterLink to="/admin/orders" class="p-2">訂單管理</RouterLink>
        <RouterLink to="/admin/comments" class="p-2">評論管理</RouterLink>
        <RouterLink to="/admin/sales" class="p-2">銷售數據</RouterLink>
        <RouterLink to="/adminLogin" class="p-2">登出</RouterLink>
      </nav>
    </div>
  </header>
  <div class="header-line">
    <img :src="headerLine" alt="header line" />
  </div>

  <div class="container">
    <RouterView />
  </div>

  <!-- <footer class="footer pt-5 pb-5">
    <div class="container p-3 mb-2">ADMIN FOOTER</div>
  </footer> -->
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import headerLine from '@/assets/icons/svg/header_line.svg';

export default {
  name: 'AdminLayout',
  components: {},
  data() {
    return {
      title: '後台頁面',
      headerLine
    };
  },
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
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${adminTokenCookie}`;
      this.adminCheck(adminIdCookie);
    }
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
      document.cookie = `siteToken=0; expires=${new Date('2000/1/1 12:00')}; path=/`;
      document.cookie = `userId=0; expires=${new Date('2000/1/1 12:00')}; path=/`;

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
.header-line {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
}
</style>
