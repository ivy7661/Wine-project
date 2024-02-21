<template>
  <div id="main" style="width: 1140px; height: 400px" class="my-3"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'PieBase',
  props: ['modifiedData'],
  mounted() {
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
    }
  }
};
</script>
