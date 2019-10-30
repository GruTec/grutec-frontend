<template>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('destroyToken')
    this.$router.push({ name: 'authentication' })
  }
}
</script>