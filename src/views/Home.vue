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
                  <a href="#addGarage" class="btn mt-2" data-toggle="modal">
                    <i class="material-icons">&#xE147;</i>
                    <span>Add New Garage</span>
                  </a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <h3>Garage no.1</h3>
              <v-container class="grey lighten-5 text-center">
                <v-row no-gutters>
                  <template v-for="n in 2">
                    <v-col :key="n" v-if="n === 1">
                      <v-card>
                        <v-card-text>
                          <p><b>Garage Info </b></p>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th>Address :</th>
                                  <th>Dokki</th>
                                </tr>
                                <tr>
                                  <th>Longtitiude :</th>
                                  <th>259.21.69</th>
                                </tr>
                                <tr>
                                  <th>Latitiude :</th>
                                  <th>12.398.024</th>
                                </tr>
                                <tr>
                                  <th>Num. of Cameras :</th>
                                  <th>8</th>
                                </tr>
                                <tr>
                                  <th>Capacity :</th>
                                  <th>200</th>
                                </tr>
                              </thead>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <a href="#editGarage" class="edit" data-toggle="modal">
                          <v-btn text color="teal accent-4" @click="reveal = true">
                            <v-icon left>
                              {{ icons.mdiPencil }}
                            </v-icon>
                            Edit Garage
                          </v-btn>
                        </a>
                        <a href="#deleteGarage" class="delete" data-toggle="modal">
                          <v-btn text color="teal accent-4" @click="reveal = true">
                            <v-icon left>
                              {{ icons.mdiDelete }}
                            </v-icon>
                            Delete Garage
                          </v-btn>
                        </a>
                        <v-spacer></v-spacer>
                      </v-card>
                    </v-col>

                    <v-col :key="n" v-if="n === 2">
                      <v-card>
                        <v-card-text>
                          <p><b>Cameras </b></p>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th>Location</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2FB</td>
                                  <td>
                                    <a href="#deleteCamera" class="delete" data-toggle="modal">
                                      <v-btn text color="teal accent-4" @click="reveal = true">
                                        <v-icon left>
                                          {{ icons.mdiDelete }}
                                        </v-icon>
                                      </v-btn>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3CD</td>
                                  <td>
                                    <a href="#deleteCamera" class="delete" data-toggle="modal">
                                      <v-btn text color="teal accent-4" @click="reveal = true">
                                        <v-icon left>
                                          {{ icons.mdiDelete }}
                                        </v-icon>
                                      </v-btn>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <a href="#addCamera" class="btn mt-2" data-toggle="modal">
                          <v-btn text color="teal accent-4" @click="reveal = true">
                            <v-icon>
                              {{ icons.mdiPlusBox }}
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
                <!-- <a href="#showReviews" data-toggle="modal">
                  <v-btn text color="teal accent-4" @click="reveal = true">
                    <v-icon left>
                      {{ icons.mdiEye }}
                    </v-icon>
                    Show Garage Reviews
                  </v-btn>
                </a> -->
				<v-expansion-panels>
					<v-expansion-panel>
					<v-expansion-panel-header>
							<v-btn text color="teal accent-4" @click="reveal = true">
								<v-icon left> {{ icons.mdiEye }} </v-icon>
								Show Garage Reviews
							</v-btn>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<Review/>
					</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
              </v-container>
            </table>
          </div>
        </div>
      </div>
      <!-- Add Garage -->
      <div id="addGarage" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Add Garage</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
              </div>
              <br />
              <div class="container-content">
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Longtitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Latitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Num. of Cameras</label>
                  <input type="email" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Capacity</label>
                  <input class="form-control" required />
                </div>
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                <input type="submit" class="btn mt-2" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Edit Garage -->
      <div id="editGarage" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Edit Garage</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
              </div>
              <br />
              <div class="container-content">
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Longtitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Latitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Num. of Cameras</label>
                  <input type="email" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Capacity</label>
                  <input class="form-control" required />
                </div>
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                <input type="submit" class="btn btn-2" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Delete Garage -->
      <div id="deleteGarage" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Delete Garage</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
              </div>
              <br /><br />
              <div class="container-content">
                <p>
                  Are you sure you want to delete this Garage from the system?
                </p>
                <p class="text-danger">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div class="modal-footer">
                <input
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" class="btn btn-2" value="Delete" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
	<!-- Delete Camera -->
      <div id="deleteCamera" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Delete Camera</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
              </div>
              <br /><br />
              <div class="container-content">
                <p>
                  Are you sure you want to delete this Camera from the system?
                </p>
                <p class="text-danger">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div class="modal-footer">
                <input
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" class="btn btn-2" value="Delete" />
              </div>
            </form>
          </div>
        </div>
      </div>
	<!-- Add Camera -->
      <div id="addCamera" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Add Camera</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
              </div>
              <br />
              <div class="container-content">
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Longtitude</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Latitude</label>
                  <input type="text" class="form-control" required />
                </div>
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                <input type="submit" class="btn mt-2" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Review from "@/components/Review.vue";
import { mdiPencil, mdiDelete, mdiPlusBox, mdiEye } from "@mdi/js";

export default {
  name: "Home",
  components: {
    NavBar,
	Review
  },
  data: () => ({
    icons: {
      mdiPencil,
      mdiDelete,
      mdiPlusBox,
      mdiEye,
    },
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../style/home.scss" lang="scss">
</style>
