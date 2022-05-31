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
                                  <td>{{Garage.address}}</td>
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
                          <v-btn text color="teal accent-4" @click="editGarage(Garage.id)">
                            <v-icon left>
                              {{ editt }}
                            </v-icon>
                            Edit Garage
                          </v-btn>
                          <v-btn text color="teal accent-4" v-on:click="deleteGaragePopUp(Garage.id)">
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
                          <v-simple-table >
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <td>Location</td>
                                  <td></td>
                                </tr>
                              </thead>
                              <tbody>
                                <template v-for="i in Garage.cameraIDs.length">
                                <tr :key="i">
                                  <td>{{Garage.cameraIDs[i-1].address}}</td>
                                  <td>
                                      <v-btn text color="teal accent-3" v-on:click="deleteCameraPopUp(Garage.cameraIDs[i-1].id)">
                                        <v-icon left>
                                          {{ deletee }}
                                        </v-icon>
                                      </v-btn>
                                      <v-btn text color="teal accent-3" @click="editCamera(Garage.cameraIDs[i-1].id)">
                                        <v-icon left>
                                          {{ editt }}
                                        </v-icon>
                                      </v-btn>
                                  </td>
                                </tr>
                                </template>
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
      id: "",
      Garage: {
        Address: "",
        cameraIDs: [],
        capacity: "",
        location: []
      },
    }
  },
  methods: {
    addGarage() {
      this.$router.push({ name: "AddGarage" ,params: { id: this.id}});
    },
    editGarage(id){
       this.$router.push({ name: "EditGarage" , params: { id: id}});
    },
    addCamera(){
      this.$router.push({ name: "AddCamera" });
    },
    editCamera(id){
       this.$router.push({ name: "EditCamera" , params: { id: id}});
    },
    showReviews(){
       this.$router.push({ name: "ShowReviews" });
    },
    deleteGaragePopUp(id){  
           this.$swal({  
                  title: "Do you want to delete this Garage?",  
                  text: "This action can't be undone",  
                  type: "warning",  
                  showCancelButton: true,  
                  confirmButtonColor: "#222d32",  
                  confirmButtonText: "Yes, Delete" ,
                  cancelButtonColor:  "#222d32"
                  }).then((result) => {   
                  if (result.value) { 
                    axios({
                        method: "delete",
                        url: "http://164.92.174.146/Garage/delete",
                        params: {
                          id: id,
                        },
                      }).then((response) => {
                        console.log(response);
                        window.location.reload()
                      });
                  }  
                  });  
    },
    deleteCameraPopUp(id){  
           this.$swal({  
                  title: "Do you want to delete this Camera?",  
                  text: "This action can't be undone",  
                  type: "warning",  
                  showCancelButton: true,  
                  confirmButtonColor: "#222d32",  
                  confirmButtonText: "Yes, Delete" ,
                  cancelButtonColor:  "#222d32"
                  }).then((result) => {   
                  if (result.value) {   
                     axios({
                        method: "delete",
                        url: "http://164.92.174.146/Camera/delete",
                        params: {
                          id: id,
                        },
                      }).then((response) => {
                        console.log(response);
                        window.location.reload()
                      });
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
        this.$session.set('Garages', response.data);
        this.$router.go()
      });
    },
  },
  mounted() {
     this.Garages = this.$session.get('Garages')
  },
  created() {
    if (!this.$session.get('id')) {
      this.$session.start() 
      this.$session.set('id', this.$route.params.id) 
      this.getGarages(this.$session.get('id'));
    }
  },
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>
