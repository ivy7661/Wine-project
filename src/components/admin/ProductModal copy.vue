<template>
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">圖片</label>
                <input
                  id="image"
                  v-model="editProduct.image"
                  type="text"
                  class="form-control mb-2"
                  placeholder="請輸入圖片名稱"
                />
                <div v-if="editProduct.image">
                  <img
                    class="img-fluid"
                    :src="$filters.imgPath(`/images/wine_images/${editProduct.image}.jpg`)"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">產品名稱</label>
                <VeeField
                  id="title"
                  v-model="editProduct.chineseName"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['產品名稱'] }"
                  placeholder="請輸入產品名稱"
                  name="產品名稱"
                  rules="required"
                ></VeeField>
                <error-message name="產品名稱" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="engtitle" class="form-label">英文名稱</label>
                <VeeField
                  id="engtitle"
                  v-model="editProduct.englishName"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['英文名稱'] }"
                  placeholder="請輸入英文名稱"
                  name="英文名稱"
                  rules="required"
                ></VeeField>
                <error-message name="英文名稱" class="invalid-feedback"></error-message>
              </div>
              <div class="row">
                <div class="mb-3 col-md-4">
                  <label for="category" class="form-label">分類</label>
                  <VeeField
                    id="category"
                    v-model="editProduct.wineStyle"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['分類'] }"
                    placeholder="請輸入分類"
                    name="分類"
                    rules="required"
                  ></VeeField>
                  <error-message name="分類" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3 col-md-4">
                  <label for="place" class="form-label">產區</label>
                  <input
                    id="place"
                    v-model="editProduct.place"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產區"
                  />
                </div>
                <div class="mb-3 col-md-4">
                  <label for="price" class="form-label">售價</label>
                  <VeeField
                    id="price"
                    v-model.number="editProduct.price"
                    type="number"
                    class="form-control"
                    :class="{ 'is-invalid': errors['售價'] }"
                    placeholder="請輸入售價"
                    name="售價"
                    rules="required|min_value:1"
                  ></VeeField>
                  <error-message name="售價" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="village" class="form-label">酒莊</label>
                  <input
                    id="village"
                    v-model="editProduct.village"
                    type="text"
                    class="form-control"
                    placeholder="請輸入酒莊"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="grape" class="form-label">葡萄品種</label>
                  <input
                    id="grape"
                    v-model="editProduct.grape"
                    class="form-control"
                    placeholder="請輸入葡萄品種"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="mb-3 col-md-4">
                  <label for="flavor" class="form-label">風味</label>
                  <input
                    id="flavor"
                    v-model="editProduct.flavor"
                    type="text"
                    class="form-control"
                    placeholder="請輸入風味"
                  />
                </div>
                <div class="mb-3 col-md-8">
                  <label for="food" class="form-label">搭餐</label>
                  <input
                    id="food"
                    v-model="editProduct.food"
                    type="text"
                    class="form-control"
                    placeholder="請輸入搭餐"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3">
                  <label for="tannin" class="form-label">單寧</label>
                  <input
                    id="tannin"
                    v-model="editProduct.taste['tannin']"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單寧"
                  />
                </div>
                <div class="col-md-3">
                  <label for="body" class="form-label">酒體</label>
                  <input
                    id="body"
                    v-model="editProduct.taste.body"
                    type="text"
                    class="form-control"
                    placeholder="請輸入酒體"
                  />
                </div>
                <div class="col-md-3">
                  <label for="acidity" class="form-label">酸度</label>
                  <input
                    id="acidity"
                    v-model="editProduct.taste.acidity"
                    class="form-control"
                    placeholder="請輸入酸度"
                  />
                </div>
                <div class="col-md-3">
                  <label for="sweet" class="form-label">甜度</label>
                  <input
                    id="sweet"
                    v-model="editProduct.taste.sweet"
                    class="form-control"
                    placeholder="請輸入甜度"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3">
                  <label for="num" class="form-label">數量</label>
                  <VeeField
                    id="num"
                    v-model.number="editProduct.num"
                    type="number"
                    class="form-control"
                    :class="{ 'is-invalid': errors['數量'] }"
                    placeholder="請輸入數量"
                    name="數量"
                    rules="required|min_value:1"
                  ></VeeField>
                  <error-message name="數量" class="invalid-feedback"></error-message>
                </div>
                <div class="col-md-3">
                  <label for="star" class="form-label">評分</label>
                  <VeeField
                    id="star"
                    v-model.number="editProduct.star"
                    type="number"
                    class="form-control"
                    :class="{ 'is-invalid': errors['評分'] }"
                    placeholder="請輸入評分"
                    name="評分"
                    rules="required|min_value:1|max_value:5"
                  ></VeeField>
                  <error-message name="評分" class="invalid-feedback"></error-message>
                </div>
                <div class="col-md-3 mt-5 mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="editProduct.is_hot"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否熱銷</label>
                  </div>
                </div>
                <div class="col-md-3 mt-5 mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="editProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="submit" class="btn btn-primary">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  props: ['tempProduct', 'updateProduct', 'isNew'],
  data() {
    return {
      modalProduct: null,
      editProduct: {
        image: '',
        flavor: [],
        taste: {
          tannin: '',
          body: '',
          acidity: '',
          sweet: ''
        }
      }
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
  },
  watch: {
    tempProduct() {
      this.editProduct = this.tempProduct;
    }
  }
};
</script>
