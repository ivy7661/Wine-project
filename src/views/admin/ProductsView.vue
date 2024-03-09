<template>
  <div class="row">
    <h1 class="my-3">{{ title }}</h1>
    <div class="header-line">
      <img :src="headerLine" alt="header line" />
    </div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">建立新的產品</button>
    </div>
    <div class="row">
      <table class="table mt-4 mx-2">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th width="300">產品名稱</th>
            <th width="120">售價</th>
            <th width="120" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.wineStyle }}</td>
            <td>{{ item.chineseName }}</td>
            <td>{{ item.price }}</td>
            <td class="text-center">
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
    </div>
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
import headerLine from '@/assets/icons/svg/header_line.svg';

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
      headerLine,
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
      isNew: false,
      newProduct: {}
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
        .catch(() => {
          alert('取得產品資訊失敗');
        });
    },

    updateProduct() {
      let url = `${VITE_API_URL}/products`;
      let http = 'post';

      if (!this.isNew) {
        url = `${VITE_API_URL}/products/${this.tempProduct.id}`;
        http = 'put';
      }

      // 型別轉換
      this.newProduct = JSON.parse(JSON.stringify(this.tempProduct));

      if (typeof this.newProduct.flavor === 'string') {
        this.newProduct.flavor = this.newProduct.flavor.split(',');
      }
      if (typeof this.newProduct.food === 'string') {
        this.newProduct.food = this.newProduct.food.split(',');
      }
      if (typeof this.newProduct.grape === 'string') {
        this.newProduct.grape = this.newProduct.grape.split(',');
      }

      axios[http](url, this.newProduct)
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
