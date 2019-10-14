import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueTranslate from 'vue-translate-plugin';
import VuexStore from './vuex/store';
import router from './router';
import locales from './locales'

Vue.use(Vuex);
Vue.use(VueTranslate);
Vue.use(BootstrapVue);

Vue.locales(locales);

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
