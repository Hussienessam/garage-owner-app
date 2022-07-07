<template>
<div>
    <div><NavBar /></div>
    <div class="body inner-page">
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
                  <input class="form-control" type="password" v-model="User.password" required />
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
        password: "",
        new_password: "",
        number: "",
      },
      old_user: {
        name: "",
        email: "",
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
        this.old_user.name = this.User.name;
        this.old_user.email = this.User.email;
        this.old_user.number = this.User.number;
      });
    },
    async update_name() {
        try {
            await axios({
            method: "POST",
            url: "http://164.92.174.146/update_name",
            data:  JSON.stringify({"name": this.User.name, "email": this.User.email}),
            headers:{ 'content-type':'application/json', Authorization: this.token}
            })
        }
        catch(err) {
            this.show = true
            throw new Error("error updating name");
        }
    },
    async update_number() {
        try {
            await axios({
                method: "POST",
                url: "http://164.92.174.146/update_number",
                data:  JSON.stringify({"number": this.User.number, "email": this.User.email}),
                headers:{ 'content-type':'application/json', Authorization: this.token}
                })
        }
        catch(err){
            this.show = true
            throw new Error ("already existing number");
        }
    },
    async update_email() {
        try {
            await axios({
                method: "POST",
                url: "http://164.92.174.146/update_email",
                data:  JSON.stringify({"newemail": this.User.email, "email": this.old_user.email}),
                headers:{ 'content-type':'application/json', Authorization: this.token}
            })
        }
        catch(err){
            this.show = true
            throw new Error("already existing email");
        };
    },
    async update_password() {
        try {
            await axios({
                method: "POST",
                url: "http://164.92.174.146/update_password",
                data:  JSON.stringify({"old_password": this.User.password, "email": this.User.email, 
                "new_password": this.User.new_password}),
                headers:{ 'content-type':'application/json', Authorization: this.token}
                })
        }
        catch(err) {
            this.show = true
            throw new Error("Invalid password")
        }
    },
    async Save() {
        this.show = false;
        try {
            if(this.old_user.name !== this.User.name) {
                await this.update_name()
            }
            if(this.old_user.number !== this.User.number) {
                await this.update_number()
            }
            if(this.old_user.email !== this.User.email) {
                await this.update_email()
            }
            if(this.User.new_password) {
                await this.update_password()
            }
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