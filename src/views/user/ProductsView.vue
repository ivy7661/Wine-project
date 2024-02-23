<template>
  <div>
    <div class="bg-products">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <div v-for="productTitle in productsContent" :key="productTitle.title">
              <div v-if="selectedRegion === productTitle.title">
                <h2 class="pb-5">法國五大產區 - {{ productTitle.title }}</h2>
                <p>{{ productTitle.content }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex flex-column justify-content-between">
            <div class="searchArea">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="請輸入關鍵字" />
            </div>
            <div class="filterBox">
              <select
                id="wineRegion"
                name="wineRegion"
                class="mb-3"
                v-model="selectedRegion"
                @change="updateContent(selectedRegion)"
              >
                <option value="" disabled selected hidden >產區: 請選擇產區</option>
                <option value="波爾多">波爾多</option>
                <option value="布根地">布根地</option>
                <option value="香檳">香檳</option>
                <option value="羅亞爾河谷">羅亞爾河谷</option>
                <option value="薄酒萊">薄酒萊</option>
                <option value="熱賣酒品">熱賣酒品</option>
              </select>
              <div class="filterBtn d-flex justify-content-between">
                <a type="button" class="btn btn-primary btn-lg px-4 py-2" @click="sortBy('price')">
                  價格 <i :class="ascendingOrderPrice ? 'bi bi-arrow-down' : 'bi bi-arrow-up'"></i>
                </a>
                <a type="button" class="btn btn-primary btn-lg px-4 py-2 me-0" @click="sortBy('star')">
                  評價 <i :class="ascendingOrderStar ? 'bi bi-arrow-down' : 'bi bi-arrow-up'"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      {{ cart }}
      <img src="../../../images/footerContainer.png" class="w-100 mt-3 mb-5" />
      <div class="productList pb-5 align-items-stretch">
        <div class="row mb-3 gy-3">
          <div class="col-12 col-md-4" v-for="(product, key) in sortedProducts" :key="key">
            <div class="card">
              <div class="row">
                <div class="col-4">
                  <img
                    :src="`../../../images/wine images/${product.image}.jpg`"
                    class="card-img-top h-100"
                    :alt="product.title"
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <div class="d-flex mb-1 justify-content-between">
                      <span class="badge bg-danger mb-2" v-if="product.is_hot">熱門推薦</span>
                      <div class="d-flex gap-1">
                        <i
                          class="bi bi-star-fill text-warning"
                          v-for="star in product.star"
                          :key="star"
                        ></i>
                      </div>
                    </div>
                    <h5 class="card-title">{{ product.chineseName }}</h5>
                    <p class="card-text text-danger fw-bold">$ {{ product.price }}</p>
                    <a href="#" class="btn btn-primary w-100" @click="addToCart(product)">加入購物車</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'UserProductsView',
  data() {
    return {
      products: [],
      selectedRegion: '熱賣酒品',
      productsContent: '',
      currentSort: '',
      selectedRegionProducts: [],
      cart: [],
      ascendingOrderPrice: true,
      ascendingOrderStar: true
    };
  },
  methods: {
    getProductList() {
      const url = `${VITE_API_URL}/products`;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.products = res.data;
        })
        .catch(() => {
          alert('未正確取得產品資訊，請稍後再試～');
        });
    },
    updateContent(selectedRegion) {
      const url = `${VITE_API_URL}/productsContent`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res.data);
          this.productsContent = res.data;
        })
        .catch((err) => {
          console.log(err.data);
          alert('未正確取得文檔');
        });
    },
    sortBy(sortKey) {
      if (sortKey === 'price') {
        this.ascendingOrderPrice = !this.ascendingOrderPrice;
      } else if (sortKey === 'star') {
        this.ascendingOrderStar = !this.ascendingOrderStar;
      }
      this.currentSort = sortKey;
    },
    addToCart(product) {
      const url = `${VITE_API_URL}/carts`;
      const existingProductIndex = this.cart.findIndex(item => item.product_id === product.id);
      if (existingProductIndex === -1) {
        this.cart.push({
          product_id: product.id,
          chineseName: product.chineseName,
          price: product.price,
          qty: 1
        });
      } else {
        this.cart[existingProductIndex].qty += 1;
      }
      axios.post(url, this.cart)
        .then((res) => {
          console.log(res.data);
        });
    }
  },
  computed: {
    sortedProducts() {
      return this.selectedRegionProducts.slice().sort((a, b) => {
        if (this.currentSort === 'price') {
          return this.ascendingOrderPrice ? a.price - b.price : b.price - a.price;
        } else if (this.currentSort === 'star') {
          return this.ascendingOrderStar ? a.star - b.star : b.star - a.star;
        }
        return 0;
      });
    }
  },
  watch: {
    selectedRegion(newRegion) {
      this.updateContent(newRegion);
      if (newRegion === '熱賣酒品') {
      // 根据 is_hot 过滤热卖酒品
        this.selectedRegionProducts = this.products.filter(product => product.is_hot === 1);
      } else {
      // 根据地区过滤其他情况
        this.selectedRegionProducts = this.products.filter(product => product.place === newRegion);
      }
    }
  },
  mounted() {
    this.getProductList();
    this.updateContent();
  }
};
</script>

<style lang="scss" scoped>
.bg-products {
  padding-top: 50px;
}
.btn-primary:hover {
  filter: brightness(150%);
}
.searchArea {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  i {
    margin-right: 5px;
  }
  input {
    border: none;
    outline: none;
    flex: 1;
  }
}
.filterBox {
  margin-top: 10px;
}

.filterBox select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.filterBtn button {
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.filterBtn button:hover {
  background-color: #f0f0f0;
}
</style>
