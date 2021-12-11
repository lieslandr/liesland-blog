<template>
  <div class="posts">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />

    <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name:'PostList', query: {page: page-1} }"
      rel="prev"
      v-if="page != 1"
      >&#60; Previous</router-link
    >

    <router-link
      id="page-next"
      :to="{ name:'PostList', query: {page: page+1} }"
      rel="next"
      v-if="hasNextPage"
      >Next &#62;</router-link
    >
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import PostService from '@/services/PostService.js'
import {watchEffect} from 'vue'

export default {
  name: 'PostList',
  props: ['page'],
  components: {
    PostCard
  },
  data() {
    return {
      posts: null,
      totalPages: 0
    }
  },
  created() {
    watchEffect(() => {
      this.posts = null
      PostService.getPosts(2,this.page)
        .then(response => {
          this.posts = response.data
          this.totalPages = response.headers['x-wp-totalpages']
        })
        .catch(error => {
          console.log(error)
        })
      })
  },
  computed: {
    hasNextPage(){
      return this.page < this.totalPages
    }
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination{
  display:flex;
  width: 290px;
}

.pagination a{
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev{
  text-align: left;
}

#page-next{
  text-align: right;
}
</style>
