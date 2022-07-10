<template>
<div>
    <div><NavBar /></div>
    <div class="body edit-profile">
    <br/>
        <div class="modal-dialog edit-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4> <b> Edit Profile </b> </h4>
              </div>
              <br />
              <div class="container-content">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" v-model="User.name" required />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" v-model="User.email" required />
                </div>
                <div class="form-group">
                  <label>Phone number</label>
                  <input type="text" class="form-control" v-model="User.number" required />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" v-model="User.old_password" required />
                </div>
                <div class="form-group">
                  <label>New Password</label>
                  <input class="form-control" type="password" v-model="User.new_password" />
                </div>
              </div>
              <v-alert class="edit-error" v-if="show" dismissible dense outlined>
                    {{this.error}}
                </v-alert>
              <div class="modal-footer">
                 <v-btn @click="Back" class="btn btn-default" >Cancel</v-btn>
                <v-btn @click="Save" class="btn" >Save</v-btn>
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
      error:"",
      show: false,
      token: "",
      User: {
        name: "",
        id: "",
        email: "",
        old_password: "",
        new_password: "",
        number: "",
      }
    }
  },
  methods: {
    getUser(id){
      axios({
        method: "get",
        url: "http://164.92.174.146/get_by_id",
        headers:{Authorization: this.token},
        params: {
          id: id,
        },
      }).then((response) => {
        this.User = response.data;
        this.User.old_password = ""
        this.User.new_password = ""
      });
    },
    async update_user() {
        try {
            await axios({
            method: "PUT",
            url: "http://164.92.174.146/update_user",
            data:  JSON.stringify(this.User),
            headers:{ 'content-type':'application/json', Authorization: this.token}
            })
        }
        catch(err) {
            this.show = true
            throw new Error(err.response.data);
        }
    },
    async Save() {
        this.show = false;
        try {
            await this.update_user()
            this.Back()
        }
        catch(err){
            this.error = err
        }
        
    },
    Back() {
     this.$session.set('show_edit', true)
     this.$router.push({ name: "Home" });
    }
  },
  created() {
    if (!localStorage.getItem("usertoken")) {
      this.$router.push({ name: "Login" });
    }
    else{
      this.User.id = this.$session.get('id');
      this.User.is_owner = true;
      this.token = "Bearer ".concat(localStorage.getItem("usertoken"));
      this.getUser(this.$session.get('id'));
    }
  },
};
</script>

<style scoped src="../style/home.scss" lang="scss">
</style>