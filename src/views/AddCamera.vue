<template>
<div>
    <div><NavBar /></div>
    <div class="body inner-page">
    <br/>
    <div>
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4> <b> Add Camera </b></h4>
              </div>
              <br />
              <div class="container-content">
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" class="form-control" v-model="Camera.address" required />
                </div>
              </div>
              <div class="modal-footer">
                <v-btn @click="Back" class="btn btn-default" >Cancel</v-btn>
                <v-btn @click="Add" class="btn" >Add</v-btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  components: {
    NavBar,
  },
  data(){
    return{
      token: "",
      Camera: {
        address: "",
        garageID: ""
      },
    }
  },
  methods: {
     Add() {
       axios({
        method: "post",
        url: "http://164.92.174.146/GarageCamera/add",
        data:     JSON.stringify(this.Camera),
        headers:{ 'content-type':'application/json', Authorization: this.token}
      }).then((response) => {
         this.$router.push({ name: "Home" , params: { update: true}});
      });
     
    },
    Back() {
     this.$router.push({ name: "Home" });
    }
  },
  created() {
    if (!localStorage.getItem("usertoken")) {
      this.$router.push({ name: "Login" });
    }
    else{
      this.token = "Bearer ".concat(localStorage.getItem("usertoken"));
      this.Camera.garageID = this.$route.params.id;
    }
  },
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>