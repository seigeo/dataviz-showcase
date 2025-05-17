<template>
    <div class="charts-container">
      <div class="sidebar">
        <button @click="loadChart('bar')">柱状图</button>
        <button @click="loadChart('line')">折线图</button>
        <button @click="loadChart('pie')">饼图</button>
        <button @click="loadChart('scatter')">散点图</button>
        <button @click="loadChart('radar')">雷达图</button>
      </div>
      <div class="chart-area">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div id="chart" style="width: 100%; height: 400px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts'
  
  export default {
    name: 'Charts',
    data() {
      return {
        chart: null,
        title: '请选择一个图表类型',
        description: ''
      }
    },
    mounted() {
      this.chart = echarts.init(document.getElementById('chart'))
    },
    methods: {
      loadChart(type) {
        this.chart.dispose()
        this.chart = echarts.init(document.getElementById('chart'))
        let option
        if (type === 'bar') {
          this.title = '柱状图'
          this.description = '柱状图适合用于展示分类数据的比较，如每个班级的人数。'
          option = {
            title: { text: '柱状图示例' },
            tooltip: {},
            xAxis: { data: ['A', 'B', 'C', 'D'] },
            yAxis: {},
            series: [{ name: '人数', type: 'bar', data: [5, 20, 36, 10] }]
          }
        } else if (type === 'line') {
          this.title = '折线图'
          this.description = '折线图适合展示数据随时间的趋势变化，例如月销售额走势。'
          option = {
            title: { text: '折线图示例' },
            tooltip: {},
            xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月'] },
            yAxis: { type: 'value' },
            series: [{ name: '销售额', type: 'line', data: [100, 200, 150, 300] }]
          }
        } else if (type === 'pie') {
          this.title = '饼图'
          this.description = '饼图适用于表示整体中各部分的占比，例如市场份额。'
          option = {
            title: { text: '饼图示例', left: 'center' },
            tooltip: { trigger: 'item' },
            series: [
              {
                name: '来源',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 40, name: '搜索引擎' },
                  { value: 30, name: '直接访问' },
                  { value: 20, name: '社交媒体' },
                  { value: 10, name: '其他' }
                ]
              }
            ]
          }
        } else if (type === 'scatter') {
          this.title = '散点图'
          this.description = '散点图适合展示两个连续变量之间的关系，例如身高与体重的关系。'
          option = {
            title: { text: '散点图示例' },
            xAxis: {},
            yAxis: {},
            series: [{
              symbolSize: 15,
              data: [
                [10, 20], [20, 35], [30, 40], [40, 50], [50, 55]
              ],
              type: 'scatter'
            }]
          }
        } else if (type === 'radar') {
          this.title = '雷达图'
          this.description = '雷达图适合用于多维数据的综合比较，例如选手在多个指标下的评分情况。'
          option = {
            title: { text: '雷达图示例' },
            tooltip: {},
            radar: {
              indicator: [
                { name: '速度', max: 100 },
                { name: '力量', max: 100 },
                { name: '技巧', max: 100 },
                { name: '耐力', max: 100 },
                { name: '敏捷', max: 100 }
              ]
            },
            series: [{
              name: '评分',
              type: 'radar',
              data: [
                {
                  value: [80, 90, 70, 85, 75],
                  name: '选手A'
                }
              ]
            }]
          }
        }
        this.chart.setOption(option)
      }
    }
  }
  </script>
  
  <style scoped>
  .charts-container {
    display: flex;
    min-height: 500px;
  }
  .sidebar {
    width: 180px;
    background-color: #f0f0f0;
    padding: 20px;
  }
  .sidebar button {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 10px;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .sidebar button:hover {
    background-color: #005f99;
  }
  .chart-area {
    flex: 1;
    padding: 20px;
  }
  </style>