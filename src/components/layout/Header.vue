<template>
  <v-container>
    <v-card 
      color="blue darken-2"
    >
      <v-card-actions>
        <v-layout row wrap justify-end>
          <v-flex shrink md1>
            <v-spacer></v-spacer>
            <v-btn 
              primary
              to="/logout"
            >
              {{ logoutText }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>  
</template>

<script>
export default {
  name: 'Header',

  components: {},
  
  data() {
    return {
      headerTitle: 'Search Engine',
      logoutText: 'Logout'
    }
  }
}
</script>

<style scoped>

</style>