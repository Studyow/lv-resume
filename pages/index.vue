<template>
  <div class="dashboard">
      <h1 class="subheading grey--text">RESUME</h1>
      <div caption>
          <h5 color="green darken-2" class="list-group-item" v-show="date">
          <v-icon
              small
              color="teal"
              >
              mdi-calendar-month
          </v-icon>
              {{ date }}
          </h5>
      </div>
      <v-container class="my-5">

          <v-layout row wrap class="d-flex justify-center">

              <v-flex xs12 md4 lg3>

                <div>
                  <Profile/>
                </div>

                <div>
                  <h5>EDUCATION</h5>
                  <Education/>
                </div>

                <div>
                  <h5>SKILLS</h5>
                  <DevSkills/>
                </div>

              </v-flex>
              
              <v-flex xs12 md8 lg7>

                <div>
                  <h5>CAREER OBJECTIVE</h5>
                  <div max-width="100%">
                    <v-card
                      class="ma-2 mb-4"
                      color="grey lighten-5"
                      outlined
                    >
                      <p class="pa-4">
                        &nbsp; "Graduate of computer science with experience working across the full-stack of software development.
                        I have designed 15 web app, build atleast 20 web sites,
                        and 3 web3 development env as front-end and back-end solution."
                        <br><br>
                        &nbsp; "PHP developer with extensive experience working with school data. I am looking to continue
                        developing my skills by collaborating with a Hybrid Tech team of experienced builders,
                        I am more comfortable working alone while working with group settings."
                      </p>
                    </v-card>
                  </div>
                </div>

                <div>
                  <h5>WORK EXPERIENCE</h5>
                  <Experience/>
                </div>

              </v-flex>

              <v-flex xs12 md12 lg2>
                <Location/>
                <!-- <h5>CONTACT ME</h5> -->
                <ContactMe/>
              </v-flex>
              
          </v-layout>


      </v-container>        
  </div>
</template>

<script>
import Experience from '../components/Boards/experience.vue'
import Profile from '../components/homePage/profile.vue'
import Education from '../components/homePage/education.vue'
import DevSkills from '../components/homePage/devSkills.vue'
import ContactMe from '../components/homePage/contactMe.vue'
import Location from '../components/homePage/location.vue'

export default {
  components: { Education, Profile, DevSkills, Experience, ContactMe, Location },
   
   data: () => ({
        date: '',
      }),
      methods: {
        printDate: function () {
          return new Date().toLocaleDateString();
        },
      },
      mounted: function () {
       this.date = this.printDate();
      },
}
</script>


<style>
.v-main__wrap {
  background-color: #ECEFF1;
}

</style>

<!-- <script>
export default {
  name: 'IndexPage',
}
</script> -->
