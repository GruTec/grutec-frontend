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
                  Entrar
                  <template v-slot:loader>
                    <span class="pr-3">Entrando</span>
                    <v-progress-circular
                      indeterminate
                      size="16"
                      width="2"
                      color="#AAA"
                    >
                    </v-progress-circular>
                  </template>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
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
      formModel: true,
      presentationTitle: "Grutec Search Engine",
      presentationText: "A grutec constrói solução de busca inteligentes para o seu negócio."
    }
  },

  methods: {
    login() {

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