
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
        <template v-for="Review in Reviews">

          <v-subheader v-if="Review.content" :key="Review.contnet" v-text="Review.date"></v-subheader>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="Review.content"></v-list-item-title>
              <v-list-item-subtitle v-html="Review.driverID.name"></v-list-item-subtitle>
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
        cameraID:"",
        garageID:""
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
    this.getReviews(this.Review.garageID);
  },
  created() {
    this.Review.garageID = this.$route.params.id;
  }
  }
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>


        