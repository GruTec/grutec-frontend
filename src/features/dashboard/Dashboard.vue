<template>
  <v-container>
    <Header/>
    <Perfil/>
    <Search/>
  </v-container>
</template>

<script>
import Header from '../../components/layout/Header.vue';
import Perfil from '../perfil/Perfil.vue';
import Search from '../search/Search.vue';

export default {
  name: 'dashboard',

  components: {
    Header,
    Perfil,
    Search
  },

  data () {
    return {
      
    }
  }
}
</script>