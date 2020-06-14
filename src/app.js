import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import routes from './router';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/styles/styles.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
const router = new VueRouter({routes, 
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')