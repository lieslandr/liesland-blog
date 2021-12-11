<template>
  <router-link class="post-link" :to="{ name: 'PostDetails', params: { id: post.id } }">
    <div class="post-card">
      <h2 class="post-title"><span v-html="post.title.rendered" /> </h2>
      <span v-html="post.excerpt.rendered" />
      <p>Published: {{post.date}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post-card {
  padding: 20px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  font-size: 1.25rem;
  text-align: left;
}

.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.post-link {
  color: #2c3e50;
  text-decoration: none;
  width: 50%;
}

.post-title {
  text-align: center;
}

figure {
  display: inline;
  margin-left: auto;
  margin-right: auto;
  background-color: aquamarine;
}

figure.wp-block-image.size-large img {
    height: auto;
    max-width: 50px;
    vertical-align: bottom;
}
</style>

