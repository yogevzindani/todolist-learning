
<template>
    <nav>
        <v-toolbar flat app class="green lighten-3">
            <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text--uppercase">
                <span class="font-weight-light">MY</span>
                <span >TODO </span>
                <span class="font-weight-light">list</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat>
                <v-icon left>add_circle</v-icon>
                <span class="font-weight-light">Add task</span>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="green lighten-2">
            <v-list>
                <v-list-tile v-for="link in links" :key=link.text router :to=link.route>
                    <v-list-tile-action>
                        <v-icon class="black--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data() {
        return{
           drawer: false,
           links: [
               { icon: 'dashboard', text: 'Dashboard', route: '/' },
               { icon: 'folder', text: 'My Projects', route: '/projects' },
               { icon: 'person', text: 'Team', route: '/team' }
           ]
        }
    }
}
</script>
