<template>
    <div max-width="100%">
    <v-card
      class="ma-2 mb-4"
      color="grey lighten-5"
      outlined
    >
      <v-img
        src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/307948963_641504883991162_2759038654281384032_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHIgW7OHA91FumWongV4NCfZ8sR39maFqNnyxHf2ZoWo4m0fFZ2_cyMa3wYxHOjxFejb_kDczAruCawHRTUb2IX&_nc_ohc=Gd7JknUiXp0AX_BS859&_nc_ht=scontent.fcgy1-1.fna&_nc_e2o=f&oh=00_AfBNDJoIT8sG_Xl4m7tIzPVN57rYlfnUy-tQanQaOnapLg&oe=64C20EC0"
        height="200px"
      ></v-img>
  
      <v-card-title>
        <h5>John Levy Bonifacio</h5>
      </v-card-title>
  
      <v-card-subtitle>
        Programmer<br>
      </v-card-subtitle>
      
  
    </v-card>
    </div>
  </template>
  
  <script>
    export default {
      data: () => ({
        show: false,
        recent: [
          {
            active: true,
            avatar: 'https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png',
            title: 'Next JS',
          }
        ],
        previous: [{
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        }],
      }),
    }
  </script>
  