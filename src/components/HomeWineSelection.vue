<template>
  <div class="selection-container container-lg mt-5">
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
            <template v-for="item in hotProducts" :key="item.id">
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
                          <div class="d-flex gap-1 mt-2">
                            <i class="bi bi-star-fill text-warning" v-for="star in item.star" :key="star"></i>
                          </div>

                          <div class="price-block d-flex justify-content-between align-items-center">
                            <h5 class="price text-primary">NT${{ $filters.currency(item.price) }}</h5>
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
            <button type="button" class="btn btn-primary btn-next" @click="handleCurrentSelect">
              <span v-if="currentSelect === -1">重新選擇</span>
              <span v-else>下一步</span>
            </button>
          </div>

          <swiper @swiper="onSwiperSelect" :allowTouchMove="false" class="mySwiper">

            <template v-for="item in getSelectProductData" :key="item.id">
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

    <SelectProductModal ref="selectProductModal" :tempProducts="selectProducts" :favorites="getFavorites"
      @add-to-cart="addToCart" @add-to-favorite="addToFavorite" />
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/pagination';

import axios from 'axios';

import { storeToRefs } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import { ref, computed, onMounted } from 'vue';

import SelectProductModal from '@/components/SelectProductModal.vue';
import verticalLine from '@/assets/icons/svg/vertical_line.svg';
import { getFormattedDate } from '@/utils/helpers';

import userStore from '@/stores/user';

const userData = userStore();

// 變數
const { getUser, getFavorites } = storeToRefs(userData);
const selectType = ref('taste');
const currentSelect = ref(0);
const selectProductModal = ref(null);
const swiperModule = ref(null);
const swiperSelectModule = ref(null);
const hotProducts = ref([]);
const originalProducts = ref([]);
const selectProducts = ref([]);
const selectWineTastingData = [
  {
    id: 0,
    type: ['taste', 'food'],
    options: [
      {
        name: '純品酒',
        image: '/images/select_wine1.png',
        next: 1
      },
      {
        name: '搭配餐酒',
        image: '/images/select_wine2.png',
        next: 10
      }
    ]
  },
  {
    id: 1,
    type: ['taste'],
    options: [
      {
        name: '偏甜',
        image: '/images/lead_wine/sweet.png',
        next: 2
      },
      {
        name: '偏酸',
        image: '/images/lead_wine/sour.png',
        next: 2
      },
      {
        name: '偏乾',
        image: '/images/lead_wine/dry.png',
        next: 90
      }
    ]
  },
  {
    id: 2,
    type: ['taste'],
    options: [
      {
        name: '飽滿',
        image: '/images/lead_wine/filling.png',
        next: 90
      },
      {
        name: '輕盈',
        image: '/images/lead_wine/light.png',
        next: 90
      }
    ]
  },
  {
    id: 10,
    type: ['food'],
    options: [
      {
        name: '開胃菜',
        image: '/images/lead_wine/appetizer.png',
        next: 90
      },
      {
        name: '主菜',
        image: '/images/lead_wine/main_course.png',
        next: 90
      },
      {
        name: '甜點',
        image: '/images/lead_wine/dessert.png',
        next: 90
      }
    ]
  },
  {
    id: 90,
    type: ['taste', 'food'],
    options: [
      {
        name: '氣泡',
        image: '/images/lead_wine/sparkling.png',
        next: 99
      },
      {
        name: '無氣泡',
        image: '/images/lead_wine/sparkling_non.png',
        next: 99
      }
    ]
  },
  {
    id: 99,
    type: ['taste', 'food'],
    options: [
      {
        name: '紅葡萄酒',
        image: '/images/lead_wine/red_wine.png',
        next: -1
      },
      {
        name: '白葡萄酒',
        image: '/images/lead_wine/white_wine.png',
        next: -1
      }
    ]
  }
];

// methods
const getProductList = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/products`)
    .then((res) => {
      // console.log(res.data);
      originalProducts.value = res.data;
      hotProducts.value = res.data.filter(item => !!item.is_hot && item.star > 3).slice(0, 3);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// 熱賣商品 swiper
const onSwiper = (swiper) => {
  swiperModule.value = swiper;
  swiperModule.value.slideReset();
  swiperModule.value.slideTo(0);
};

// 引導選酒區 swiper
const onSwiperSelect = (swiper) => {
  swiperSelectModule.value = swiper;
  swiperSelectModule.value.slideReset();
  swiperSelectModule.value.slideTo(0);
};

// 選擇引導酒品
const onSelectChange = (data) => {
  if (data.name === '搭配餐酒') {
    selectType.value = 'food';
  } else if (data.name === '純品酒') {
    selectType.value = 'taste';
  }

  if (data && data.next > 0) {
    swiperSelectModule.value.slideNext();
  } else {
    currentSelect.value = data.next;
    handleSelectProduct(data);
  }
};

// 加入購物車
const addToCart = (product) => {
  if (product && product.id && getUser.value?.id) {
    userData.addToCart(product);
  }
};

// 加入最愛
const addToFavorite = (product) => {
  if (product.id && getUser.value?.id && !getFavorites.value.includes(product.id)) {
    const postData = {
      userId: getUser.value.id,
      productId: product.id,
      created_at: getFormattedDate()
    };

    userData.addToFavorite(postData);
  }
};

// 顯示選擇酒品 modal
const handleSelectProduct = (data) => {
  // console.log(data);
  selectProducts.value = originalProducts.value.filter(item => item.wineStyle === data.name).slice(0, 6);
  selectProductModal.value.openModal();
};

const handleCurrentSelect = () => {
  if (currentSelect.value === -1) {
    swiperSelectModule.value.slideReset();
    swiperSelectModule.value.slideTo(0);
  }
};

// computed
const getSelectProductData = computed(() => {
  return selectWineTastingData.filter(item => item.type.includes(selectType.value));
});

onMounted(() => {
  getProductList();
});
</script>

<style lang="scss" scoped>
.selection-container {
  margin-bottom: 0;
}

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
    width: 100%;
  }

  .vertical-line {
    position: absolute;
    top: 0;
    right: 0%;
  }
}

.select-container {
  margin-top: 32px;

  .info {
    width: 100%;
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

@media (min-width:992px) {
  .selection-container {
    margin-bottom: 48px;
  }

  .select-container {
    margin-top: 0;

    .info {
      width: 90%;
    }
  }

  .hot-container {
    .info {
      width: 90%;
    }

    .vertical-line {
      position: absolute;
      top: 0;
      right: 0%;
    }
  }
}
</style>
