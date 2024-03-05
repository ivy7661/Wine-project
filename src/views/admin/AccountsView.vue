<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">身分</th>
          <th width="120">名稱</th>
          <th width="120">電子信箱</th>
          <th width="120">刪除帳戶</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.role }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal(user)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Del-Account-Modal :temp-user="tempUser" :del-user="delUser" ref="delModal"></Del-Account-Modal>
</template>

<script>
import axios from 'axios';
import DelAccountModal from '../../components/admin/DelAccountModal.vue';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'AdminAccountsView',
  components: {
    DelAccountModal
  },
  data() {
    return {
      title: '帳戶管理',
      users: [],
      tempUser: {}
    };
  },
  mounted() {
    this.getAccounts();
  },
  methods: {
    getAccounts() {
      const url = `${VITE_API_URL}/users`;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch(() => {
          alert('取得帳戶資訊失敗');
        });
    },
    delUser() {
      const url = `${VITE_API_URL}/users/${this.tempUser.id}`;

      axios
        .delete(url)
        .then((res) => {
          alert('刪除成功');
          this.$refs.delModal.closeDelModal();
          this.getAccounts();
        })
        .catch(() => {
          alert('刪除失敗');
        });
    },
    openModal(user) {
      this.tempUser = { ...user };
      this.$refs.delModal.openDelModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>
