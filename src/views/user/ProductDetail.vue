<template>
  <div>
    <div class="container">
      <div class="productDisplay pt-5 pb-5">
        <div class="row justify-content-between mb-4">
          <div
            class="col-12 col-md-4 product-image-block d-flex flex-column align-items-center justify-content-between"
          >
            <div class="position-relative">
              <img
                :src="`/images/wine_images/${selectedProduct.image}.jpg`"
                class="product-image"
                :alt="selectedProduct.chineseName"
              />
              <a href="#"><i class="bi bi-heart position-absolute top-5 start-10"></i></a>
            </div>
            <ul class="socialFriends d-flex">
              <li>
                <a href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-line"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <span class="badge bg-danger fs-6" v-if="selectedProduct.is_hot">熱賣推薦</span>
                <div class="text-warning d-flex gap-1 mb-1">
                  <i
                    class="bi bi-star-fill text-warning"
                    v-for="star in selectedProduct.star"
                    :key="star"
                  ></i>
                </div>
              </div>
              <h3 class="card-title mb-2">{{ selectedProduct.chineseName }}</h3>
              <div class="d-flex justify-content-between mb-3">
                <p class="card-text">750ml</p>
                <p class="card-text fs-4 text-danger fw-bold">$ {{ selectedProduct.price }}</p>
              </div>
              <div>
                <h5>風味分類</h5>
                <div class="row">
                  <div
                    class="col-2 d-flex flex-column align-items-center"
                    v-for="(flavor, key) in selectedProduct.flavor"
                    :key="key"
                  >
                    <img
                      :src="`/images/fruit_images/${flavor}.jpg`"
                      :alt="flavor"
                      class="fruit-image rounded-circle mb-2"
                    />
                    <p>{{ flavor }}</p>
                  </div>
                </div>
              </div>
              <div>
                <h5>餐酒搭配選擇</h5>
                <div class="row">
                  <div
                    class="col-4 d-flex flex-column align-items-center"
                    v-for="(food, key) in selectedProduct.food"
                    :key="key"
                  >
                    <img
                      src="/images/wine with food.jpg"
                      alt="grape"
                      class="w-100 rounded-pill mb-2"
                    />
                    <p>{{ food }}</p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                class="btn btn-primary w-100 py-2 mt-3"
                @click="addToCart(selectedProduct)"
                >加入購物車</a
              >
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-4">
          <div class="col-12 col-md-6 mt-4">
            <h4 class="mb-4">葡萄酒品味</h4>
            <p class="mb-1">單寧</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.tannin : '0%' }"
              ></div>
            </div>
            <p class="mb-1">酸度</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.acidity : '0%' }"
              ></div>
            </div>
            <p class="mb-1">甜度</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.sweet : '0%' }"
              ></div>
            </div>
            <p class="mb-1">酒體</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped"
                :style="{ width: selectedProduct.taste ? selectedProduct.taste.body : '0%' }"
              ></div>
            </div>
          </div>
          <div class="col-12 col-md-5 mt-4">
            <h4 class="mb-4">產品介紹</h4>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <th>酒種</th>
                  <td>{{ selectedProduct.wineStyle }}</td>
                </tr>
                <tr>
                  <th>產地</th>
                  <td>{{ selectedProduct.place }}</td>
                </tr>
                <tr>
                  <th>出產酒莊</th>
                  <td>{{ selectedProduct.village }}</td>
                </tr>
                <tr>
                  <th>葡萄品種</th>
                  <td>
                    <span v-for="(grape, key) in selectedProduct.grape" :key="key">
                      {{ grape }}
                      <span v-if="key < selectedProduct.grape.length - 1">, </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4 class="mb-4">好評推推推</h4>
            <div class="row d-flex align-items-stretch gy-3">
              <div class="col-6 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">
                      卡師伯： 我是第一次在網上購買酒類，配晚餐挺搭，會再購買!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">Steve: 經過醒酒後果香濃郁，比較一下價格實在物超所值！</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">小明： 普普通通，不推薦.</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="card h-100 pb-3">
                  <div class="card-body px-4">
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                      <i class="bi bi-star-fill fs-5"></i>
                    </div>
                    <h5 class="card-title mb-3">{{ selectedProduct.chineseName }}</h5>
                    <p class="card-text">
                      Lukka: 性價比不錯，但偏酸，不是很愛．
                      之前在這網站有買過其他推薦的紅酒都很不錯．
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="moreProduct py-5">
      <div class="container">
        <h3 class="text-white pb-5">您可能會喜歡的商品</h3>
        <div class="row gy-3">
          <div class="col-6 col-md-3" v-for="(wine, key) in similarWines" :key="key">
            <div class="card d-flex flex-column h-100">
              <a href="#" @click="seeProduct(wine.id)">
                <img
                  :src="`/images/wine_images/${wine.image}.jpg`"
                  class="card-img-top"
                  :alt="wine.chineseName"
                />
              </a>
              <div class="card-body h-100 d-flex flex-column justify-content-between">
                <div class="d-flex flex-column mb-3">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="badge bg-danger" v-if="wine.is_hot">熱賣推薦</span>
                    <div class="text-warning d-flex gap-1 mb-1">
                      <i
                        class="bi bi-star-fill text-warning"
                        v-for="star in wine.star"
                        :key="star"
                      ></i>
                    </div>
                  </div>
                  <a href="#" @click="seeProduct(wine.id)">
                    <h5 class="card-title">{{ wine.chineseName }}</h5>
                  </a>
                  <p class="card-text text-danger fw-bold">$ {{ wine.price }}</p>
                </div>
                <a href="#" class="btn btn-primary w-100">加入購物車</a>
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
  name: 'ProductDetail',
  components: {},
  data() {
    return {
      title: '產品詳情',
      products: [],
      selectedProduct: {},
      similarWines: [],
      cart: []
    };
  },
  methods: {
    getProduct() {
      const url = `${VITE_API_URL}/products`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res.data);
          this.products = res.data;
          console.log(this.selectedProduct);
          this.selectedProduct = this.products.find((item) => item.id === this.$route.params.id);
          this.findSimilarWinesByGrape(this.selectedProduct, this.products);
        })
        .catch(() => {
          alert('未正確取得產品資訊，請稍後再試～');
        });
    },
    addToCart(product) {
      const url = `${VITE_API_URL}/carts`;
      const existingProductIndex = this.cart.findIndex((item) => item.product_id === product.id);
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
      axios.post(url, this.cart).then((res) => {
        // console.log(res.data);
      });
    },
    findSimilarWinesByGrape(selectedProduct, products, numberOfSimilarWines = 4) {
      // 提取目標酒的葡萄品種
      const targetGrapes = selectedProduct.grape;
      console.log(this.selectedProduct);

      // 遍歷所有酒，找出具有相同或相似葡萄品種的其他酒
      const similarWines = products.filter((wine) => {
        // 比較葡萄品種，可以自行定義相似度標準
        return wine.grape.some((grape) => targetGrapes.includes(grape));
      });

      // 排除目標酒自身
      const filteredSimilarWines = similarWines.filter((wine) => wine.id !== selectedProduct.id);

      // 根據某種標準排序，這裡使用簡單的排序
      filteredSimilarWines.sort((a, b) => {
        // 可以根據需要調整排序標準
        return b.star - a.star;
      });
      // 選擇前幾名的酒
      const selectedWines = filteredSimilarWines.slice(0, numberOfSimilarWines);
      this.similarWines = selectedWines;
    },
    seeProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
      this.getProduct();
    }
  },
  mounted() {
    console.log('ProductDetail.vue mounted', this.$route.params.id);
    this.title = '產品詳情 - ' + this.$route.params.id;
    this.getProduct();
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
.bi-heart {
  font-size: 20px;
}
.bi-heart:hover {
  color: red;
  transform: scale(1.5);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
  transition: transform 0.3s ease-in-out;
}
.product-image:hover {
  transform: rotate(2deg);
}
.socialFriends {
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 20px;
  li {
    padding: 10px;
    background-color: #fffbf5;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #e0e0e0;
    }
    i {
      font-size: 32px;
    }
  }
}
.fruit-image {
  max-width: 100px;
  border: 2px solid #691a06;
}

.btn-primary:hover {
  background-color: #d9381e;
}
.moreProduct {
  background: linear-gradient(to left top, #f5ebd8, #ead8ab, #d4b685);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>
