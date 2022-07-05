import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import AddGarage from '../views/AddGarage.vue'
import EditGarage from '../views/EditGarage.vue'
import AddCamera from '../views/AddCamera.vue'
import EditCamera from '../views/EditCamera.vue'
import EditProfile from '../views/EditProfile.vue'
import ShowReviews from "@/views/ShowReviews.vue";
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () =>
    import ( /* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/AddGarage/:id',
    name: 'AddGarage',
    component: AddGarage
  },
  {
    path: '/EditGarage/:id',
    name: 'EditGarage',
    component: EditGarage
  },
  {
    path: '/AddCamera/:id',
    name: 'AddCamera',
    component: AddCamera
  },
  {
    path: '/EditCamera/:id',
    name: 'EditCamera',
    component: EditCamera
  },
  {
    path: '/ShowReviews',
    name: 'ShowReviews',
    component: ShowReviews
  },
  { 
    path: "*", 
    name: 'PageNotFound',
    component: PageNotFound 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
