<template>
  <v-toolbar>
  <img class="mr-5" :src="require('@/assets/logo.png')" height="110"/>
  <v-spacer></v-spacer>
   <v-btn @click="Logout" icon> Logout </v-btn>
   <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
</v-toolbar>
</template>
<script>
  // import VueSession from 'vue-session'
  // Vue.use(VueSession)
  export default {
    methods: {
      Logout() {
        this.$session.destroy()
        this.$router.push({ name: "Login" });
      }
    }
  }
</script>


        