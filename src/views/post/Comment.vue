<template>
    <p>Leave a comment here.</p>
    <button @click="comment">Submit Comment</button>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    comment() {
      // If registration API call is successful
      this.$router.push({
        name: 'PostDetails'
      })
    }
  }
}
</script>