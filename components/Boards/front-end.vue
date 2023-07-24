<template>
    <div>
        <v-card flat 
        class="ma-2 mb-2" 
        color="grey lighten-5" 
        outlined>
            <div class="d-flex pa-3">
                <h4>Front-End Skills</h4>
            </div>
            <v-divider></v-divider>

            <div v-for="project in projects" :key="project.title">
                <v-layout wrap class="pa-2" >
                    <v-flex xs4 md4>
                        <div class="caption gray--text">{{ project.tool }}</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs4 sm4 md5>
                        <div class="caption gray--text">
                            progress
                            <span class="pl-2 font-weight-medium">
                                {{project.progress}}%
                            </span>
                        </div>
                        <v-progress-linear
                        v-model="project.progress"
                        color="teal accent-4"
                        height="4"
                        class="mt-2"
                        >
                        <template>
                            <strong class="caption black--text"></strong>
                        </template>
                        </v-progress-linear>
                    </v-flex>
                    <v-flex xs4 md3 class="pl-2">
                        <div class="float-right">
                            <v-chip
                            :class="`project ${project.status}`"
                            class="ma-2 font-weight-light"
                            small
                            >
                            {{ project.status }}
                            </v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </div>
        </v-card>
    </div>
</template>

<script>

export default {
    data() {
        return {
            projects: [
                {tool: 'react framework', title: 'Next JS', progress: '88', status: 'always'},
                {tool: 'js framework', title: 'Vue JS', progress: '92', status: 'always'},
                {tool: 'js framework', title: 'React JS', progress: '90', status: 'always'},
                {tool: 'web framework', title: 'Nuxt JS', progress: '90', status: 'always'},
                {tool: 'modern & pure js', title: 'JavaScript', progress: '95', status: 'always'},
                
                {tool: 'dom', title: 'HTML 5', progress: '90', status: 'always'},
                {tool: 'framework', title: 'Bootstrap', progress: '88', status: 'not-always'},
                {tool: 'blog', title: 'Wordpress DIVI', progress: '95', status: 'always'},

                {tool: 'css', title: 'SASS/CSS', progress: '90', status: 'always'},
                {tool: 'adobe', title: 'Illustrator', progress: '95', status: 'always'},
                {tool: 'adobe', title: 'Photoshop', progress: '90', status: 'always'},
            ]
        }
    }
}
</script>


<style>
.project.always {
    border: 1px solid #1DE9B6;
    color: #fff;
    background: #1DE9B6 !important;
}
.project.not-always {
    border: 1px solid #E53935;
    color: #fff;
    background: #E53935 !important;
}
</style>