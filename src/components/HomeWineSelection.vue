<template>
  <div class="container-lg mt-5 mb-5">
    <div class="row justify-content-between">
      <div class="hot-container col-md-12 col-lg-6">
        <div class="info">
          <div class="title d-flex justify-content-between align-items-center mb-3">
            <div>
              <img src="/images/hot_icon.svg" class="mb-2 me-1" alt="hot" />
              <h5 class="d-inline-block text-primary">熱賣商品</h5>
            </div>
            <div id="hot_pagination" class="swiper-pagination homeswiper-pagination"></div>
          </div>

          <swiper :pagination="{ el: '#hot_pagination' }" @swiper="onSwiper" :modules="[Pagination]" class="mySwiper">
            <template v-for="item in products" :key="item.id">
              <swiper-slide>
                <div class="region-card card bg-white">
                  <div>
                    <div class="card-body px-0">
                      <div class="region-card_head d-flex">
                        <div class="image-wine">
                          <img :src="`/images/wine_images/${item.image}.jpg`" alt="wine">
                        </div>
                        <img class="image-switch" src="/images/switch.png" alt="wine">
                        <div class="info single-ellipsis">
                          <h5 class="text-black mt-2">{{ item.chineseName }}</h5>
                          <h6 class="card-subtitle mt-2 single-ellipsis">{{ item.englishName }}</h6>

                          <div class="price-block d-flex justify-content-between align-items-center">
                            <h5 class="price text-primary">NT$ {{ $filters.currency(item.price) }}</h5>
                            <button type="button" class="btn btn-primary me-0" :disabled="!getUser?.id"
                              @click="addToCart(item)">
                              <span>立即購買</span> <i class="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
        </div>

        <div class="text-center vertical-line">
          <img :src="verticalLine" alt="vertical Line">
        </div>
      </div>

      <div class="select-container col-md-12 col-lg-6 d-flex justify-content-end">
        <div class="info">
          <div class="title d-flex justify-content-between align-items-center mb-3">
            <div>
              <img src="/images/wine_icon.svg" class="mb-2 me-1" alt="hot" />
              <h5 class="d-inline-block text-primary">引導選酒區</h5>
            </div>
            <button type="button" class="btn btn-primary btn-next">下一步</button>
          </div>

          <swiper @swiper="onSwiperSelect" :allowTouchMove="false" :allowSlidePrev="false" class="mySwiper">

            <template v-for="item in selectWineTastingData" :key="item.id">
              <swiper-slide>
                <div class="container">
                  <div class="row justify-content-between">

                    <div class="" :class="[item.options.length >= 3 ? 'col-4' : 'col-6 g-0']"
                      v-for="selectItem in item.options" :key="`child-${selectItem.id}`">
                      <div class="card-select" @click="onSelectChange(selectItem)">
                        <img :src="selectItem.image" alt="wine">
                        <h5>
                          {{ selectItem.name }}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/pagination';

import axios from 'axios';

import { storeToRefs } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import { ref, onMounted } from 'vue';

import verticalLine from '@/assets/icons/svg/vertical_line.svg';

import userStore from '@/stores/user';

const userData = userStore();

// 變數
const { getUser } = storeToRefs(userData);
const swiperModule = ref(null);
const swiperSelectModule = ref(null);
const products = ref([]);
const selectWineTastingData = [
  {
    id: 0,
    options: [
      {
        name: '純品酒',
        image: '/images/select_wine1.png',
        next: 1
      }, {
        name: '搭配餐酒',
        image: '/images/select_wine2.png',
        next: 0
      }
    ]
  },
  {
    id: 1,
    options: [
      {
        name: '偏甜',
        image: '/images/select_wine1.png',
        next: 2
      }, {
        name: '偏酸',
        image: '/images/select_wine1.png',
        next: 3
      }, {
        name: '偏乾',
        image: '/images/select_wine1.png',
        next: 3
      }
    ]
  },
  {
    id: 2,
    options: [
      {
        name: '氣泡',
        image: '/images/select_wine1.png',
        next: 9
      }, {
        name: '無氣泡',
        image: '/images/select_wine1.png',
        next: 9
      }
    ]
  },
  {
    id: 3,
    options: [
      {
        name: '飽滿',
        image: '/images/select_wine1.png',
        next: 2
      }, {
        name: '輕盈',
        image: '/images/select_wine1.png',
        next: 2
      }
    ]
  },
  {
    id: 9,
    options: [
      {
        name: '紅葡萄酒',
        image: '/images/select_wine1.png',
        next: 0
      }, {
        name: '白葡萄酒',
        image: '/images/select_wine1.png',
        next: 0
      }
    ]
  }
];

// methods
const getProductList = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/products?is_hot=1`)
    .then((res) => {
      console.log(res.data);
      products.value = res.data.slice(0, 3);
      console.log('getProductList', products.value);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const onSwiper = (swiper) => {
  swiperModule.value = swiper;
  swiperModule.value.slideReset();
  swiperModule.value.slideTo(0);
};

const onSwiperSelect = (swiper) => {
  swiperSelectModule.value = swiper;
  swiperSelectModule.value.slideReset();
  swiperSelectModule.value.slideTo(0);
};

const onSelectChange = (data) => {
  console.log(data);
  swiperSelectModule.value.slideNext();
};

onMounted(() => {
  getProductList();
});
</script>

<style lang="scss" scoped>
.title {
  h5 {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: left;
    margin: 0;
  }

  img {
    margin-bottom: 1px;
  }

  .btn-next {
    width: 80px;
    height: 37px;
    padding: 8px 16px 8px 16px;
    background: #4D403C1A;
    border-radius: 100px;
    border: #4D403C1A;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.03em;
    text-align: center;
    color: #4D403C4D;

  }

  .homeswiper-pagination {
    width: 60px;
  }
}

.hot-container {
  position: relative;

  .info {
    width: 90%;
  }

  .vertical-line {
    position: absolute;
    top: 0;
    right: 0%;
  }
}

.select-container {
  .info {
    width: 90%;
  }

  .card-select {
    height: 230px;
    padding: 20px 20px 16px 20px;
    border-radius: 24px;
    border: 1px;
    background: #FFFBF5;
    box-shadow: 0px 2px 8px 0px #E7D8CA;
    cursor: pointer;

    &:hover {
      background-color: #E7D8CA;
    }

    h5 {
      font-size: 20px;
      font-weight: 350;
      line-height: 30px;
      letter-spacing: 0.03em;
      text-align: center;
      margin: 6px;
    }

    img {
      width: 100%;
      height: 148px;
      object-fit: contain;
    }
  }

  .col-6 {
    width: 49%;
  }
}

.region-card {
  height: 230px;
  padding: 32px 24px 24px 24px;
  border-radius: 24px;
  border: 1px;
  background-color: #E7D8CA;

  .info {
    width: 100%;
  }

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

    .price-block {
      margin-top: 20px;

      h5 {
        margin: 0;
      }

      .price {
        font-family: Noto Serif TC;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.05em;
        text-align: left;
      }

      .btn {
        width: 134px;
        height: 44px;
        padding: 5px 15px 5px 15px;
        border-radius: 100px;
      }
    }
  }
}
</style>
