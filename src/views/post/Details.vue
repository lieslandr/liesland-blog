<template>
    <span v-html="post.content.rendered" />
    <p>Published: {{ post.date}}</p>
</template>

<script>
export default {
  props: ['post']
}
</script>