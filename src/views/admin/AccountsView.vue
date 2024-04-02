<template>
  <div class="row">
    <h1 class="my-3">{{ title }}</h1>
    <div class="header-line">
      <img :src="headerLine" alt="header line" />
    </div>
    <div class="row">
      <div>
        <table class="table mt-4 mx-2">
          <thead class="table-light">
            <tr>
              <th width="120">身分</th>
              <th width="120">名稱</th>
              <th width="120">電子信箱</th>
              <th width="120" class="text-center">刪除帳戶</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.role }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td class="text-center">
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal(user)">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <DelAccountModal :temp-user="tempUser" :del-user="delUser" ref="delModal" />
</template>

<script>
import axios from 'axios';
import DelAccountModal from '@/components/admin/DelAccountModal.vue';
import headerLine from '@/assets/icons/svg/header_line.svg';
import Alert from '@/utils/swal.js';

const { VITE_API_URL } = import.meta.env;

export default {
  name: 'AdminAccountsView',
  components: {
    DelAccountModal
  },
  data() {
    return {
      title: '帳戶管理',
      headerLine,
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
          this.users = res.data;
        })
        .catch(() => {
          Alert.toastTop('error', '取得帳戶資訊失敗');
        });
    },
    delUser() {
      const url = `${VITE_API_URL}/users/${this.tempUser.id}`;

      axios
        .delete(url)
        .then((res) => {
          Alert.toastTop('success', '刪除成功');
          this.$refs.delModal.closeDelModal();
          this.getAccounts();
        })
        .catch(() => {
          Alert.toastTop('error', '刪除失敗');
        });
    },
    openModal(user) {
      this.tempUser = { ...user };
      this.$refs.delModal.openDelModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.header-line {
  display: flex;
  justify-content: left;

  img {
    width: 100%;
  }
}

th,
td {
  padding: 8px 30px;
}

tr:first-child th:first-child {
  border-top-left-radius: 5px;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}

tr:first-child th:last-child {
  border-top-right-radius: 5px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}
</style>
