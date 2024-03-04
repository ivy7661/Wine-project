<template>
  <div ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="selectProductModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="selectProductModalLabel" class="modal-title">
            <span>推薦酒品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div class="mb-3">
                IMAGE
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
  props: ['tempProducts'],
  data() {
    return {
      modalProduct: null
    };
  },
  methods: {
    openModal() {
      this.modalProduct.show();
    },
    closeModal() {
      this.modalProduct.hide();
    }
  },
  mounted() {
    this.modalProduct = new Modal(this.$refs.productModal);
  }
};
</script>
