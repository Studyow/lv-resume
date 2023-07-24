<template>
  <v-container>
    <v-row justify="space-around">
      <v-card
      class="ma-2 mb-2"
      color="grey lighten-5"
      outlined
      width="100%"
      >
        <v-card-text>
          <!-- <div class="font-weight-bold mb-2">
            <h4>Work Experience</h4>
          </div> -->

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> <br>
                   <v-chip
                    class="ma-2"
                    color="teal lighten-2"
                    outlined
                    small
                    >
                    <v-icon left>
                        mdi-clock-time-eight-outline
                    </v-icon>
                    {{ message.time }}
                    </v-chip>
                </div>
                <div> Position: <v-chip>{{ message.message }}</v-chip></div>
                <div><p>{{ message.desc }}</p></div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
    overlay: false,

      messages: [
        {
          from: 'DMSF Davao Medical School Foundation',
          message: `IT SPECIALIST`,
          time: 'October 2016 – May 2017',
          desc: 'Device monitoring, web site developer, school library guidance for technologies.',
          color: 'teal darken-2',
        },
        {
          from: 'SAMATOSA SOFTWARE COMPANY',
          message: 'FRONT END JUNIOR GRAPHIC DESIGNER',
          time: 'June 2017 – | January 2018',
          desc: 'Front-end developer using html, css, pure js & Angular JS, Design graphics like web app pages, icons & logo/s. coding and designing from scratch. Using: pure js, jquery, angular js, html, css & sass, adobe: ps & ill  ',
          color: 'teal accent-3',
        },
        {
          from: 'MYBraveTrueHero Web-Solutions',
          message: 'WEB DEV | UI | UX DESIGNER',
          time: 'February 2018 – November 2019',
          desc: 'Building web sites and site optimization, coding from pure js, html, css for banks web sites, site ads, google analytics, content creators and e-commerce. Using; firebase, js, php, html, css, wordpress, SQL, adobe: ps, ill & animate',
          color: 'teal darken-2',
        },
        {
          from: 'DETAIL ONLINE agile tech company',
          message: 'GRAPHIC DESIGNER & FRONT-END ANALIST',
          time: 'December 2019 – October 2020',
          desc: 'Analize data from the systems result, Design from scratch, rush hour design with initialization to finalizing front end UI | UX Design. To design, I use to create my own template and color coding, then analizing the content to produce User Interface and Experience. Using Vue Js, pure JS, adobe ps, ill, material design, JS charts.',
          color: 'teal accent-3',
        },
        {
          from: 'NETZON TECH COMPANY',
          message: 'URL SEARCH',
          time: 'January 2021 – August 2021',
          desc: 'Collections of data around the wordl wide web, linking productions from 2,000 to 5,000 clients, then coding the rest of the DETAIL. Using: word, excel, adobe ps, google',
          color: 'teal darken-2',
        },
        {
          from: 'NTEK SYSTEM',
          message: 'JR PROGRAMMER',
          time: 'March 2022 – May 2023',
          desc: 'Developing web app like web3 for ethereum block chain, collecting minting and creating NFT Products to Marketplace, classifying applications from no-functions to functionalities, gathering data from 3,000 students and making the database and front end UI | UX. Using: JS, React JS, Vue Js, Jquery, SQL, PHP Codeigniter, adobe: ps, ill',
          color: 'teal darken-2',
        }
      ],
    }),
  }
</script>