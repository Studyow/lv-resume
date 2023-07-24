<template>
  <v-card
    class="ma-2 mb-4"
    color="grey lighten-5"
    outlined
  >
    <div class="d-flex pa-3">
        <h4>Currently learning</h4>
    </div>

    <v-divider></v-divider>

    <v-list two-line color="grey lighten-5">
      <v-list-item-group
        v-model="selected"
        active-class="teal--text"
        multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                >{{ item.headline }}</v-list-item-subtitle>

                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text>{{ item.action }}</v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-check
                </v-icon>

                <v-icon
                  v-else
                  color="teal darken-1"
                >
                  mdi-check
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      selected: [0,2,3],
      items: [
        {
          action: 'July 2023',
          headline: 'gcash, paymaya, stripe, paypal',
          subtitle: `IPFS for Infura with mumbai wallet`,
          title: 'Next JS',
        },
        {
          action: 'June 2023',
          headline: 'Ethereum',
          subtitle: `IPFS for Infura with mumbai wallet`,
          title: 'Eth web3 dev',
        },
        {
          action: 'Jan 2022',
          headline: 'Nuxt JS',
          subtitle: `Its a vue js frame work for a better looking pages`,
          title: 'vuetify',
        },
        {
          action: 'Feb 2021',
          headline: 'using api`s',
          subtitle: `it's fast , light and wide`,
          title: 'Express JS',
        },
        {
          action: 'jun 2021',
          headline: 'Oui oui',
          subtitle: 'i learned more under the node js',
          title: 'Node JS',
        },
        {
          action: 'Aug 2021',
          headline: 'Birthday gift',
          subtitle: 'it will be more smoother and control',
          title: 'vue SASS animation',
        },
        {
          action: 'Sep 2021',
          headline: 'Recipe to try',
          subtitle: 'Validate some entry for the form to handle',
          title: 'form Validation',
        },
      ],
    }),
  }
</script>