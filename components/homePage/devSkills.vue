<template>
    <div max-width="100%">
    <v-card
      class="ma-2 mb-4"
      color="grey lighten-5"
      outlined
    >
        <v-card-text>
            <v-card
                class="mx-auto"
                max-width="500"
                outlined
            >
                <v-list subheader>
                <v-subheader>Recent language</v-subheader>

                <v-list-item
                    v-for="chat in recent"
                    :key="chat.title"
                >
                    <v-list-item-avatar>
                    <v-img
                        :alt="`${chat.title} avatar`"
                        :src="chat.avatar"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                </v-list>
            </v-card>
        </v-card-text>
  
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
          },
          {
            active: true,
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            title: 'React JS',
          },
          {
            active: true,
            avatar: 'https://mpng.subpng.com/20190627/ttx/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895b06253.7824611015616144857225.jpg',
            title: 'Java Script',
          },
          {
            avatar: 'https://i.stack.imgur.com/KGl5c.png',
            title: 'Nuxt JS',
          },
          {
            avatar: 'https://w7.pngwing.com/pngs/70/60/png-transparent-vue-js-javascript-library-github-github-angle-text-triangle.png',
            title: 'Vue JS',
          },
          {
            avatar: 'https://e7.pngegg.com/pngimages/119/167/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail.png',
            title: 'Fire Base',
          },
          {
            avatar: 'https://banner2.cleanpng.com/20180412/kye/kisspng-python-programming-language-computer-programming-language-5acfdc3636bac7.8891188615235717662242.jpg',
            title: 'Python',
          },
          {
            avatar: 'https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png',
            title: 'PHP',
          },
          {
            avatar: 'https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo.png',
            title: 'SQL',
          },
          {
            avatar: 'https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png',
            title: 'C++',
          },
          {
            avatar: 'https://www.clipartmax.com/png/middle/218-2181371_logo-git-git-icon.png',
            title: 'Git',
          },
        ],
        previous: [{
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        }],
      }),
    }
  </script>
  
  <style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  </style>