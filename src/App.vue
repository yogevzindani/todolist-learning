<template>
  <v-app class="grey lighten-4">
    <navbar></navbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script>
import navbar from '@/components/navbar'

  export default {
    components: {navbar},
    data () {
      return {
      }
    }
  }
</script>