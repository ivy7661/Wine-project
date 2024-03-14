<template>
  <div ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="selectProductModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="selectProductModalLabel" class="modal-title">
            <span>推薦酒品</span>
          </h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12" v-if="!isMatchCondition">
              <div class="alert alert-warning alert-title" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <span>您選擇的條件暫無適合酒款，另推薦熱門酒款給您。</span>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="product in tempProducts" :key="product.id">
              <div class="card h-100 p-2">
                <div class="row h-100">
                  <div class="col-4">
                    <a href="#" @click.prevent="addFavorite(product)">
                      <template v-if="favorites.includes(product.id)">
                        <i class="bi bi-heart-fill me-1"></i>
                      </template>

                      <template v-else>
                        <i class="bi bi-heart me-1"></i>
                      </template>
                      <!-- <i class="bi heart position-absolute top-5 start-5"
                        :class="{ 'bi-heart': !product.isFavorite, 'bi-heart-fill': product.isFavorite }"></i> -->
                    </a>
                    <a href="#" @click.prevent="seeProduct(product.id)">
                      <img :src="$filters.imgPath(`/images/wine_images/${product.image}.jpg`)" class="card-img-top"
                        :alt="product.chineseName" />
                    </a>
                  </div>
                  <div class="col-8">
                    <div class="card-body d-flex flex-column h-100 justify-content-between">
                      <div class="mb-2">
                        <div class="d-flex mb-1 justify-content-between">
                          <span class="badge bg-danger mb-2" v-if="product.is_hot">熱門推薦</span>
                          <div class="d-flex gap-1">
                            <i class="bi bi-star-fill text-warning" v-for="star in product.star" :key="star"></i>
                          </div>
                        </div>
                        <div>
                          <a href="#" class="text-black" @click.prevent="seeProduct(product.id)">
                            <h5 class="card-title flex-fill">{{ product.chineseName }}</h5>
                          </a>
                          <p class="card-text text-danger fw-bold">$ {{ product.price }}</p>
                        </div>
                      </div>
                      <a href="#" class="btn btn-primary w-100" @click.prevent="addToCart(product)">加入購物車</a>
                    </div>
                  </div>
                </div>
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
  props: ['tempProducts', 'favorites', 'isMatchCondition'],
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
    },
    seeProduct(id) {
      this.closeModal();
      setTimeout(() => {
        this.$router.push({ name: 'ProductDetail', params: { id } });
      }, 0);
    },
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
    addFavorite(product) {
      this.$emit('add-to-favorite', product);
    }
  },
  mounted() {
    this.modalProduct = new Modal(this.$refs.productModal);
  }
};
</script>

<style lang="scss" scoped>
.alert-title {
  letter-spacing: 1px;
}
</style>
