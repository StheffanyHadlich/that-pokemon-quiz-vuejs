import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import VuexStore from './vuex/store';
import routes from './router';

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
