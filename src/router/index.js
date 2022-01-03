import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostList.vue'
import PostLayout from '@/views/post/Layout.vue'
import PostDetails from '@/views/post/Details.vue'
import PostComment from '@/views/post/Comment.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

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
    path: '/about-us', 
    name: 'About', 
    component: About,
    alias: '/about'
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
