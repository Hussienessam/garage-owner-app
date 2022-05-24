<template>
    <div class="body">
        <div><NavBar /></div>
        <div id="main-container">
        <div id="container">
            <h1 id="title">LOGIN <span>
                <img src="logo.png" alt="">
            </span></h1>
            <form action="" autocomplete="off">
                <div class="input-group">
                    <label for="email" class="label">E-MAIL</label>
                    <input autocomplete="false" type="email" class="input" name="email">
                </div>

                <div class="input-group">
                    <label for="password" class="label">PASSWORD</label>
                    <input type="password" class="input pass" name="password">
                </div>
                <div class="flex margin">
                    <span id="remember-me-group">
                        <input type="checkbox" name="remember-me" id="check-box">
                        <label for="remember-me" id="remember-me">Remember Me</label>
                    </span>
                    <a href="/" id="forget-password">Forget Password?</a>
                </div>
                <button type="submit" id="submit">LOG IN</button>
                <label id="register">Not Registered?<span>
                    <router-link to="/Signup">Create an account!</router-link></span></label>
            </form>
	    </div>
       </div>
    </div>
</template>
<script>
  import NavBar from "@/components/NavBar.vue";
  export default {
    name: "Login",
    components: {NavBar}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../style/login.css" lang="css">
</style>