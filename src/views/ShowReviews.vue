
<template>
<div>
    <div><NavBar /></div>
    <div class="body">
    <br/>

    <v-btn class="ma-2" dark @click="Back()">
        <v-icon dark left>
          mdi-arrow-left
        </v-icon>Back
    </v-btn>

    <v-card max-width="750" class="mx-auto">

      <v-list three-line>
        <template v-for="item in Reviews">

          <v-subheader v-if="item.date" :key="item.cameraID.address" v-text="item.cameraID.address"></v-subheader>
          <v-divider v-else-if="divider" :key="item.cameraID.address" :inset="inset"></v-divider>

          <v-list-item v-else :key="item.content">
            <v-list-item-avatar>
              <v-img :src="avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title >{{item.content}}</v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        </template>
      </v-list>
    </v-card>
  </div>
</div>
</template>


<script>
import axios from "axios";
import SignupAvatar from "../assets/UserDefaultAvatar.png";
import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      NavBar,
    },
    data: () => ({
      avatar: SignupAvatar,
      divider: true, 
      inset: true ,
      Reviews: [],
      Review:{
        content:"",
        date:"",
        id:"",
        driverID:"",
        cameraID:""
      }
    }),
    methods: {
      Back() {
        this.$router.push({ name: "Home" });
      },
        getReviews(garage_id){
        axios({
          method: "get",
          url: "http://164.92.174.146/show_garage_reviews",
          params: {
            garageID: garage_id,
          },
        }).then((response) => {
          this.Reviews = response.data;
        });
    }, 
  },
  mounted() {
    this.getReviews("MiRMzcYZlgHel32RQrin");
  },
  }
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>


        