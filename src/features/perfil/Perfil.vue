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
              <v-list-item-title class="headline">{{ username }}</v-list-item-title>
              <v-list-item-subtitle>{{ "Welcome " + username}}</v-list-item-subtitle>
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
      username: ''
    }
  },

  mounted() {
    this.defineUsername()
  },

  methods: {
    defineUsername() {
      this.username = ls.get('username')
    }
  }
}
</script>

<style scoped>
</style>