import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';  
import VueSession from 'vue-session'
  var options = {
    persist: true
  }
import loading from 'vuejs-loading-screen'

Vue.use(VueSession, options)
Vue.use(VueSweetalert2);
Vue.use(loading, {
  bg: '#969eabad',
  slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h3 class="text-3xl text-white">Loading...</h3>
    </div>
  `
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
