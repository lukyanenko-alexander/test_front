<template>
  <div class="container mt-5">
    <div class="row" v-if="post.length !== 0">
      <div class="col-12">
        <PostCard :user="user" :post="post"></PostCard>
      </div>
      <template v-if="authenticated">
        <div class="col-12">

          <template v-if="message">
            <Message :message="message"></Message>
          </template>

          <template v-if="error">
            <Errors :errors="errors"></Errors>
          </template>

          <div class="row">
            <div class="col-12">
              Оцените пост
            </div>
            <div class="col-12">
              <span class="rate" @click="makeRate(1)">1</span>
              <span class="rate" @click="makeRate(2)">2</span>
              <span class="rate" @click="makeRate(3)">3</span>
              <span class="rate" @click="makeRate(4)">4</span>
              <span class="rate" @click="makeRate(5)">5</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex'
import PostCard from "../../components/PostCard";
import Errors from "../../components/Errors";
import Message from "../../components/Message";

export default {
  name: "Post",
  data() {
    return {
      rate: {
        rate: null,
        post_id : null,
      }
    }
  },
  components:{
    PostCard, Errors, Message
  },
  computed:{
    ...mapGetters({
      authenticated: 'auth/authenticated',
      error: 'error/error',
      errors: 'error/errors',
      message: 'popUp/message',
      post: 'post/post',
      user: 'user/user',
    }),
  },
  methods:{
    ...mapActions({
      getPost: 'post/getPost',
      ratePost: 'rate/ratePost',
    }),
    fetch(){
      this.getPost(this.$route.params.id);
    },
    makeRate(rate){
      this.rate.rate = rate;
      this.rate.post_id = this.post.id;
      this.ratePost(this.rate);
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style scoped>
.rate{
  margin: 1rem;
  font-size: 24px;
}
.rate:hover{
  cursor: pointer;
  color: #6cb2eb;
}
</style>