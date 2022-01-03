<template>
  <div v-if="post">
    <h1 class="post-title"><span v-html="post.title.rendered" /> </h1>
    
    <div id="nav">
      <router-link :to="{ name: 'PostDetails'}"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'PostComment'}"
        >Comment</router-link
      >
    </div>
    
    <router-view :post="post" />
  </div>
</template>

<script>
import PostService from '@/services/PostService.js'
export default {
  props: ['id'],
  data() {
    return {
      post: null
    }
  },
  created() {
    PostService.getPost(this.id)
      .then(response => {
        this.post = response.data
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({ name: '404Resource', params: { resource: 'post' } })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>