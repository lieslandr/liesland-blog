import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostList.vue'
import PostDetails from '@/views/PostDetails.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/', 
    name: 'PostList', 
    component: PostList,
    props: route => ({page: parseInt(route.query.page) || 1 })
  },
  {path: '/about', name: 'About', component: About},
  {path: '/post/:id', name: 'PostDetails', props: true, component: PostDetails}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
