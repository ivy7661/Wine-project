<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">售價</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.wineStyle }}</td>
          <td>{{ item.chineseName }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <!-- <Pagination-Component :pages="pages" :get-data="getData"></Pagination-Component> -->
  </div>
  <!-- Modal -->
  <Product-Modal
    :temp-product="tempProduct"
    :update-product="updateProduct"
    :is-New="isNew"
    ref="pModal"
  ></Product-Modal>
  <!-- 刪除 -->
  <Del-Modal :temp-product="tempProduct" :del-product="delProduct" ref="delModal"></Del-Modal>
</template>

<script>
import axios from 'axios';
import ProductModal from '../../components/admin/ProductModal.vue';
import DelModal from '../../components/admin/DelModal.vue';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'AdminProductsView',
  components: {
    ProductModal,
    DelModal
  },
  data() {
    return {
      title: '商品管理',
      products: [],
      tempProduct: {
        image: '',
        flavor: [],
        taste: {
          tannin: '',
          body: '',
          acidity: '',
          sweet: ''
        }
      },
      pages: {},
      modalProduct: null,
      delModalProduct: null,
      isNew: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${VITE_API_URL}/products`;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.products = res.data;
          // this.pages = response.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    updateProduct() {
      let url = `${VITE_API_URL}/products`;
      let http = 'post';

      if (!this.isNew) {
        url = `${VITE_API_URL}/products/${this.tempProduct.id}`;
        http = 'put';
      }
      axios[http](url, this.tempProduct)
        .then((res) => {
          alert('新增/修改成功');
          this.getData();
          this.$refs.pModal.closeModal();
        })
        .catch(() => {
          alert('新增/修改失敗');
        });
    },
    openModal(status, item) {
      if (status === 'new') {
        this.tempProduct = {
          image: '',
          flavor: [],
          taste: {
            tannin: '',
            body: '',
            acidity: '',
            sweet: ''
          }
        };
        this.isNew = true;
        this.$refs.pModal.openModal();
      } else if (status === 'edit') {
        this.tempProduct = { ...item };
        // this.tempProduct.imagesUrl = [];
        this.isNew = false;
        this.$refs.pModal.openModal();
      } else if (status === 'delete') {
        this.tempProduct = { ...item };
        this.$refs.delModal.openDelModal();
      }
    },

    delProduct() {
      const url = `${VITE_API_URL}/products/${this.tempProduct.id}`;

      axios
        .delete(url)
        .then((res) => {
          alert('刪除成功');
          this.$refs.delModal.closeDelModal();
          this.getData();
        })
        .catch(() => {
          alert('刪除失敗');
        });
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    }
  }
};
</script>

<style lang="scss" scoped></style>
