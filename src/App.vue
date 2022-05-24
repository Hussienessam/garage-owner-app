<template>
  <div>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
export default {
  name: 'App',
  components: {
    Home,
    Login,
    Signup
  }
}
</script>
