<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-6">
        <strong class="d-inline-block mb-2 text-primary">熱賣商品</strong>
        <swiper-container class="mySwiper" pagination="true">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
        </swiper-container>
        <div class="container">
      <img src="../../../images/footerContainer.png" class="w-100 mt-3 mb-5" />
      <div class="productList pb-5 align-items-stretch">
        <div class="row mb-3 gy-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="(product, key) in sortedProducts" :key="key">
            <div class="card h-100">
                <div class="row h-100">
                <div class="col-4">
                  <a href="#"><i class="bi bi-heart position-absolute top-5 start-5"></i></a>
                  <a href="#" @click="seeProduct(product.id)">
                    <img
                      :src="`../../../images/wine images/${product.image}.jpg`"
                      class="card-img-top h-100"
                      :alt="product.chineseName"
                    />
                  </a>
                </div>
                <div class="col-8">
                  <div class="card-body d-flex flex-column h-100">
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
                    <a href="#" @click="seeProduct(product.id)">
                      <h5 class="card-title flex-grow-1 flex-fill">{{ product.chineseName }}</h5>
                    </a>
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
      <div class="col-6">
        <div class="d-flex justify-content-between">
          <strong class="d-inline-block mb-2 text-primary">引導選酒區</strong>
          <div class="d-flex btn btn-secondary">進入選擇視窗</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card flex-md-row mb-4 shadow-sm h-md-250">
          <img class="img-fit object-fit" src="/images/lead_wine/純品酒.webp" alt="selectwine" />
          <p>純品酒</p>
          <div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card pic flex-md-row mb-4 shadow-sm h-md-250">
            <img class="img-fit2 object-fit"  src="/images/lead_wine/餐酒搭配.webp" alt="selectwine" />
            <p>餐酒搭配</p>
            <div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div id="processmodal" ref="processModal">
        <h1>引導選酒</h1>
        <p id="user-selections">{{ userSelections }}</p>
        <div>
          <div id="options">
            <button v-for="(option, index) in currentQuestion.options" :key="index" @click="selectOption(option)">
              {{ option }}
            </button>
          </div>
          <div id="user-selections">
            您的选择： {{ userSelections.join(" => ") }}
          </div>
        </div>
        <div id="question-container">{{ currentQuestion.question }}</div>
        <div id="options-container"></div>
        <div id="filtered-products">{{ filteredProducts }}</div>
      </div>
    </div> -->
  <div class="container mt-3 d-flex justify-content-between">
    <div class="row">
      <!-- Product 1 -->
      <div class="col-md-6">
        <strong class="d-inline-block mb-2 text-primary">
          <h3>熱賣商品</h3>
        </strong>
        <div class="productList pb-5 align-items-stretch">
          <div class="row mb-3 gy-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-300">
                <div class="row h-300">
                  <div class="col-4">
                    <a href="#"><i class="bi bi-heart position-absolute top-5 start-5"></i></a>
                    <a href="#">
                      <img src="/images/wine images/wine1.jpg" class="object-fit w-100 h-100"/>
                    </a>
                  </div>
                  <div class="col-8">
                    <div class="card-body d-flex flex-column h-100">
                      <div class="d-flex mb-1 justify-content-between">
                        <span class="badge bg-danger mb-2">熱門推薦</span>
                        <div class="d-flex gap-1">
                          <i class="bi bi-star-fill text-warning"></i>
                        </div>
                      </div>
                      <a href="#">
                        <h5 class="card-title flex-grow-1 flex-fill">開心妞香檳.特級陳釀不甜香檳</h5>
                      </a>
                      <p class="card-text text-danger fw-bold">$1275</p>
                      <a href="#" class="btn btn-primary w-100">加入購物車</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="col-md-6">
      <strong class="d-inline-block mb-4 text-primary">
        <h3>引導選酒區</h3>
      </strong>
      <div class="row">
        <div class="col-6 card mb-4 radius d-flex justify-content-center">
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="openModal">
            <img src="/images/lead_wine/純品酒.webp" class="object-fit p-5" style="width: 300px;">
          </button>
          <div class="card-body">
            <h3 class="card-text text-center pb-3">純品酒</h3>
          </div>
        </div>
        <div class="col-6 card mb-4 radius">
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="openModal">
            <img src="/images/lead_wine/餐酒搭配.webp" class="object-fit p-5" style="width: 300px;">
          </button>
          <div class="card-body">
            <h3 class="card-text text-center pb-3">餐酒搭配</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div>
    <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="openModal">
      SHOW MODAL
    </button>
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <strong class="d-inline-block mb-2 text-primary">引導選酒區</strong>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <p id="user-selections">{{ userSelections }}</p>
              <div>
                <div id="options">
                  <button v-for="(option, index) in currentQuestion.options" :key="index" @click="selectOption(option)">
                    {{ option }}
                  </button>
                </div>
                <div id="user-selections">
                  您的选择： {{ userSelections.join(" => ") }}
                </div>
              </div>
              <div id="question-container">{{ currentQuestion.question }}</div>
              <div id="options-container"></div>
              <div id="filtered-products">{{ filteredProducts }}</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                  取消
                </button>
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
import { Modal } from 'bootstrap';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'HomeWineSelection',
  data() {
    return {
      productModal: null,
      showProcessModal: false,
      currentQuestionId: '1',
      userSelections: [],
      currentQuestion: {},
      products: [], // You need to define your products array here
      questions: [],
      selectedRegionProducts: []
    };
  },
  methods: {
    openModal() {
      this.productModal.show();
    },
    closeModal() {
      this.productModal.hide();
    },
    getNextQuestion(selectedOption) {
      const url = `${VITE_API_URL}/questions`;
      axios.get(url).then((res) => {
        console.log(res.data);
        this.questions = res.data;
        const currentQuestion = this.questions.find(question => question.id === this.currentQuestionId);
        if (!currentQuestion || !currentQuestion.next) {
          return null;
        }
        const nextQuestionId = currentQuestion.next[selectedOption];
        return nextQuestionId;
      });
    },
    displayUserSelections() {
      return '您的选择：' + this.userSelections.join(' => ');
    },
    selectOption(option) {
      const nextQuestionId = this.getNextQuestion(option);
      if (nextQuestionId) {
        this.userSelections.push(option); // Store user selection
        this.currentQuestionId = nextQuestionId;
        this.displayQuestionAndOptions();
      } else {
        const result = this.filterProducts(this.products, this.userSelections);
        console.log(result);
      }
    },
    displayQuestionAndOptions() {
      const currentQuestion = this.questions.find(question => question.id === this.currentQuestionId);
      if (!currentQuestion) {
        return;
      }
      const options = currentQuestion.options;
      const optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = ''; // Clear previous options
      options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', (e) => {
          this.selectOption(option);
        });
        optionsContainer.appendChild(button);
      });
    },
    filterProducts(products, selections) {
      let filteredProducts = products.filter(product => {
        // Filter based on taste preference
        if (selections.includes('偏酸')) {
          return parseInt(product.taste.acidity, 10) > 40;
        }
        if (selections.includes('偏乾')) {
          return parseInt(product.taste.sweet, 10) < 40;
        }
        if (selections.includes('偏甜')) {
          return parseInt(product.taste.sweet, 10) > parseInt(product.taste.acidity, 10);
        }
        return true;
      });

      // If user prefers dryness, skip body preference and directly filter based on bubble preference
      if (selections.includes('偏乾')) {
        filteredProducts = filteredProducts.filter(product => {
          if (selections.includes('氣泡')) {
            return product.wineStyle.includes('氣泡');
          }
          if (selections.includes('無氣泡')) {
            return !product.wineStyle.includes('氣泡');
          }
          return true;
        });
      } else {
        // If user prefers sweetness, continue with body preference
        filteredProducts = filteredProducts.filter(product => {
          if (selections.includes('飽滿')) {
            return parseInt(product.taste.body, 10) > 40;
          }
          if (selections.includes('輕盈')) {
            return parseInt(product.taste.body, 10) <= 40;
          }
          return true;
        }).filter(product => {
          if (selections.includes('氣泡')) {
            return product.wineStyle.includes('氣泡');
          }
          if (selections.includes('無氣泡')) {
            return !product.wineStyle.includes('氣泡');
          }
          return true;
        });
      }

      // Filter based on color preference
      filteredProducts = filteredProducts.filter(product => {
        if (selections.includes('紅葡萄酒')) {
          return product.wineStyle.includes('紅');
        }
        if (selections.includes('白葡萄酒')) {
          return product.wineStyle.includes('白');
        }
        return true;
      });

      return filteredProducts.map(product => product.chineseName);
    },
    seeProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
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
  mounted() {
    this.displayQuestionAndOptions();
    this.productModal = new Modal(this.$refs.productModal);
    this.getNextQuestion();
  }
};
</script>

<style lang="scss" scoped>
.radius {
  border-radius: 10%;
}
.btn-primary:hover {
  filter: brightness(150%);
}
.bi-heart:hover {
  color: red;
  transform: scale(1.5);
  transition: color 0.3s ease, transform 0.3s ease;
}
</style>
