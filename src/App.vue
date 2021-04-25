<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import {mapActions} from 'vuex'

export default {
  components: {
    Navigation
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.drop()
      }
    }
  },
  methods: {
    ...mapActions({
      dropMessage: 'popUp/dropMessage',
      dropErrors: 'error/dropErrors',
    }),
    drop(){
      this.dropMessage();
      this.dropErrors();
    },
    async submit () {
      await this.signIn(this.form)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
