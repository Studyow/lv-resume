<template>
  <div>
    <v-layout wrap>
  
    <v-flex xs6 md6>
      <div>
        <v-card
          class="mx-2 my-2"
          color="grey lighten-5"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">
                FRONT-END
                <v-btn
                  color="dark"
                  icon
                  class="float-right"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </div>
              <v-list-item-title class="mb-1 text-center">
                <v-progress-circular
                  :rotate="-90"
                  :size="70"
                  :width="12"
                  :value="value1"
                  color="teal darken-1"
                >
                  {{ value1 }}%
                </v-progress-circular>
              </v-list-item-title>
              <v-list-item-subtitle class="text-center">
                Front-end Development Status
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-flex>

    <v-flex xs6 md6>
      <div>
        <v-card
          class="mx-2 my-2"
          color="grey lighten-5"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">
                BACK-END
                <v-btn
                  color="dark"
                  icon
                  class="float-right"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </div>
              <v-list-item-title class="mb-1 text-center">
                <v-progress-circular
                  :rotate="-90"
                  :size="70"
                  :width="12"
                  :value="value2"
                  color="teal darken-1"
                >
                  {{ value2 }}%
                </v-progress-circular>
              </v-list-item-title>
              <v-list-item-subtitle class="text-center">
                Back-end Development Status
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-flex>

  </v-layout>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        interval: {},
        value1: 90,
        value2: 93,
      }
    }
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>