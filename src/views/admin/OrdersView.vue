<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">訂單編號</th>
          <th width="120">會員ID</th>
          <th width="120">會員名稱</th>
          <th width="120">帳款狀態</th>
          <th width="150">訂單狀態</th>
          <th width="120">編輯訂單</th>
          <th width="120">刪除訂單</th>
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
          <td>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', order)"
            >
              編輯
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', order)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Order-Modal ref="orderModal" :temp-order="tempOrder" :update-order="updateOrder"></Order-Modal>
  <Del-Order-Modal
    ref="delOrderModal"
    :temp-order="tempOrder"
    :del-order="delOrder"
  ></Del-Order-Modal>
</template>

<script>
import axios from 'axios';
import OrderModal from '../../components/admin/OrderModal.vue';
import DelOrderModal from '../../components/admin/DelOrderModal.vue';
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
          console.log(res.data);
          this.orders = res.data;
        })
        .catch(() => {
          alert('取得產品資訊失敗');
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
          console.log(res.data);
          alert('新增/修改成功');
          this.getOrders();
          this.$refs.orderModal.closeModal();
        })
        .catch(() => {
          alert('更新訂單失敗');
        });
    },
    delOrder() {
      const url = `${VITE_API_URL}/orders/${this.tempOrder.id}`;
      axios
        .delete(url)
        .then((res) => {
          console.log(res.data);
          this.$refs.delOrderModal.closeDelModal();
          this.getOrders();
        })
        .catch(() => {
          alert('刪除失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
