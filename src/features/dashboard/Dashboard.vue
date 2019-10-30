<template>
  <v-container>
    <Header/>
    <Perfil/>
  </v-container>
</template>

<script>
import Header from '../../components/layout/Header.vue';
import Perfil from '../perfil/Perfil.vue';

export default {
  name: 'dashboard',

  components: {
    Header,
    Perfil
  },

  data () {
    return {
      
    }
  }
}
</script>