<template>
    <div class='dashboard'>
        
        <h1>Dashboard</h1>
        <v-container fluid>
            <v-layout row>
                <v-flex md6>
                    <v-card>
                        <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">{{title}}</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                        </v-img>
                        <v-card-title>
                        <div>
                            <span class="grey--text">Number 10</span><br>
                            <span>Whitehaven Beach</span><br>
                            <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange" @click="shareMessage">Share</v-btn>
                            <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: 'Hello World'
        }
    },
    methods: {
        shareMessage() {
            alert('Share Clicked!')
        }
    }
}
</script>
