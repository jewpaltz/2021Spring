import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './sass/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

