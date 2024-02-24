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
  <div id="productModal">
    <div class="card-body d-flex flex-column align-items-start">
      <strong class="d-flex justify-content-between">引導選酒區</strong>
      <p>{{ process }}</p>
      <button class="d-flex justify-content-between btn btn-primary">next</button>
      <button class="d-flex justify-content-between btn btn-primary">back</button>
      <div class="row">
        <div class="col-6">
          <div v-for="item in  ingredientDirection" :key="item.item" v-if="selectedTaste == item.item"><img
              :src="item.imgUrl" alt="Ingredient Image"></div>
          <div v-for="item in ingredientBody" :key="item.item" v-if="selectedBody === item.item">
            <img :src="item.imgUrl" alt="Ingredient Image">
          </div>
          <div v-if="selectedBody === '輕盈'">
            <div v-for="item in ingredientBubble" :key="item.item">
              <img :src="item.imgUrl" alt="Ingredient Image">
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
      process: "",
      selectedTaste: "",
      selectedBody: "",
      selectedMeal: "",
      ingredientDirection: [
        {
          item: "偏甜",
          imgUrl: "偏甜.webp",
        },
        {
          item: "偏酸",
          imgUrl: "偏酸.webp",
        },
        {
          item: "偏乾",
          imgUrl: "偏乾.webp",
        }],
      ingredientBody: [{
        item: "飽滿",
        imgUrl: "飽滿.webp",
      },
      {
        item: "輕盈",
        imgUrl: "輕盈.webp",
      }]
      ,
      ingredientBubble: [{
        item: "氣泡",
        imgUrl: "氣泡.webp",
      },
      {
        item: "無氣泡",
        imgUrl: "無氣泡.webp",
      }],

      ingredientColor: [{
        item: "白葡萄酒",
        imgUrl: "白葡萄酒.webp",
      },
      {
        item: "紅葡萄酒",
        imgUrl: "紅葡萄酒.webp",
      }]
      ,
      ingredientMeal: [{
        item: "開胃菜",
        imgUrl: "開胃菜.webp",
      },
      {
        item: "主菜",
        imgUrl: "主菜.webp",
      }, {
        item: "甜點",
        imgUrl: "甜點.webp",
      }]
      , ingredientMain: [{
        item: "搭配紅肉",
        imgUrl: "搭配紅肉.webp",
      },
      {
        item: "搭配白肉",
        imgUrl: "搭配白肉.webp",
      },

      {
        item: "搭配辛辣食物",
        imgUrl: "搭配辛辣食物.webp",
      },
      {
        item: "搭配海鮮",
        imgUrl: "搭配海鮮.webp",
      }],
      ingredientDessert: [
        {
          item: "巧克力",
          imgUrl: "巧克力.webp",
        },
        {
          item: "水果",
          imgUrl: "水果.webp",
        }, {
          item: "奶油蛋糕",
          imgUrl: "奶油蛋糕.webp",
        },
      ],
      ingredientRest: [{
        item: "中等酒體",
        imgUrl: "中等酒體.webp",
      },

      {
        item: "甜味果香味",
        imgUrl: "甜味果香味.webp",
      },
      {
        item: "濃郁果味甜度",
        imgUrl: "濃郁果味甜度.webp",
      },
      {
        item: "清新果味",
        imgUrl: "清新果味.webp",
      },
      {
        item: "輕盈氣泡酒",
        imgUrl: "輕盈氣泡酒.webp",
      }],

      ingredientBubbleWine: [{
        item: "紅葡萄氣泡酒",
        imgUrl: "紅葡萄氣泡酒.webp",
      },
      {
        item: "白葡萄氣泡酒",
        imgUrl: "白葡萄氣泡酒.webp",
      }]




    }

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

<style lang="scss" scoped></style>


<script>

