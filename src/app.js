import Vue from 'vue';
import Home from './App.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/styles.css'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(Home)
})