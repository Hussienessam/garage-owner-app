<template>
  <div>
    <div><NavBar /></div>
    <!-- <v-card>
    <v-toolbar
      flat
      color="blue-grey"
      dark
    >
      <v-toolbar-title>Submit a post</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        filled
        label="Title"
        value="My new post"
      ></v-text-field>

      <v-textarea
        filled
        label="Text"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
      ></v-textarea>

    </v-card-text>

    <v-divider></v-divider>
  </v-card> -->
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
                  <a
                    href="#addEmployeeModal"
                    class="btn mt-2"
                    data-toggle="modal"
                    ><i class="material-icons">&#xE147;</i>
                    <span>Add New Garage</span></a
                  >
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
			<h3>Garage no.1</h3>
              <v-card>
                <v-card-text>
					<thead>
						<tr>
							<th>Address :</th>
							<th> Dokki </th>
						</tr>
						<tr>
							<th>Longtitiude :</th>
							<th> 259.21.69 </th>
						</tr>
						<tr>
							<th>Latitiude :</th>
							<th> 12.398.024 </th>
						</tr>
						<tr>
							<th>Num. of Cameras :</th>
							<th> 8 </th>
						</tr>
							<th>Capacity :</th>
							<th> 200 </th>

					</thead>
					<!-- <p><b> Location : </b></p>
					<label class="inline-block"> Dokki </label>
					<p><b> Num. of Cameras :  </b></p>
					<p><b> Capacity :  </b></p>
					<p><b> Actions :  </b></p> -->
                </v-card-text>

				<v-card-actions class="right-centered">
					<a href="#editEmployeeModal" class="edit" data-toggle="modal">
						<!-- <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>Edit Garage -->
						<v-btn text color="teal accent-4" @click="reveal = true">
							<v-icon left>
								{{ icons.mdiPencil }}
							</v-icon>
							Edit Garage
						</v-btn>
					</a>
                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
						<!-- <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>Delete Garage -->
						<v-btn text color="teal accent-4" @click="reveal = true">
							<v-icon left>
								{{ icons.mdiDelete }}
							</v-icon>
							Delete Garage
						</v-btn>
					</a>
				
				</v-card-actions>

                <v-divider></v-divider>
              </v-card>
              <!-- <thead>
                <tr>
                  <th>Location</th>
                  <th>Num. of Cameras</th>
                  <th>Capacity</th>
                  <th>Actions</th>
                </tr>
              </thead> -->
              <!-- <tbody>
                <tr>
                  <td>Thomas Hardy</td>
                  <td>thomashardy@mail.com</td>
                  <td>89 Chiaroscuro Rd, Portland, USA</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      data-toggle="modal"
                      ><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                        >&#xE254;</i
                      ></a
                    >
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                      ><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                        >&#xE872;</i
                      ></a
                    >
                  </td>
                </tr>
              </tbody> -->
            </table>
          </div>
        </div>
      </div>
      <!-- Add Modal HTML -->
      <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Add Garage</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
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
                <input
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" class="btn mt-2" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Edit Modal HTML -->
      <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Edit Garage</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
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
                <input
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" class="btn btn-2" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Delete Modal HTML -->
      <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="text-whitesmoke">Delete Garage</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
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
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import {
    mdiPencil,
    mdiDelete,
  } from '@mdi/js'

export default {
  name: "HelloWorld",
  components: {
    NavBar,
  },
  data: () => ({
      icons: {
        mdiPencil,
        mdiDelete,
      },
    }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  color: #566787;
  background: #222d32;
  font-family: "Varela Round", sans-serif;
  font-size: 13px;
  height: 100vh;
  margin: 0;
  padding: 0;
}
/* .table-responsive {
    margin: 30px 0;
} */
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  min-width: 1000px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #1a2226;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
/* table.table tr th:first-child {
	width: 100px;
}
table.table tr th:last-child {
	width: 100px;
} */
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
}
table.table td a:hover {
  color: #2196f3;
}
table.table td a.edit {
  color: #ffc107;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
/* Custom checkbox */
/* .custom-checkbox {
	position: relative;
}
.custom-checkbox input[type="checkbox"] {    
	opacity: 0;
	position: absolute;
	margin: 5px 0 0 3px;
	z-index: 9;
}
.custom-checkbox label:before{
	width: 18px;
	height: 18px;
}
.custom-checkbox label:before {
	content: '';
	margin-right: 10px;
	display: inline-block;
	vertical-align: text-top;
	background: white;
	border: 1px solid #bbb;
	border-radius: 2px;
	box-sizing: border-box;
	z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	content: '';
	position: absolute;
	left: 6px;
	top: 3px;
	width: 6px;
	height: 11px;
	border: solid #000;
	border-width: 0 3px 3px 0;
	transform: inherit;
	z-index: 3;
	transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
	border-color: #03A9F4;
	background: #03A9F4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
	color: #b8b8b8;
	cursor: auto;
	box-shadow: none;
	background: #ddd;
} */
/* Modal styles */
.modal .modal-dialog {
  max-width: 400px;
}
.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
  padding: 20px 30px;
  background-color: #1a2226;
}
.modal .modal-content {
  border-radius: 3px;
  font-size: 14px;
}
.modal .modal-footer {
  background: #ecf0f1;
  border-radius: 0 0 3px 3px;
}
.modal .modal-title {
  display: inline-block;
}
.modal .form-control {
  border-radius: 2px;
  box-shadow: none;
  border-color: #dddddd;
  font-size: 14px;
}
.modal textarea.form-control {
  resize: vertical;
}
.modal .btn {
  border-radius: 2px;
  min-width: 100px;
}
.modal form label {
  font-weight: normal;
}
.text-whitesmoke {
  color: whitesmoke;
}
</style>
