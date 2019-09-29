<template>
  <v-app>
    <Authentication/>
  </v-app>
</template>

<script>
import Authentication from './features/authentication/Authentication.vue';

export default {
  name: 'app',

  components: {
    Authentication
  },
}
</script>