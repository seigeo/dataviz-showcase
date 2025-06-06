import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Charts from '../views/Charts.vue'
import About from '../views/About.vue'
import Recommend from '../views/Recommend.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/about', name: 'About', component: About },
  { path: '/recommend', name: 'Recommend', component: Recommend } // 新增
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router