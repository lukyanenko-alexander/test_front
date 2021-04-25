<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Logo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="category in categories" class="nav-item" :key="category.id+category.name">
            <router-link class="nav-link" :to="{name: 'Category', params:{id: category.id}}">{{category.name}}</router-link>
          </li>

          <template v-if="!authenticated">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Войти</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Регистрация</router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/account">{{user.name}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts/create">Создать пост</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="signOut">Выйти</a>
            </li>
          </template>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Navigation",
  computed:{
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      categories: 'category/categories'
    })
  },
  methods:{
    ...mapActions({
      signOutAction: 'auth/signOut',
      getCategoriesAction: "category/getCategories"
    }),
    fetch(){
      this.getCategoriesAction();
    },
    async signOut () {
      await this.signOutAction()

      this.$router.replace({ name: 'Home' })
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style scoped>

</style>