<template>
  <b-navbar toggleable="lg" type="light" variant="faded" class="shadow-sm">
    <b-container>
      <b-navbar-brand href="#">
        <img src="../assets/img/search.png" alt="Logo App" class="d-inline-block" />
        <span class="logo">Cari Resep</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/" exact>
              <b-icon-house-door class="d-inline-block text-top"></b-icon-house-door>Recipe
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/about">
              <b-icon-info-circle></b-icon-info-circle>About
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #646464;
}

a:hover {
  text-decoration: none;
  color: #ff9966;
}
</style>
