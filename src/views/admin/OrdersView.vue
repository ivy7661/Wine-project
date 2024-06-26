<template>
  <div class="row">
    <h1 class="my-3">{{ title }}</h1>
    <div class="header-line">
      <img :src="headerLine" alt="header line" />
    </div>
    <div class="row">
      <table class="table mt-4 mx-2">
        <thead class="table-light">
          <tr>
            <th width="120">訂單編號</th>
            <th width="120">會員編號</th>
            <th width="120">會員名稱</th>
            <th width="120">帳款狀態</th>
            <th width="150">訂單狀態</th>
            <th width="120" class="text-center">編輯訂單</th>
            <th width="120" class="text-center">刪除訂單</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.user.userId }}</td>
            <td>{{ order.user.name }}</td>
            <td>
              <span v-if="order.is_paid" class="text-success">已付款</span>
              <span v-else>未付款</span>
            </td>
            <td>
              <span v-if="order.orderStatus === '訂單已完成'" class="text-success">訂單已完成</span>
              <span v-else-if="order.orderStatus === '訂單已成立'">訂單已成立</span>
              <span v-else>配送中</span>
            </td>
            <td class="text-center">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', order)">
                編輯
              </button>
            </td>
            <td class="text-center">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', order)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <OrderModal ref="orderModal" :temp-order="tempOrder" :update-order="updateOrder" />
  <DelOrderModal ref="delOrderModal" :temp-order="tempOrder" :del-order="delOrder" />
</template>

<script>
import axios from 'axios';
import OrderModal from '@/components/admin/OrderModal.vue';
import DelOrderModal from '@/components/admin/DelOrderModal.vue';
import headerLine from '@/assets/icons/svg/header_line.svg';
import Alert from '@/utils/swal.js';

const { VITE_API_URL } = import.meta.env;
export default {
  name: 'AdminOrdersView',
  components: {
    OrderModal,
    DelOrderModal
  },
  data() {
    return {
      title: '訂單管理',
      headerLine,
      orders: [],
      tempOrder: {
        user: {},
        cart: []
      }
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      const url = `${VITE_API_URL}/orders`;
      axios
        .get(url)
        .then((res) => {
          this.orders = res.data;
        })
        .catch(() => {
          Alert.toastTop('error', '取得訂單資訊失敗');
        });
    },
    openModal(status, order) {
      if (status === 'edit') {
        this.tempOrder = { ...order };
        this.$refs.orderModal.openModal();
      } else if (status === 'delete') {
        this.tempOrder = { ...order };
        this.$refs.delOrderModal.openDelModal();
      }
    },
    updateOrder() {
      const url = `${VITE_API_URL}/orders/${this.tempOrder.id}`;
      axios
        .put(url, this.tempOrder)
        .then((res) => {
          Alert.toastTop('success', '編輯成功');
          this.getOrders();
          this.$refs.orderModal.closeModal();
        })
        .catch(() => {
          Alert.toastTop('error', '更新訂單失敗');
        });
    },
    delOrder() {
      const url = `${VITE_API_URL}/orders/${this.tempOrder.id}`;
      axios
        .delete(url)
        .then((res) => {
          this.$refs.delOrderModal.closeDelModal();
          this.getOrders();
        })
        .catch(() => {
          Alert.toastTop('error', '刪除失敗');
        });
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
