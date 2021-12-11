<template>
  <div v-if="post">
    <h1 class="post-title"><span v-html="post.title.rendered" /> </h1>
    <span v-html="post.content.rendered" />
    <p>Published: {{ post.date}}</p>
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
        console.log(error)
      })
  }
}
</script>