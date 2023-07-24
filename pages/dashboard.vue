<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">Experience Dashboard</h1>
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

                <v-flex xs12 md3>
                    <!-- <Profile_dev/> -->
                    <DevSkills/>
                    <!-- <Contact/> -->
                </v-flex>
                
                <v-flex xs12 md6>
                    <!-- <Experience/> -->
                    <FrontEnd/>
                    <div class="mt-4">
                        <BackEnd/>
                    </div>
                </v-flex>

                <v-flex xs6 md3>
                    <DashHeader/>
                    <Current/>
                    <Language/>
                </v-flex>
                
            </v-layout>


        </v-container>        
    </div>
</template>

<script>
import FrontEnd from '../components/Boards/front-end.vue'
import BackEnd from '../components/Boards/back-end.vue'
import Current from '../components/Boards/current.vue'
import DashHeader from '../components/Boards/dash-header.vue'
// import Profile_dev from '../components/Boards/profile-dev.vue'
import DevSkills from '../components/homePage/devSkills.vue'
// import Experience from '../components/Boards/experience.vue'
// import Contact from '../components/Boards/contact.vue'
import Language from '../components/Boards/language.vue'

export default {
  components: { FrontEnd, Current, DashHeader, BackEnd, Language, DevSkills },
     
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