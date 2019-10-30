<template>
  <v-container>
    <v-card 
      color="blue darken-2"
    >
      <v-card-actions>
        <v-layout column wrap align-end>
          <v-flex>
            <v-btn 
              primary
              right
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