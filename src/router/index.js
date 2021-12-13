import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostList.vue'
import PostLayout from '@/views/post/Layout.vue'
import PostDetails from '@/views/post/Details.vue'
import PostComment from '@/views/post/Comment.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/', 
    name: 'PostList', 
    component: PostList,
    props: route => ({page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/post/:id',
    name: 'PostLayout',
    props: true,
    component: PostLayout,
    children: [
      {
        path: '',
        name: 'PostDetails',
        component: PostDetails
      },
      {
        path: 'comment',
        name: 'PostComment',
        component: PostComment
      }
    ]
  },
  {
    path: '/about', 
    name: 'About', 
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
