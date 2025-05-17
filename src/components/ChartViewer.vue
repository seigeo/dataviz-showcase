<template>
    <div class="container">
      <div id="sidebar">
        <div class="nav-item" @click="loadChart('bar')">柱状图</div>
        <div class="nav-item" @click="loadChart('line')">折线图</div>
        <div class="nav-item" @click="loadChart('pie')">饼图</div>
      </div>
      <div id="content">
        <h2>{{ title }}</h2>
        <div>{{ description }}</div>
        <div id="chart" style="width: 100%; height: 400px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'ChartViewer',
    data() {
      return {
        chart: null,
        title: '图表示例',
        description: '请选择左侧图表类型查看示例'
      };
    },
    mounted() {
      this.chart = echarts.init(document.getElementById('chart'));
    },
    methods: {
      loadChart(type) {
        let option;
        if (type === 'bar') {
          this.title = '柱状图';
          this.description = '柱状图适合用于显示分类数据的比较，如每个班级的人数。';
          option = {
            title: { text: '柱状图示例' },
            tooltip: {},
            xAxis: { data: ['A', 'B', 'C', 'D'] },
            yAxis: {},
            series: [{ name: '数量', type: 'bar', data: [5, 20, 36, 10] }]
          };
        } else if (type === 'line') {
          this.title = '折线图';
          this.description = '折线图适合展示数据随时间的变化趋势，如一年中的气温变化。';
          option = {
            title: { text: '折线图示例' },
            tooltip: {},
            xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月'] },
            yAxis: { type: 'value' },
            series: [{ name: '温度', type: 'line', data: [5, 9, 15, 20] }]
          };
        } else if (type === 'pie') {
          this.title = '饼图';
          this.description = '饼图用于展示数据在整体中的占比，比如市场份额或人口比例。';
          option = {
            title: { text: '饼图示例', left: 'center' },
            tooltip: { trigger: 'item' },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 40, name: '直接访问' },
                  { value: 30, name: '邮件营销' },
                  { value: 20, name: '联盟广告' },
                  { value: 10, name: '搜索引擎' }
                ]
              }
            ]
          };
        }
        this.chart.setOption(option);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    font-family: Arial, sans-serif;
    margin: 0;
  }
  #sidebar {
    width: 200px;
    background: #f4f4f4;
    padding: 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  #content {
    flex: 1;
    padding: 20px;
  }
  .nav-item {
    margin: 10px 0;
    cursor: pointer;
    color: #007acc;
  }
  .nav-item:hover {
    text-decoration: underline;
  }
  </style>
  