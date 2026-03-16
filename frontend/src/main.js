import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//These values are replaces during amplify setup
axios.defaults.baseURL = "https://kwysnusnaf.execute-api.us-west-2.amazonaws.com/prod"
Vue.prototype.$UserPoolId = 'us-west-2_vT5qJWEp0'
Vue.prototype.$ClientId = '3k705j40qe8fme58o0khcn63oa'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
router,
  render: h => h(App),

}).$mount('#app')
