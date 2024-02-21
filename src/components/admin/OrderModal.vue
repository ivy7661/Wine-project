<template>
  <div
    id="modalOrder"
    ref="modalOrder"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" style="width: 900px">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="orderModalLabel" class="modal-title">
            <span>訂單內容</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div>
              <h3 class="col-md-2">訂單資訊</h3>
              <div class="row">
                <div class="col-md-2">
                  <label for="orderId" class="form-label">訂單編號</label>
                  <input
                    id="orderId"
                    v-model="editOrder.id"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="col-md-3">
                  <label for="orderStatus" class="form-label">訂單狀態</label>
                  <select id="orderStatus" v-model="editOrder.orderStatus" class="form-select">
                    <option value="">請選擇訂單狀態</option>
                    <option value="訂單已成立">訂單已成立</option>
                    <option value="配送中">配送中</option>
                    <option value="訂單已完成">訂單已完成</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label class="form-check-label">帳款狀態</label>
                  <div class="form-check mt-2">
                    <label class="form-check-label" for="is_paid" style="font-size: 16px"
                      >已付款</label
                    >
                    <input
                      id="is_paid"
                      v-model="editOrder.is_paid"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      style="height: 18px; width: 18px"
                    />
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <h3>會員資訊</h3>
                <div class="mb-3 col-md-2">
                  <label for="userId" class="form-label">會員編號</label>
                  <input
                    id="userId"
                    v-model="editOrder.user.userId"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-2">
                  <label for="name" class="form-label">名稱</label>
                  <input
                    id="name"
                    v-model="editOrder.user.name"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-2">
                  <label for="phone" class="form-label">電話</label>
                  <input
                    id="phone"
                    v-model="editOrder.user.phone"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-3">
                  <label for="email" class="form-label">電子信箱</label>
                  <input
                    id="email"
                    v-model="editOrder.user.email"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>
              </div>
              <div class="mb-3 col-md-8">
                <label for="address" class="form-label">寄送地址</label>
                <input
                  id="address"
                  v-model="editOrder.user.address"
                  type="text"
                  class="form-control"
                  readonly
                />
              </div>
              <div class="row mt-5">
                <h3>訂購商品</h3>
                <div class="px-3">
                  <table class="table align-middle table-sm" style="width: 800px">
                    <thead class="table-light">
                      <tr>
                        <td>商品編號</td>
                        <td>商品名稱</td>
                        <td class="text-end">商品數量</td>
                        <td class="text-end">小計</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in editOrder.cart" :key="item.product_id">
                        <td>{{ item.product_id }}</td>
                        <td>{{ item.chineseName }}</td>
                        <td class="text-end">{{ item.qty }}</td>
                        <td class="text-end">{{ item.price * item.qty }}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="3" class="text-end">總計</td>
                        <td class="text-end">{{ this.sum }}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  props: ['tempOrder', 'updateOrder'],
  data() {
    return {
      modalOrder: null,
      editOrder: {
        user: {},
        cart: [{}]
      },
      sum: null
    };
  },
  methods: {
    openModal() {
      this.modalOrder.show();
    },
    closeModal() {
      this.modalOrder.hide();
    },
    calculate() {
      let total = 0;
      this.editOrder.cart.forEach((item) => {
        total += item.qty * item.price;
      });
      this.sum = total;
    }
  },
  mounted() {
    this.modalOrder = new Modal(this.$refs.modalOrder);
  },
  watch: {
    tempOrder() {
      this.editOrder = this.tempOrder;
      this.calculate();
    }
  }
};
</script>

<style lang="scss" scoped></style>
