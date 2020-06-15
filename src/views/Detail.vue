<template>
  <div class="container">
    <b-card>
      <b-img src="https://picsum.photos/1024/400/?image=41" fluid-grow alt="Responsive image"></b-img>
      <p>{{id}}</p>
      <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
    </b-card>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.params.id,
      detailMeal: {}
    };
  },
  created(){

  }
};
</script>

<style scoped>
</style>