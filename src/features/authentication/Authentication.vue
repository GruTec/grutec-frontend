<template>
  <v-container>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md6 lg5 xl3>
        <v-card>
          <v-form ref="form" lazy-validation v-model="formModel">
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="user"
                  label="Usuario"
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="Senha"
                  v-model="password"
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-btn
                  x-large
                  color="primary"
                  class="enterBtn"
                  @click="login"
                >
                  Sign in
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  x-large
                  color="primary"
                  class="enterBtn"
                  @click="signup"
                >
                  Sign up
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      right
      :timeout="8000"
      top
      vertical
      color="error"
    >
      {{ errorMessage }}
      <v-btn
        color="error"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>

export default {
  name: 'Authentication',

  data () {
    return {
      user: '',
      password: '',
      showPassword: false,
      signingIn: false,
      formModel: true,
      snackbar: false,
      errorMessage: ''
    }
  },

  methods: {
    login() {
      if(!this.$refs.form.validate()) {
        return
      }
      this.signingIn = true

      this.$store.dispatch('retrieveToken', {
        user: this.user,
        password: this.password
      })
      .then(response => {
        this.signingIn = false
        this.$router.push({ name: 'dashboard' })
      })
      .catch(error => {
        this.signingIn = false
        this.snackbar = true
        this.errorMessage = 'As credenciais não batem com nenhum registro.'
      })
    },

    signup() {
      this.$router.push({ name: 'signup'})
    }
  }
}

</script>

<style scoped lang="scss">
  form {
    width: 100%;
    padding: 30px;
  }
  .enterBtn {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
</style>