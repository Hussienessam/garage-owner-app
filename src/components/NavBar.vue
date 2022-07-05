<template>
  <v-toolbar>
  <img class="mr-5" :src="require('@/assets/logo.png')" height="110"/>
  <v-spacer></v-spacer>
  <div class="edit" v-if="show_edit">
    <v-btn @click="editProfile" icon> Edit Profile </v-btn>
    <v-icon>{{edit}}</v-icon>
  </div>
   <v-btn @click="Logout" icon> Logout </v-btn>
   <v-icon class="logout"> mdi-export</v-icon>
</v-toolbar>
</template>
<script >
 import { mdiAccountEdit } from '@mdi/js';
  export default {
     data () {
      return {
      show_edit: true,
      edit: mdiAccountEdit,
      }
     },
    methods: {
      Logout() {
        localStorage.removeItem("usertoken");
        this.$session.destroy()
        this.$router.push({ name: "Login" });
      },
      editProfile() {
        this.$session.set('show_edit', false)
        this.edit_page = false
        this.$router.push({ name: "EditProfile"});
      }
    },
    created() {
      if(this.$session.get('show_edit') === false || this.$session.get('show_edit') === true) {
        this.show_edit = this.$session.get('show_edit')
      }
    }
  }
</script>
<style scoped src="../style/navbar.css" lang="css">
</style>

        