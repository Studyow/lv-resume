<template>
    <v-card
      class="ma-2 mb-4"
      color="grey lighten-5"
      outlined
    >
      <!-- <v-toolbar
        color="teal accent-4"
        light
      >
  
        <v-toolbar-title >Contact</v-toolbar-title>
      </v-toolbar> -->
  
      <v-list color="grey lighten-5">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
  
          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            class="pl-6"
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </template>
  
  
  <script>
    export default {
      data: () => ({
        items: [
          
          {
            action: 'mdi-cellphone',
            items: [{ title: 'PH +63 9816228084' }],
            title: 'Number',
          },
          {
            action: 'mdi-linkedin',
            items: [{ title: 'linkedin.com/in/levy021/' }],
            title: 'Linkedin',
          },
          {
            action: 'mdi-facebook',
            active: false,
            items: [{ title: 'facebook.com/leevee03' }],
            title: 'Facebook',
          },
          {
            action: 'mdi-skype',
            items: [{ title: 'Johnlevybonifacio' }],
            title: 'skype',
          },
          {
            action: 'mdi-gmail',
            items: [{ title: 'letsgetdothese@gmail.com' }],
            title: 'Email',
          },
        ],
      }),
    }
  </script>