<template>
  <div class="contaiener mt-5">
    <div class="row">
      <div class="col-6 offset-3">

        <div class="mb-3">
          <h2>Регистрация</h2>
        </div>

        <template v-if="message">
          <Message :message="message"></Message>
        </template>

        <template v-if="error">
          <Errors :errors="errors"></Errors>
        </template>


        <form action="#" @submit.prevent="submit">
          <div class="mb-3">
            <label class="form-label" for="email">Имя</label>
            <input class="form-control" type="text" name="name" id="name" v-model="form.name" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="email">Почта</label>
            <input class="form-control" type="text" name="email" id="email" v-model="form.email" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="password">Пароль</label>
            <input class="form-control" type="password" name="password" id="password" v-model="form.password" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="password_confirmation">Потвердите пароль</label>
            <input class="form-control" type="password" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation" required>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">
              Регитсрация
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
  name: 'Register',

  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
    ...mapActions('auth', ['register']),

    async submit () {
      this.register(this.form)
    }
  }
}
</script>