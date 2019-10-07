import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexStore from './vuex/store';

Vue.use(Vuex);
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
