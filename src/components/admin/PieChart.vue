<template>
  <div id="main" style="width: 1140px; height: 400px" class="my-3"></div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export default {
  name: 'PieBase',
  data() {
    return {
      extractedData: null,
      modifiedData: null
    };
  },
  mounted() {
    this.getOrders();
    setTimeout(this.getChart, 100);
  },
  methods: {
    getChart() {
      const myChart = echarts.init(document.getElementById('main'));
      const option = {
        title: {
          text: '全品項營收比重',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 0
        },
        series: [
          {
            type: 'pie',
            radius: '70%',
            data: this.modifiedData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    getOrders() {
      const url = `${VITE_API_URL}/orders`;
      axios
        .get(url)
        .then((res) => {
          this.orders = res.data;

          this.extractedData = this.orders.flatMap((order) =>
            order.cart.map((item) => ({ name: item.chineseName, value: item.qty }))
          );

          // 合併重複的
          this.modifiedData = this.extractedData.reduce((acc, curr) => {
            const existingItem = acc.find((item) => item.name === curr.name);
            if (existingItem) {
              existingItem.value += curr.value;
            } else {
              acc.push({ name: curr.name, value: curr.value });
            }
            return acc;
          }, []);
        })
        .catch(() => {
          alert('取得訂單資訊失敗');
        });
    }
  }
};
</script>
