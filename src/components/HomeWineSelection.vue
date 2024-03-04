<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
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
        }],
      ingredientBody: [{
        item: '飽滿',
        imgUrl: '飽滿.webp'
      },
      {
        item: '輕盈',
        imgUrl: '輕盈.webp'
      }],
      ingredientBubble: [{
        item: '氣泡',
        imgUrl: '氣泡.webp'
      },
      {
        item: '無氣泡',
        imgUrl: '無氣泡.webp'
      }],

      ingredientColor: [{
        item: '白葡萄酒',
        imgUrl: '白葡萄酒.webp'
      },
      {
        item: '紅葡萄酒',
        imgUrl: '紅葡萄酒.webp'
      }],
      ingredientMeal: [{
        item: '開胃菜',
        imgUrl: '開胃菜.webp'
      },
      {
        item: '主菜',
        imgUrl: '主菜.webp'
      }, {
        item: '甜點',
        imgUrl: '甜點.webp'
      }],
      ingredientMain: [{
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
      }],
      ingredientDessert: [
        {
          item: '巧克力',
          imgUrl: '巧克力.webp'
        },
        {
          item: '水果',
          imgUrl: '水果.webp'
        }, {
          item: '奶油蛋糕',
          imgUrl: '奶油蛋糕.webp'
        }
      ],
      ingredientRest: [{
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
      }],

      ingredientBubbleWine: [{
        item: '紅葡萄氣泡酒',
        imgUrl: '紅葡萄氣泡酒.webp'
      },
      {
        item: '白葡萄氣泡酒',
        imgUrl: '白葡萄氣泡酒.webp'
      }]

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
</style>
