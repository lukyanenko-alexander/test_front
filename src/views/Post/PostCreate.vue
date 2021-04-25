<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3">

        <div class="mb-3">
          <h2>Создание поста</h2>
        </div>

        <template v-if="message">
          <Message :message="message"></Message>
        </template>

        <template v-if="error">
          <Errors :errors="errors"></Errors>
        </template>

        <form action="#" @submit.prevent="submit">
          <divc class="mb-3">
            <label class="form-label" for="name">Заголовок</label>
            <input class="form-control" type="text" name="name" id="name" v-model="form.name">
          </divc>
          <div class="mb-3">
            <label class="form-label" for="text">Текст поста</label>
            <input class="form-control" type="text" name="text" id="text" v-model="form.text">
          </div>
          <div class="mb-3">
            <label class="form-label" for="category_id">Категория</label>
            <select class="form-control" v-model="form.category_id" name="category_id" id="category_id">
              <option v-for="category in categories" :key="category.id+category.name" :value="category.id">{{category.name}}</option>
            </select>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">
              Создать
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import Errors from "../../components/Errors";
import Message from "../../components/Message";

export default {
  name: "PostCr",
  components: {Message, Errors},
  data(){
    return {
      form: {
        name: null,
        text: null,
        category_id: null
      }
    }
  },
  computed:{
    ...mapGetters({
      authenticated: 'auth/authenticated',
      error: 'error/error',
      errors: 'error/errors',
      categories: 'category/categories',
      message: 'popUp/message',
    })
  },
  methods: {
    ...mapActions({
      postCreate: 'post/createPost'
    }),
    submit () {
        this.postCreate(this.form)
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

</style>