const questions = [
  {
    id: '1',
    options: ['偏甜', '偏酸', '偏乾'],
    next: {
      "偏乾": '2',
      "偏酸": '3',
      "偏甜": '4',
    },
  },
  {
    id: '2',
    options: ['氣泡', '無氣泡'],
    next: {
      "氣泡": '5',
      "無氣泡": '6',
    },
  },
  {
    id: '5',
    options: ['白葡萄酒', '紅葡萄酒'],
    // You can add more questions here
  },  {
    id: '6',
    options: ['白葡萄酒', '紅葡萄酒'],
    // You can add more questions here
  },
  {
    id: '3',
    options: ['飽滿', '輕盈'],
    next: {
      "飽滿": '7',
      "輕盈": '8',
    },
  },
  {
    id: '7',
    options: ['氣泡', '無氣泡'],
      next: {
      "氣泡": '5',
      "無氣泡": '6',
    }
  },
      {
    id: '8',
    options: ['氣泡', '無氣泡'],
      next: {
      "氣泡": '5',
      "無氣泡": '6',
    },
      },
    // You can add more questions here
 {
    id: '4',
    options: ['飽滿', '輕盈'],
    next: {
      "飽滿": '7',
      "輕盈": '8',
    },
  },
   {
    id: '24',
    options: ['開胃菜', '主菜','甜點'],
    next: {
      "開胃菜": '9',
      "主菜": '10',
      "甜點":'11'
    },
     
  },
    {
    id: '9',
    options: ['氣泡', '無氣泡'],
    next: {
      "氣泡": '5',
      "無氣泡": '6',
    },
     
  },
     {
    id: '10',
    options: ['搭配紅肉', '搭配白肉','搭配辛辣食物','搭配海鮮'],
    next: {
      "搭配紅肉": '12',
      "搭配白肉": '13',
      "搭配辛辣食物": '14',
        "搭配海鮮": '15',
    },
     
  },
       {
    id: '12',
    options: ['飽滿'],
    next: {
     //紅葡萄酒頁面
    },
     
  },
       {
    id: '13',
    options: ['中等酒體','輕盈'],
    next: {
      //"中等酒體": '',白葡萄酒頁面
      //"輕盈":'',紅葡萄酒頁面
    },
     
  },
         {
    id: '14',
    options: ['甜味和果香味'],
    next: {
    //白葡萄酒頁面
    },
     
  },
           {
    id: '15',
    options: ['輕盈'],
    next: {
    //白葡萄酒頁面
    },
     
  },
        {
    id: '11',
    options: ['巧克力','水果','奶油蛋糕'],
    next: {
     "巧克力": '16',
      "水果": '17',
      "奶油蛋糕": '18',
    },
     
  },
           {
    id: '16',
    options: ['濃郁果味甜度'],
    next: {
     //紅葡萄酒頁面
    },
     
  },
           {
    id: '17',
    options: ['清新果味'],
    next: {
     //白葡萄酒頁面
    },
     
  },
              {
    id: '18',
    options: ['輕盈氣泡酒'],
    next: {
     "白葡萄氣泡酒": '19',
      "紅葡萄氣泡酒": '20',
    },
     
  },
                  {
    id: '19',
    options: ['白葡萄氣泡酒'],
    next: {
 //白葡萄氣泡酒頁面
    },
     
  },
                     {
    id: '20',
    options: ['紅葡萄氣泡酒'],
    next: {
    //紅葡萄氣泡酒頁面
    },
     
  },
    
];

let currentQuestionId = '1';

function getNextQuestion(currentQuestionId, selectedOption) {
    const currentQuestion = questions.find(question => question.id === currentQuestionId);
    if (!currentQuestion) {
        return null;
    }
    
    const nextQuestionId = currentQuestion.next[selectedOption];
    return nextQuestionId;
}

function displayQuestionAndOptions() {
    const currentQuestion = questions.find(question => question.id === currentQuestionId);
    if (!currentQuestion) {
        return;
    }

    const questionText = currentQuestion.text;
    const options = currentQuestion.options;
    
    document.getElementById('current-question').textContent = questionText;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            const nextQuestionId = getNextQuestion(currentQuestionId, option);
            if (nextQuestionId) {
                currentQuestionId = nextQuestionId;
                displayQuestionAndOptions();
                document.getElementById('user-selection').textContent = `您的选择：${option}`;
            } else {
                alert('问卷结束');
            }
        });
        optionsContainer.appendChild(button);
    });
}

displayQuestionAndOptions();



</script>
