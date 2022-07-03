<template>
    <div class="body">
        <div id="main-container">
        <div id="container">
            <h1 id="title">LOGIN <span>
                <img src="logo.png" alt="">
            </span></h1>
            <form action="">
                <div class="input-group">
                    <label for="email" class="label">E-MAIL</label>
                    <input type="name" class="input" name="email" v-model="email">
                </div>

                <div class="input-group">
                    <label for="password" class="label">PASSWORD</label>
                    <input type="password" class="input pass" name="password" v-model="password">
                </div>
                <v-alert v-if="show" dismissible dense outlined>
                    invalid username or password
                </v-alert>
                <v-btn @click="Login" id="submit">LOG IN</v-btn>
                <label id="register">Not Registered?<span>
                    <router-link to="/Signup" id="create-account"> Create an account!</router-link></span></label>
            </form>
	    </div>
       </div>
    </div>
</template>
<script>
  import NavBar from "@/components/NavBar.vue";
  import axios from "axios";
  export default {
    name: "Login",
    components: {NavBar},
    data () {
      return {
      email:"",
      password:"",
      show: false,
    }
  },
    methods: {
      check_owner(id) {
        return new Promise((resolve, reject) => {
          const token = "Bearer ".concat(localStorage.getItem("usertoken"));
        console.log(token);
          axios({
            method: "get",
            url: "http://164.92.174.146/Owner/get",
            headers: { Authorization: token },
            params: {
                id: id
              },
            }).then((response) => {
                resolve(response.data.is_owner);
            });
        })
        
      },
      Login() {
          axios({
            method: "get",
            url: "http://164.92.174.146/log_in",
            params: {
                email: this.email,
                password: this.password,
              },
            }).then(async(response) => {
                localStorage.setItem("usertoken", response.data.idToken);
                let is_owner = await this.check_owner(response.data.id)
                if(is_owner === true){
                  this.$router.push({ name: "Home" ,params: { id: response.data.id}});
                }
                else {
                  throw "user is not an owner";
                }
              
            })
            .catch((err) => {
                  this.show = true;
          });
        }
   }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../style/login.css" lang="css">
</style>