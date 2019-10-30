<template>
  <v-container>
    <v-layout justify-center>
      <v-flex>
        <v-card width="60%" height="925px">
          <v-flex>
            <v-card dark>
              <v-card-actions>
                <v-btn
                  large
                  color="primary"
                  @click="backToLogin"
                >
                  Singin
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-layout row child-flex class="mt-5 mx-3">
            <v-card height="825px">
              <v-layout justify-center class="mt-5 mx-3">
                <v-flex align-self-center>
                  <form>
                    <v-text-field
                      v-model="username"
                      label="Username"
                      required
                    >
                    </v-text-field>
                    
                    <v-text-field
                      v-model="password"
                      label="Password"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      v-model="name"
                      label="Name"
                      required
                    >
                    </v-text-field>
                    
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      required
                    >
                    </v-text-field>

                    <v-btn 
                      large 
                      @click="registerUser"
                    >
                      Submit
                    </v-btn>
                  </form>
                </v-flex>
              </v-layout>
            </v-card>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Signup',
  
  components: {},

  data() {
    return {
      username: '',
      password: '',
      name: '',
      email: '',
    }
  },

  methods: {
    backToLogin() {
      this.$router.push({ name: 'authentication' })
    },

    registerUser() {
      this.$store.dispatch('registerUser', {
        username: this.username,
        password: this.password,
        name: this.name,
        email: this.email
      })
      .then(response => {
        this.cleanForm()
        this.$router.push({ name: 'authentication' })
      })
      .catch(error => {
        console.log(error)
      })
    },

    cleanForm() {
      this.username = ''
      this.password = ''
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style scoped>

</style>