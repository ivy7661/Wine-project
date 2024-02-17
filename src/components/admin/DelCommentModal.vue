<template>
  <div
    id="delCommentModal"
    ref="delCommentModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delCommentModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delCommentModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除ID
          <strong class="text-danger">{{ tempComment.id }}</strong>
          評論(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delComment">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  props: ['tempComment', 'delComment'],
  data() {
    return {
      ModalCommentDel: null
    };
  },
  methods: {
    openDelModal() {
      this.ModalCommentDel.show();
    },
    closeDelModal() {
      this.ModalCommentDel.hide();
    }
  },
  mounted() {
    this.ModalCommentDel = new Modal(this.$refs.delCommentModal);
  }
};
</script>
