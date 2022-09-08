import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('@/views/AuthPage')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
