<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded" class="shadow-sm">
      <b-container>
        <b-navbar-brand href="#">
          <img src="../assets/img/search.png" alt="Logo App" class="d-inline-block" />
          <span class="logo">Cari Resep</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <b-icon-house-door class="d-inline-block text-top"></b-icon-house-door>Recipe
            </b-nav-item>
            <b-nav-item href="#">
              <b-icon-grid></b-icon-grid>Explore
            </b-nav-item>
            <b-nav-item href="#">
              <b-icon-info-circle></b-icon-info-circle>About
            </b-nav-item>
          </b-navbar-nav>          
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>

.logo {
  color: #ff7014;
}
img {
  width: 40px;
}

.btn .b-icon.bi,
.nav-link .b-icon.bi,
.dropdown-toggle .b-icon.bi,
.dropdown-item .b-icon.bi,
.input-group-text .b-icon.bi {
  vertical-align: text-top;
  margin-right: 10px;
}

.nav-item a{
 font-family: 'NunitoSans-Bold';
}
</style>
