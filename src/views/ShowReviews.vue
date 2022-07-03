
<template>
  <div>
    <div><NavBar /></div>
    <div class="review-body">
    <v-btn class="ma-2" dark @click="Back()">
        <v-icon dark left>
          mdi-arrow-left
        </v-icon>Back
      </v-btn>
    <div class="body">
    <div class="container">
      <div v-for="Review in Reviews" v-bind:key="Review.id" class="review-list">
        <ul>
          <li>
            <div class="d-flex">
              <div class="left">
                <span>
                  <img
                    :src="avatar"
                    class="profile-pict-img img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div class="right">
                <h4>
                  {{Review.driverID.name}}
                </h4>
                <div class="country d-flex align-items-center">
                  <div class="country-name font-accent">This review was noted at 
                    {{Review.cameraID.address}}</div>
                </div>
                <div class="review-description">
                  <p>
                    {{Review.content}}
                  </p>
                </div>
                <span class="publish py-3 w-100">Published {{Review.date}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
    token: "",
    avatar: SignupAvatar,
    Reviews: [],
    Review: {
      content: "",
      date: "",
      id: "",
      driverID: "",
      cameraID: "",
      garageID: "",
    },
  }),
  methods: {
    Back() {
      this.$router.push({ name: "Home" });
    },
    getReviews(garage_id) {
      axios({
        method: "get",
        url: "http://164.92.174.146/show_garage_reviews",
        headers: { Authorization: this.token},
        params: {
          garageID: garage_id,
        },
      }).then((response) => {
        this.Reviews = response.data;
      });
    }
    },
  mounted() {
    this.getReviews(this.$session.get('garage_id'));
  },
  created() {
     if (!this.$session.get('garage_id')) {
       this.Review.garageID = this.$route.params.id;
       this.$session.set('garage_id', this.$route.params.id) 
    }
    
  },
};
</script>

<style scoped src="../style/review.css">
</style>


        