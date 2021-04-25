<template>
  <div v-if="post.length !== 0" class="post__wrap">
    <div class="post__title">
      {{post.name}}
    </div>
    <div v-if="cut" class="post__text">
      {{cutText(post.text)}}
    </div>
    <div v-else class="post__text">
      {{post.text}}
    </div>
    <div class="post__author">
      Автор: {{user.name}}
    </div>
    <div class="post__rate">
      <b>Средняя оценка: {{post.rates}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {},
    user: {},
    cut: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cutText (text) {
      if (text.length < 300) {
        return text;
      }

      return text.slice(0, 300) + '...';
    }
  }
}
</script>

<style scoped>
  .post-link:hover .post__title{
    color: #6cb2eb;
  }
  .post__title{
    font-size: 24px;
    text-align: center;
  }
  .post__text{
    overflow-wrap: break-word;
    text-align: left;
  }
  .post__author{
    text-align: right;
  }
  .post__rate{
    text-align: right;
  }
</style>