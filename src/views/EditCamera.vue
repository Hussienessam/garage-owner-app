<template>
<div>
    <div><NavBar /></div>
    <div class="body">
    <br/>
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4> <b> Edit Camera </b> </h4>
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
      Camera: {
        address: "",
        id: "",
      },
    }
  },
  methods: {
     getCamera(id){
      axios({
        method: "get",
        url: "http://164.92.174.146/Camera/get",
        params: {
          id: id,
        },
      }).then((response) => {
        this.Camera = response.data;
      });
    },
    Save() {
       axios({
        method: "put",
        url: "http://164.92.174.146/Camera/update",
        data:     JSON.stringify(this.Camera),
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
    this.getCamera(this.$route.params.id);
  },
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>