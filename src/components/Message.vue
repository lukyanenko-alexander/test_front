<template>
  <div class="alert alert-success" role="alert">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      default: '',
    },
  }
}
</script>

<style scoped>

</style>