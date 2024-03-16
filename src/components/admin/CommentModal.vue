<template>
  <div
    id="commentModal"
    ref="commentModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="commentModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="commentModalLabel" class="modal-title">
            <span>用戶評論</span>
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
              <div class="row">
                <div class="mb-3 col-md-2">
                  <label for="commentId" class="form-label">評論編號</label>
                  <input
                    id="commentId"
                    v-model="editComment.id"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-2">
                  <label for="userId" class="form-label">會員編號</label>
                  <input
                    id="userId"
                    v-model="editComment.userId"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-2">
                  <label for="productId" class="form-label">產品編號</label>
                  <input
                    id="productId"
                    v-model="editComment.productId"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="comment" class="form-label">評論內容</label>
                <textarea
                  id="comment"
                  v-model="editComment.comment"
                  type="text"
                  class="form-control"
                  style="height: 200px"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  props: ['tempComment'],
  data() {
    return {
      modalComment: null,
      editComment: {}
    };
  },
  methods: {
    openModal() {
      this.modalComment.show();
    },
    closeModal() {
      this.modalComment.hide();
    }
  },
  mounted() {
    this.modalComment = new Modal(this.$refs.commentModal);
  },
  watch: {
    tempComment() {
      this.editComment = this.tempComment;
    }
  }
};
</script>
