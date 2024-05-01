import { createRouter, createWebHistory } from 'vue-router'
import Charts from '../views/ChartsVue.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/charts',
		component: Charts
  },
	{
		path: '/',
		component: Home
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
