<template>
    <p>Leave a comment here.</p>
    <button @click="comment">Submit Comment</button>
</template>

<script>
export default {
  props: ['post'],
  inject: ['GStore'], // <---- Inject the Global Store
  methods: {
    comment() {
      // If registration API call is successful

      this.GStore.flashMessage =
        'You have successfully commented on ' + this.post.title.rendered
      setTimeout(() => {  // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'PostDetails'
      })
    }
  }
}
</script>