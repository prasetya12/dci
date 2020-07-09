import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import Buefy from 'buefy'
import vueCountryRegionSelect from 'vue-country-region-select'
import {store} from '../src/store/store'
import Axios from 'axios'


import 'buefy/dist/buefy.css'
const base = Axios.create({
  baseURL:'http://pretest-qa.dcidev.id/api/v1/'
})

Vue.config.productionTip = false
Vue.prototype.$http = base;

Vue.use(vueCountryRegionSelect)
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
