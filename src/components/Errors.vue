<template>
  <div class="alert alert-danger" role="alert">
    <span v-for="(error, idx) in errors" :key="idx">
      {{error[0]}} <br>
    </span>
  </div>
</template>

<script>
export default {
  name: "Errors",
  props: {
    errors: {}
  }
}
</script>

<style scoped>

</style>