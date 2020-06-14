<template>
  <div id="app">
    <NavBar />
    <router-view />
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name:"App",
  components:{
    NavBar
  }
};
</script>



