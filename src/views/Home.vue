<template>
    <div class="home-container">
      <h1>数据可视化图谱</h1>
      <p>
        欢迎使用《数据可视化图谱》！本项目展示了常见的数据可视化图表类型，并结合交互式示例，帮助你理解它们的适用场景与设计原则。
      </p>
      <router-link to="/charts" class="btn">开始探索图表</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home-container {
    max-width: 800px;
    margin: 80px auto;
    text-align: center;
    padding: 0 20px;
  }
  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 24px;
    background-color: #007acc;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #005f99;
  }
  </style>