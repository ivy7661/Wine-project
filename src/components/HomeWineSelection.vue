<template>
  <div>
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
      </div>
      <div class="col-6">
        <strong class="d-inline-block mb-2 text-primary">引導選酒區</strong>
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
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card flex-md-row mb-4 shadow-sm h-md-250">
          <div class="card-body d-flex flex-column align-items-start"></div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-flex justify-content-between">引導選酒區</strong>
              <button class="d-flex justify-content-between btn btn-primary">next</button>
              <div class="row">
                <div class="col-6">
                  <img src="" />
                  <h4>純品酒</h4>
                </div>
                <div class="col-6">
                  <img src="" />
                  <h4>搭配餐酒</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="productModal">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-flex justify-content-between">引導選酒區</strong>
          <p>{{ process }}</p>
          <button class="d-flex justify-content-between btn btn-primary">next</button>
          <button class="d-flex justify-content-between btn btn-primary">back</button>
          <div class="row">
            <div class="col-6">
              <div v-for="item in ingredientDirection" :key="item.item">
                <img :src="item.imgUrl" alt="Ingredient Image" />
              </div>
              <div v-for="item in ingredientBody" :key="item.item">
                <img :src="item.imgUrl" alt="Ingredient Image" />
              </div>
              <div v-if="selectedBody === '輕盈'">
                <div v-for="item in ingredientBubble" :key="item.item">
                  <img :src="item.imgUrl" alt="Ingredient Image" />
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
export default {
  name: 'HomeWineSelection',
  data() {
    return {
      process: '',
      selectedTaste: '',
      selectedBody: '',
      selectedMeal: '',
      ingredientDirection: [
        {
          item: '偏甜',
          imgUrl: '偏甜.webp'
        },
        {
          item: '偏酸',
          imgUrl: '偏酸.webp'
        },
        {
          item: '偏乾',
          imgUrl: '偏乾.webp'
        }
      ],
      ingredientBody: [
        {
          item: '飽滿',
          imgUrl: '飽滿.webp'
        },
        {
          item: '輕盈',
          imgUrl: '輕盈.webp'
        }
      ],
      ingredientBubble: [
        {
          item: '氣泡',
          imgUrl: '氣泡.webp'
        },
        {
          item: '無氣泡',
          imgUrl: '無氣泡.webp'
        }
      ],

      ingredientColor: [
        {
          item: '白葡萄酒',
          imgUrl: '白葡萄酒.webp'
        },
        {
          item: '紅葡萄酒',
          imgUrl: '紅葡萄酒.webp'
        }
      ],
      ingredientMeal: [
        {
          item: '開胃菜',
          imgUrl: '開胃菜.webp'
        },
        {
          item: '主菜',
          imgUrl: '主菜.webp'
        },
        {
          item: '甜點',
          imgUrl: '甜點.webp'
        }
      ],
      ingredientMain: [
        {
          item: '搭配紅肉',
          imgUrl: '搭配紅肉.webp'
        },
        {
          item: '搭配白肉',
          imgUrl: '搭配白肉.webp'
        },

        {
          item: '搭配辛辣食物',
          imgUrl: '搭配辛辣食物.webp'
        },
        {
          item: '搭配海鮮',
          imgUrl: '搭配海鮮.webp'
        }
      ],
      ingredientDessert: [
        {
          item: '巧克力',
          imgUrl: '巧克力.webp'
        },
        {
          item: '水果',
          imgUrl: '水果.webp'
        },
        {
          item: '奶油蛋糕',
          imgUrl: '奶油蛋糕.webp'
        }
      ],
      ingredientRest: [
        {
          item: '中等酒體',
          imgUrl: '中等酒體.webp'
        },

        {
          item: '甜味果香味',
          imgUrl: '甜味果香味.webp'
        },
        {
          item: '濃郁果味甜度',
          imgUrl: '濃郁果味甜度.webp'
        },
        {
          item: '清新果味',
          imgUrl: '清新果味.webp'
        },
        {
          item: '輕盈氣泡酒',
          imgUrl: '輕盈氣泡酒.webp'
        }
      ],

      ingredientBubbleWine: [
        {
          item: '紅葡萄氣泡酒',
          imgUrl: '紅葡萄氣泡酒.webp'
        },
        {
          item: '白葡萄氣泡酒',
          imgUrl: '白葡萄氣泡酒.webp'
        }
      ]
    };
  },
  methods: {
    mainContain() {},
    turnDrink() {},
    turnMeal() {}
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #eee;
  font-family:
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

swiper-container {
  width: 100%;
  height: 300px;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
