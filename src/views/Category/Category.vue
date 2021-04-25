<template>
  <div class="container">
    <div class="row">
      <router-link :to="'/posts/' + post.id" v-for="post in category.posts" :key="post.id" class="col-12 post-link">
        <PostCard :cut="true" :user="post.user" :post="post"></PostCard>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex'
import PostCard from "../../components/PostCard";

export default {
  name: "Category",
  components: {
    PostCard
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.fetch(to.params.id)
      }
    }
  },
  computed:{
    ...mapGetters('category', ['category']),
  },
  methods:{
    ...mapActions('category', ['getCategoryWithPost']),
    fetch (id) {
      this.getCategoryWithPost(id ?? this.$route.params.id);
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style scoped>
  .post-link{
    text-decoration: none;
    display: block;
    color: #1a202c;
    background: #ece6e6;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 10px;
    padding: 15px;
  }
</style>