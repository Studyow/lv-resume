<template>
    <div>
        <v-card flat 
        class="ma-2 mb-2" 
        color="grey lighten-5" 
        outlined>
            <div class="d-flex pa-3">
                <h4>Back-End Skills</h4>
            </div>
            <v-divider></v-divider>

            <div v-for="project in projects" :key="project.title">
                <v-layout wrap class="pa-2" >
                    <v-flex xs4 md4>
                        <div class="caption gray--text">Design tool</div>
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
                // Language
                {tool: 'javascript', title: 'Node JS', progress: '94', status: 'always'},
                {tool: 'php framework', title: 'Pure PHP & Codeigniter', progress: '96', status: 'always'},
                {tool: 'typescript', title: 'Pure Python', progress: '86', status: 'always'},
                {tool: 'php framework', title: 'Laravel', progress: '81', status: 'not-always'},

                // DB
                {tool: 'google', title: 'Firebase', progress: '93', status: 'not-always'},
                {tool: 'mysql', title: 'MySQL', progress: '91', status: 'always'},
                {tool: 'json', title: 'API`s', progress: '98', status: 'always'},
                {tool: 'vast library', title: 'GitHub', progress: '90', status: 'always'}
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