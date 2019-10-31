<template>
  <v-container>
    <v-card height="650px">
      <v-layout row justify-center align-center>
        <v-flex px-5 mt-2>
         <v-card height="90px" dark>
           <v-layout row wrap justify-center>
             <v-flex ml-5 align-self-center>
               <v-card-title>
                 {{ searchTitle }}
               </v-card-title>
               <v-card-text>
                 {{ searchSubtitle }}
               </v-card-text>
             </v-flex>
           </v-layout>
          </v-card>
          <v-layout row justify-center align-center>
            <v-flex px-3 mt-2>
              <v-card height="200px">
                <v-form>
                  <v-col cols="12">
                    <v-combobox
                      :items="systemItems"
                      label="Select the systems"
                      multiple
                      chips
                      required
                      :disabled="comboBoxControl"
                      :value="comboValue"
                      @input="onUpdate"
                    >
                    </v-combobox>
                  </v-col>
                  <v-layout row wrap justify-center align-center>
                    <v-flex ml-5 mr-5 mt-10>
                      <v-btn
                        large
                        min-width="100%"
                        color="primary"
                        @click="submit"
                      >
                        Submit
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-center align-center>
                    <v-flex px-3 mt-9>
                      <v-card
                        v-show="needAuth"
                        height="310px"
                      >
                        <v-card
                          height="50px"
                          dark
                        >
                          <v-layout row wrap justify-center align-center>
                            <v-flex mb-2>
                              <v-card-title>
                                {{ needAuthInfo }}
                              </v-card-title>
                            </v-flex>
                          </v-layout>
                        </v-card>
                        <v-layout row wrap justify-center align-center>
                          <v-flex px-3 ml-10 mr-10 mt-3>
                            
                            <v-form lazy-validation>
                              <v-text-field
                                label="Username"
                                v-model="user"
                                required
                              >
                              </v-text-field>

                              <v-text-field
                                label="Password"
                                :type="showPassword ? 'text' : 'password'"
                                v-model="password"
                                required
                              >
                              </v-text-field>
                              <v-flex px-3 mt-10>
                                <v-btn 
                                  large 
                                  min-width="100%"
                                  @click="verifyAuthentication"
                                >
                                  Authenticate
                                </v-btn>
                              </v-flex>
                            </v-form>
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>  
</template>

<script>
export default {
  name: 'Search',

  components: {},

  data() {
    return {
      needAuthInfo: 'This system needs authentication',
      showPassword: false,
      user: '',
      password: '',
      searchTitle: 'Perform your searches',
      searchSubtitle: 'Search all systems or choose specific systems',
      systemModel: {
        arisp: false,
        arpenp: false,
        cadesp: false,
        caged: false,
        censec: false,
        detran:false,
        infocrim: false,
        jucesp: false,
        siel: false,
        sivec: false
      },
      systemItems: [
        'Arisp',
        'Arpenp', 
        'Cadesp', 
        'Caged', 
        'Censec',
        'Detran',
        'Infocrim',
        'Jucesp',
        'Siel',
        'Sivec'
      ],
      containsAuth: [
        'Arisp',
      ],
      comboValue: '',
      needAuth: false,
      currentToAuth: '',
      comboBoxControl: false
    }
  },

  methods: {
    onUpdate($event) {
      this.comboValue = $event

      for (const value of this.comboValue) {
        if(this.containsAuth.includes(value)) {
          this.currentToAuth = value
          this.needAuth = true
          this.comboBoxControl = true

        } else {
          this.currentToAuth = ''
          this.needAuth = false
        }
      }
    },
    submit() {
      this.filteringSystemsToRequest()
      this.clearComboBox()
      this.resetComboBox()
      // FETCH HERE
    },
    filteringSystemsToRequest() {
      for (const system of this.comboValue) {
        this.systemModel[system] = true
      }
    },
    clearComboBox() {
      this.comboValue = ''
    },
    verifyAuthentication() {
      if(this.user === 'fiap' && this.password === 'mpsp') {
        this.resetComboBox()
      } else {
        this.needAuth = false
        this.comboBoxControl = true
        this.currentToAuth = ''
      }
    },
    resetComboBox() {
      this.needAuth = false
      this.comboBoxControl = false
      this.currentToAuth = ''
    }
  }
}
</script>