<template>
  <div class="region-container bg-accent-brown">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="title text-primary">法國特色產區</h3>
            <div>
              <label for="select-region" class="form-label region-label">選擇產區</label>
              <select id="select-region" class="form-select region text-primary" aria-label="選擇產區" v-model="selectRegion">
                <option value="1" selected>法國產區 薄酒萊</option>
                <option value="2">法國產區 波爾多</option>
              </select>
            </div>
          </div>

          <div class="region-image d-flex">
            <template v-if="selectRegion === '1'">
              <img src="/images/region2.jpg" alt="region image">
              <div class="info bg-primary d-flex flex-wrap align-content-center justify-content-center">
                <h4>薄酒萊新酒</h4>
                <p>Beaujolais Nouveau</p>
              </div>
            </template>
            <template v-if="selectRegion === '2'">
              <img src="/images/region1.jpg" alt="region image">
              <div class="info bg-primary d-flex flex-wrap align-content-center justify-content-center">
                <h4>波爾多新酒</h4>
                <p>Bordeaux Nouveau</p>
              </div>
            </template>
          </div>

          <div class="region-content text-start">
            <p class="lead">特色</p>
            <ol>
              <li>每年的11月份的第三個星期四，葡萄採收馬上被裝瓶上架</li>
              <li>主要以 Gamay 葡萄品種</li>
              <li>適合用在慶祝活動</li>
              <li>果味濃郁(草莓、覆盆子和櫻桃)、單寧低、口感輕盈</li>
              <li>試飲期一到兩年飲用</li>
            </ol>
          </div>
        </div>

        <div class="col-md-5">
          <div class="region-card card bg-white">
            <template v-for="item in getFilterWine" :key="item.id">
              <div>
                <div class="card-body px-0">
                  <div class="region-card_head d-flex">
                    <div class="image-wine">
                      <img :src="`/images/wine images/${item.image}.jpg`" alt="wine">
                    </div>
                    <img class="image-switch" src="/images/switch.png" alt="wine">
                    <div class="single-ellipsis">
                      <h5 class="text-black mt-2">{{ item.chineseName }}</h5>
                      <h6 class="card-subtitle mt-2 single-ellipsis">{{ item.englishName }}</h6>

                      <h5 class="price text-primary mt-3">NT$ {{ $filters.currency(item.price) }}</h5>
                    </div>
                  </div>
                  <div class="region-info mt-2">
                    <img src="/images/card-top-line.svg" class="line-image" alt="line">

                    <div class="taste mt-4">
                      <p class="taste-title mb-3">這款酒喝起來的味道如何？</p>

                      <div class="container-fluid taste-content px-0 mt-1">
                        <div class="row">
                          <div class="col-md-6 d-flex align-items-center mb-1">
                            <p>單寧</p>
                            <div class="progress-bar">
                              <div class="progress" :style="{ 'width': item.taste.tannin }"></div>
                            </div>
                          </div>
                          <div class="col-md-6 d-flex align-items-center mb-1">
                            <p>酸度</p>
                            <div class="progress-bar">
                              <div class="progress" :style="{ 'width': item.taste.acidity }"></div>
                            </div>
                          </div>
                          <div class="col-md-6 d-flex align-items-center mb-1">
                            <p>甜度</p>
                            <div class="progress-bar">
                              <div class="progress" :style="{ 'width': item.taste.sweet }"></div>
                            </div>
                          </div>
                          <div class="col-md-6 d-flex align-items-center mb-1">
                            <p>酒體</p>
                            <div class="progress-bar">
                              <div class="progress" :style="{ 'width': item.taste.body }"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="region-taste container-fluid px-0 my-4">
                    <div class="row">
                      <div class="col-6">
                        <p class="mb-2">風味分類</p>
                        <div class="d-flex justify-content-between">
                          <div class="icon-container" v-for="(flavor, index) in item.flavor.slice(0, 3)" :key="flavor">
                            <img :src="`/images/taste/t${index + 1}.png`" alt="Icon" class="icon mb-1">
                            <p class="icon-text text-center">{{ flavor }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <p class="mb-2">搭配餐酒</p>
                        <div class="d-flex justify-content-between">
                          <div class="icon-container" v-for="(food, index) in item.food.slice(0, 3)" :key="food">
                            <img :src="`/images/taste/f${index + 1}.png`" alt="Icon" class="icon mb-1">
                            <p class="icon-text text-center">{{ food }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="region-button d-flex justify-content-between">
                    <button type="button" class="btn btn-black me-0" data-v-afe7204c="">
                      <i class="bi bi-heart me-1" data-v-afe7204c=""></i>
                      加入收藏
                    </button>
                    <button type="button" class="btn btn-primary me-0" data-v-afe7204c="">
                      <i class="bi bi-cart3 me-1" data-v-afe7204c=""></i>
                      加入購物車
                    </button>
                  </div>

                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import 'swiper/css';

import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/vue';

import { ref, computed, onMounted } from 'vue';

// 變數
// const swiperModule = ref(null);
const selectRegion = ref('1');
const products = ref([]);

// computed
const getFilterWine = computed(() => {
  if (selectRegion.value === '2') {
    return products.value.filter((product) => product.place === '波爾多').slice(0, 3);
  }
  return products.value.filter((product) => product.place === '薄酒萊').slice(0, 3);
});

// methods
const getProductList = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/products`)
    .then((res) => {
      // console.log(res.data);
      products.value = res.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// const onSwiper = (swiper) => {
//   swiperModule.value = swiper;
// };

onMounted(() => {
  getProductList();
});
</script>

<style lang="scss" scoped>
.region-container {
  padding: 60px 0 60px 0;
}

.title {
  width: 205px;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 2px;
  text-align: left;
}

.region {
  width: 200px;
  height: 48px;
  padding: 12px 20px 12px 20px;
  border: 1px;
  border-radius: 100px;
  display: inline;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-align: left;

}

.region-label {
  font-size: 14px;
  font-weight: 400;
  color: #4D403C;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-align: left;
  margin-right: 12px;
}

.region-image {
  margin: 40px 0 40px 0;

  img {
    width: 263px;
    height: 204px;
    border-radius: 24px 0 0 24px;
  }

  .info {
    color: #FFF;
    width: 263px;
    height: 204px;
    border-radius: 0 24px 24px 0;
    box-shadow: -2px 0px 4px 0px #0000004D;
    text-align: center;

    h4 {
      line-height: 29px;
      letter-spacing: 1px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 1px;
    }
  }
}

.region-content {
  color: #4D403C;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  letter-spacing: 0.03em;

  p {
    margin: 5px;
  }

  ol {
    padding-left: 1.8rem;
  }
}

.region-card {
  padding: 32px 24px 24px 24px;
  border-radius: 24px;
  border: 1px;
  background-color: #E7D8CA;

  .region-card_head {
    img {
      margin-right: 20px;
      width: 108px;
      height: 108px;
      object-fit: contain;
    }

    h5 {
      line-height: 24px;
      letter-spacing: 0.05em;
      text-align: left;
    }

    h6 {
      color: #4D403CB2;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0.03em;
      text-align: left;
    }

    .image-wine {
      width: 108px;
    }

    .image-switch {
      position: absolute;
      width: 76px;
      left: 40px;
    }

    .price {
      font-family: Noto Serif TC;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }

  .region-info {
    .line-image {
      width: 100%;
    }

    .taste {
      .taste-title {
        color: #4D403CB2;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.03em;
        text-align: left;
      }

      .taste-content {
        p {
          width: 50px;
          margin: 0;
          color: #4D403C;
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
          letter-spacing: 0.03em;
          text-align: left;
        }
      }

      .progress-bar {
        width: 100%;
        height: 12px;
        background-color: #E4E0DE;
        border-radius: 100px;
      }

      .progress {
        height: 100%;
        background-color: #752525;
        border-radius: 100px;
      }
    }
  }

  .region-taste {
    p {
      color: #4D403CB2;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0.03em;
      text-align: left;

    }

    .icon-container {
      text-align: center;
    }

    .icon {
      width: 60px;
      height: 60px;
    }

    .icon-text {
      color: #4D403C;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0.03em;
    }
  }

  .region-button {
    button {
      width: 233px;
      height: 48px;
      padding: 12px 20px 12px 20px;
      border-radius: 100px;
    }
  }
}
</style>
