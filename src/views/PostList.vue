<template>
  <div class="posts">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import PostService from '@/services/PostService.js'

export default {
  name: 'PostList',
  components: {
    PostCard
  },
  data() {
    return {
      posts: null
    }
  },
  created() {
    PostService.getPosts()
      .then(response => {
        this.posts = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
