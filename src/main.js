import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDroV8lZFwQiCkXvp44KWT44WrnUqNSCgE',
      authDomain: 'app-vue-3a3c9.firebaseapp.com',
      databaseURL: 'https://app-vue-3a3c9-default-rtdb.firebaseio.com',
      projectId: 'app-vue-3a3c9',
      storageBucket: 'app-vue-3a3c9.appspot.com',
      messagingSenderId: '411661576092'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
