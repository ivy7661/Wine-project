<template>
  <div class="col-md-6">
    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">熱賣商品</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">Featured post</a>
        </h3>
        <div class="mb-1 text-muted">Nov 12</div>
        <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
          content.</p>
        <a href="#">Continue</a>
      </div>
      <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"
        style="width: 200px; height: 250px;"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18d7dfc9bd9%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18d7dfc9bd9%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
    </div>
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
    mainContain() {

    },
    turnDrink() {

    },
    turnMeal() {

    }
  }
};
</script>

<style lang="scss" scoped>
</style>
