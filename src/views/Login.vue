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
                <div class="flex margin">
                    <span id="remember-me-group">
                        <input type="checkbox" name="remember-me" id="check-box">
                        <label for="remember-me" id="remember-me">Remember Me</label>
                    </span>
                    <a href="/" id="forget-password">Forget Password?</a>
                </div>
                <v-alert v-if="show" dismissible dense outlined>
                    Invalid email or password
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
      error: ""
    }
  },
    methods: {
    Login() {
        axios({
        method: "get",
        url: "http://164.92.174.146/log_in",
        params: {
            email: this.email,
            password: this.password,
          },
      }).then((response) => {
        //   this.$session.start() 
        //   this.$session.set('first_login', true) 
          this.$router.push({ name: "Home" ,params: { id: response.data.id}});
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