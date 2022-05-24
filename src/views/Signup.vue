<template>
    <div id="main-container">
        <div id="container">
            <h1 id="title">Create your account</h1>
            <form action="">
                <div class="input-group">
                    <input type="email" class="input" name="email" placeholder="Email">
                </div>
                <div class="input-group">
                    <input type="email" class="input" name="name" placeholder="Name">
                </div>
                <div class="input-group">
                    <input type="email" class="input" name="number" placeholder="Phone Number">
                </div>
                <div class="input-group">
                    <input type="password" class="input pass" name="password" placeholder="Password">
                </div>
                <div class="input-group">
                    <input type="password" class="input pass" name="confirm-password" 
                    placeholder="Confirm Password">
                </div>
                <button type="submit" id="submit">SIGN UP</button>
            </form>
        </div>
    </div>
</template>
<script>
  export default {
      name: "Signup"
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../style/signup.css" lang="css">
</style>