<template>
  <div>
    <nav class="nav-bar">
      <router-link to="/">首页</router-link>
      <router-link to="/charts">图表演示</router-link>
      <router-link to="/recommend">图表推荐</router-link>
      <router-link to="/about">关于我们</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.nav-bar {
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  font-weight: bold;
}
.router-link-active {
  color: #007acc;
}
</style>