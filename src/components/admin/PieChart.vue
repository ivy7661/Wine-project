<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'PieBase',
  props: ['modifiedData'],
  data() {
    return {
      // data: [
      //   {
      //     name: '波瑪酒莊.香波蜜思妮紅酒',
      //     value: 2
      //   },
      //   {
      //     name: '貝拉格斯酒莊.(戈登)安茹白酒',
      //     value: 1
      //   }
      // ]
    };
  },
  mounted() {
    // 圖表
    this.getChart();
  },
  methods: {
    getChart() {
      const myChart = echarts.init(document.getElementById('main'));
      const option = {
        title: {
          text: '全品項營收比重',
          // subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
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
