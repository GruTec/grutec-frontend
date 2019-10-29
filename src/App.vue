<template>
  <v-app>
    <router-view/>
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