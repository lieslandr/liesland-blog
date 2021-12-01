import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import PostList from '@/views/PostList.vue'
import PostDetails from '@/views/PostDetails.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/events',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/post/12298',
    name: 'PostDetails',
    component: PostDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
