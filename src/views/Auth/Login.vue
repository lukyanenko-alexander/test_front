<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="mb-3">
          <h2>Войти</h2>
        </div>

        <template v-if="message">
          <Message :message="message"></Message>
        </template>

        <template v-if="error">
          <Errors :errors="errors"></Errors>
        </template>

        <form action="#" @submit.prevent="submit">
          <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input class="form-control" type="text" name="email" id="email" v-model="form.email">
          </div>
          <div class="mb-3">
            <label class="form-label" for="password">Пароль</label>
            <input class="form-control" type="password" name="password" id="password" v-model="form.password">
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Errors from "../../components/Errors";
import Message from "../../components/Message";

export default {
  name: 'SignIn',

  data () {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  components: {
    Errors, Message
  },
  computed:{
    ...mapGetters({
      error: 'error/error',
      errors: 'error/errors',
      message: 'popUp/message',
    })
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
      dropMessage: 'popUp/dropMessage',
      dropErrors: 'error/dropErrors',
    }),

    async submit () {
      await this.signIn(this.form)
    }
  }
}
</script>