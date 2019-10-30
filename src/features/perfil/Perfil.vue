<template>
  <v-container>
    <v-card height="150px">
      <v-layout row justify-center align-center>
        <v-flex ml-10 mt-4>
          <v-list-item>
            <v-list-item-avatar 
              size="100" 
              color="blue-grey lighten-5"
            >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ name }}</v-list-item-title>
              <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ username }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>  
</template>

<script>
import ls from 'local-storage'

export default {
  name: 'Perfil',

  components: {},

  data() {
    return {
      username: '',
      name: '',
      email: ''
    }
  },

  mounted() {
    this.defineProfileInformations()
  },

  methods: {
    defineProfileInformations() {
      this.username = ls.get('username')
      this.name = ls.get('name')
      this.email = ls.get('email')
    }
  }
}
</script>

<style scoped>
</style>