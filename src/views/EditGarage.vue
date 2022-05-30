<template>
<div>
    <div><NavBar /></div>
    <div class="body">
    <br/>
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4> <b> Edit Garage </b> </h4>
              </div>
              <br />
              <div class="container-content">
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" v-model="Garage.Address" required />
                </div>
                <div class="form-group">
                  <label>Longtitude</label>
                  <input type="text" class="form-control" v-model="Garage.location['long']" required />
                </div>
                <div class="form-group">
                  <label>Latitude</label>
                  <input type="text" class="form-control" v-model="Garage.location['lat']" required />
                </div>
                <div class="form-group">
                  <label>Capacity</label>
                  <input class="form-control" v-model="Garage.capacity" required />
                </div>
              </div>
              <div class="modal-footer">
                 <v-btn @click="Back" class="btn btn-default" >Cancel</v-btn>
                <v-btn @click="Save" class="btn mt-2" >Save</v-btn>
              </div>
            </form>
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
      Garage: {
        Address: "",
        cameraIDs: [],
        capacity: "",
        location: []
      },
    }
  },
  methods: {
    getGarage(id){
      axios({
        method: "get",
        url: "http://164.92.174.146/Garage/get",
        params: {
          id: id,
        },
      }).then((response) => {
        this.Garage = response.data;
      });
    },
    Save() {
       axios({
        method: "put",
        url: "http://164.92.174.146/Garage/update",
        data:     JSON.stringify(this.Garage),
        headers:{ 'content-type':'application/json'}
      }).then((response) => {
         this.$router.push({ name: "Home" });
      });
     
    },
    Back() {
     this.$router.push({ name: "Home" });
    }
  },
  created() {
    this.getGarage(this.$route.params.id);
  },
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>