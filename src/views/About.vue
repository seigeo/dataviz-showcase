<template>
    <div class="about-container">
      <h1>关于我们</h1>
      <section>
        <h2>📌 项目介绍</h2>
        <p>
          本项目《数据可视化图谱》是数据可视化课程的小组实践作业，旨在通过 Vue 与 ECharts 实现一个交互式图表演示系统，帮助用户理解常见图表类型的特点与适用场景。
          同时项目集成了 DeepSeek API，实现了基于自然语言的图表推荐功能，用户可以输入数据分析目标，获得实时图表建议。
        </p>
      </section>

      <section>
        <h2>🔍 智能推荐功能</h2>
        <p>
          在“图表推荐”页面中，用户可以通过自然语言描述数据特征和分析目标，系统将调用 DeepSeek 模型接口进行图表类型推荐，并以 Markdown 形式格式化输出结果。
        </p>
      </section>
  
      <section>
        <h2>🛠 使用技术</h2>
        <ul>
          <li>Vue 3 + Vite：前端框架与构建工具</li>
          <li>Vue Router：页面导航</li>
          <li>ECharts：图表可视化库</li>
          <li>marked：Markdown 渲染</li>
          <li>DeepSeek API：自然语言图表推荐</li>
          <li>HTML / CSS：页面样式布局</li>
        </ul>
      </section>
  
      <section>
        <h2>📚 参考资料</h2>
        <ul>
          <li><a href="https://echarts.apache.org/zh/index.html" target="_blank">ECharts 官方文档</a></li>
          <li><a href="https://cn.vuejs.org/" target="_blank">Vue 官方中文文档</a></li>
          <li><a href="https://marked.js.org/" target="_blank">marked.js 文档</a></li>
          <li><a href="https://deepseek.com/" target="_blank">DeepSeek API 官网</a></li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  }
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
    line-height: 1.8;
  }
  section {
    margin-bottom: 30px;
  }
  h2 {
    margin-top: 20px;
    color: #007acc;
  }
  ul {
    padding-left: 20px;
  }
  li {
    margin-bottom: 6px;
  }
  a {
    color: #007acc;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>