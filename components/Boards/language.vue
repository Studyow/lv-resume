<template>
  <v-card
    class="ma-2 mb-4"
    color="grey lighten-5"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-subtitle>
            English
        </v-list-item-subtitle>
        <div class="text-center">
            <v-rating
            v-model="rating1"
            background-color="orange lighten-3"
            color="orange"
            half-increments
            size="35"
            small
            ></v-rating>
        </div>

        <v-list-item-subtitle>
            Tagalog
        </v-list-item-subtitle>
        <div class="text-center">
            <v-rating
            v-model="rating2"
            background-color="orange lighten-3"
            color="orange"
            half-increments
            size="35"
            small
            ></v-rating>
        </div>

        <v-list-item-subtitle>
            Cebuano
        </v-list-item-subtitle>
        <div class="text-center">
            <v-rating
            v-model="rating3"
            background-color="orange lighten-3"
            color="orange"
            size="35"
            small
            ></v-rating>
        </div>

      </v-list-item-content>

    </v-list-item>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      rating1: 4.5,
      rating2: 3.5,
      rating3: 4,
    }),
  }
</script>