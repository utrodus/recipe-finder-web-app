<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded" class="shadow-sm ">
      <b-container>
        <b-navbar-brand href="#">
          <img src="../assets/img/search.png" alt="Logo App" class="d-inline-block" />
          <span class="logo">Cari Resep</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Lihat Resep</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <!-- <b-navbar-nav >
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav> -->

         
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.logo {
  color: #ff7014;
}
img {
  width: 40px;
}
</style>
