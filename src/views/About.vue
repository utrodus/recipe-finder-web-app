<template>
  <div class="container">
    <b-jumbotron
      text-variant="white"
      style="margin-top:70px; margin-bottom:80px"
    >
      <template v-slot:header>Cari Resep App</template>

      <template
        v-slot:lead
      >Simple web App untuk mencari resep makanan </template>

      <hr class="my-4" />

      <p>
       Dibuat dengan VueJs dan Bootstrap untuk submission Dicoding Kelas Front-end Developer
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {}
};
</script>

<style scoped>
.jumbotron{
   background: rgb(255, 153, 102);
  background: linear-gradient(
    157deg,
    rgba(255, 153, 102, 1) 0%,
    rgba(255, 94, 98, 1) 100%
  );
}
</style>