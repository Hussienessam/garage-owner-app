<template>
  <div>
    <div><NavBar /></div>
    <div class="body">
      <br />
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Manage <b> Garages</b></h2>
                </div>
                <div class="col-sm-6">
                  <button @click="addGarage()" class="btn mt-2">
                    <i class="material-icons">&#xE147;</i>
                    <span>Add New Garage</span>
                  </button>
                </div>
              </div>
            </div>
            <table v-for="Garage in Garages" v-bind:key="Garage.id" class="table table-striped table-hover">
              <h3>Garage Details</h3>
              <v-container class="grey lighten-5 text-center">
                <v-row no-gutters>
                  <template v-for="n in 2">
                    <v-col :key="n" v-if="n === 1">
                      <v-card>
                        <v-card-text>
                          <h5><b>Garage Info </b></h5>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <td>Address :</td>
                                  <td>{{Garage.Address}}</td>
                                </tr>
                                <tr>
                                  <td>Longtitiude :</td>
                                  <td>{{Garage.location['long']}}</td>
                                </tr>
                                <tr>
                                  <td>Latitiude :</td>
                                  <td>{{Garage.location['lat']}}</td>
                                </tr>
                                <tr>
                                  <td>Num. of Cameras :</td>
                                  <td>{{Garage.cameraIDs.length}}</td>
                                </tr>
                                <tr>
                                  <td>Capacity :</td>
                                  <td>{{Garage.capacity}}</td>
                                </tr>
                              </thead>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                          <v-btn text color="teal accent-4" @click="editGarage()">
                            <v-icon left>
                              {{ editt }}
                            </v-icon>
                            Edit Garage
                          </v-btn>
                          <v-btn text color="teal accent-4" v-on:click="deleteGaragePopUp">
                            <v-icon left>
                              {{ deletee }}
                            </v-icon>
                            Delete Garage
                          </v-btn>
                        <v-spacer></v-spacer>
                      </v-card>
                    </v-col>

                    <v-col :key="n" v-if="n === 2">
                      <v-card>
                        <v-card-text>
                          <h5><b>Cameras </b></h5>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <td>Location</td>
                                  <td></td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2FB</td>
                                  <td>
                                      <v-btn text color="teal accent-3" v-on:click="deleteCameraPopUp">
                                        <v-icon left>
                                          {{ deletee }}
                                        </v-icon>
                                      </v-btn>
                                      <v-btn text color="teal accent-3" @click="editCamera()">
                                        <v-icon left>
                                          {{ editt }}
                                        </v-icon>
                                      </v-btn>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <a class="btn mt-2">
                          <v-btn text color="teal accent-4" @click="addCamera()">
                            <v-icon>
                              {{ pluss }}
                            </v-icon>
                            Add Camera
                          </v-btn>
                        </a>
                        <v-divider></v-divider>
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
				<br><br>
							<v-btn text color="teal accent-4" @click="showReviews()">
								<v-icon left> {{ showw }} </v-icon>
								Show Garage Reviews
							</v-btn>
              </v-container>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mdiPencil, mdiDelete, mdiPlusBox, mdiEye } from "@mdi/js";
import axios from "axios";
export default {
  name: "Home",
  components: {
    NavBar,
  },
  data () {
      return {
      editt: mdiPencil,
      deletee:mdiDelete,
      pluss: mdiPlusBox,
      showw: mdiEye,
      deleteGarage: false,
      Garages: [],
      Garage: {
        Address: "",
        cameraIDs: [],
        capacity: "",
        location: []
      },
      Cameras: [],
      Camera: {
        address: "",
        location: []
      }
    }
  },
  methods: {
    addGarage() {
      this.$router.push({ name: "AddGarage" });
    },
    editGarage(){
       this.$router.push({ name: "EditGarage" });
    },
    addCamera(){
      this.$router.push({ name: "AddCamera" });
    },
    editCamera(){
       this.$router.push({ name: "EditCamera" });
    },
    showReviews(){
       this.$router.push({ name: "ShowReviews" });
    },
    deleteGaragePopUp(){  
           this.$swal({  
                  title: "Do you want to delete this Garage?",  
                  text: "This action can't be undone",  
                  type: "warning",  
                  showCancelButton: true,  
                  confirmButtonColor: "#222d32",  
                  confirmButtonText: "Yes, Delete" ,
                  cancelButtonColor:  "#222d32"
                  }).then((result) => { // <--  
                  if (result.value) { // <-- if accepted  
                          del('status-delete/' + id);  
                          }  
                  });  
    },
    deleteCameraPopUp(){  
           this.$swal({  
                  title: "Do you want to delete this Camera?",  
                  text: "This action can't be undone",  
                  type: "warning",  
                  showCancelButton: true,  
                  confirmButtonColor: "#222d32",  
                  confirmButtonText: "Yes, Delete" ,
                  cancelButtonColor:  "#222d32"
                  }).then((result) => { // <--  
                  if (result.value) { // <-- if accepted  
                          del('status-delete/' + id);  
                          }  
                  });  
    },
    getGarages(id){
      axios({
        method: "get",
        url: "http://164.92.174.146/get_owner_garages",
        params: {
          ownerID: id,
        },
      }).then((response) => {
        console.log(response.data);
        this.Garages = response.data;
        // for(let i=0; i<this.Garages.length; i++){
        //   for(let j=0; j<this.Garages[i].cameraIDs.length; j++){
        //     this.getCameras(this.Garages[i].cameraIDs[j])
        //   }
        // }
        // console.log(this.Cameras);
      });
    },
    getCameras(camera_id){
      axios({
        method: "get",
        url: "http://164.92.174.146/Camera/get",
        params: {
          id: camera_id,
        },
      }).then((response) => {
        console.log(response.data);
        this.Cameras.push(response.data);
      });

    }
  },
  mounted() {
    this.getGarages("5");
  },
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>
