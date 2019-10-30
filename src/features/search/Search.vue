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
                      :value="comboValue"
                      @input="onUpdate"
                    >
                    </v-combobox>
                  </v-col>
                  <v-layout row wrap justify-center align-center>
                    <v-flex ml-5 mt-10>
                      <v-btn
                        large
                        color="success"
                        @click="submit"
                      >
                        Submit
                      </v-btn>
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
      comboValue: ''
    }
  },

  methods: {
    onUpdate($event) {
      this.comboValue = $event
    },
    submit() {
      this.filteringSystemsToRequest()
      // FETCH HERE
    },
    filteringSystemsToRequest() {
      for (const system of this.comboValue) {
        this.systemModel[system] = true
      }
    }
  }
}
</script>

<style scoped>

</style>