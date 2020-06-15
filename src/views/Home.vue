<template>
  <b-container>
    <b-jumbotron>
      <div class="row">
        <div class="col-md-5 col-lg-5">
          <h1>
            Siap Untuk
            Mencoba
            Resep Baru ?
          </h1>
          <p>
            Berbagai resep menu masakan dari berbagai penjuru dunia
            hadir untuk Anda, Anda bisa mencoba resep-resep baru
            dan terjamin kualitasnya
          </p>
        </div>
        <div class="col-md-6 col-lg-7"></div>
      </div>
    </b-jumbotron>

    <div class="row">
      <div class="col-md-3 col-sm-4 col-xs-4 filter">
        <div class="card">
          <h2>Filter Resep</h2>
          <a v-b-toggle href="#area" @click.prevent class="toogle-button">
            World Cuisine
            <b-icon-chevron-down class="icon-toogle"></b-icon-chevron-down>
          </a>
          <b-collapse id="area">
            <b-form-group>
              <b-form-radio v-model="selected" name="Amerika" value="Amerika">Amerika</b-form-radio>
              <b-form-radio v-model="selected" name="British" value="British">British</b-form-radio>
              <b-form-radio v-model="selected" name="Canadian" value="Canadian">Canadian</b-form-radio>
              <b-form-radio v-model="selected" name="Chinese" value="Chinese">Chinese</b-form-radio>
              <b-form-radio v-model="selected" name="Dutch" value="Dutch">Dutch</b-form-radio>
              <b-form-radio v-model="selected" name="Egyptian" value="Egyptian">Egyptian</b-form-radio>
              <b-form-radio v-model="selected" name="French" value="French">French</b-form-radio>
              <b-form-radio v-model="selected" name="Greek" value="Greek">Greek</b-form-radio>
              <b-form-radio v-model="selected" name="Indian" value="Indian">Indian</b-form-radio>
              <b-form-radio v-model="selected" name="Irish" value="Irish">Irish</b-form-radio>
              <b-form-radio v-model="selected" name="Italian" value="Italian">Italian</b-form-radio>
              <b-form-radio v-model="selected" name="Jamaican" value="Jamaican">Jamaican</b-form-radio>
              <b-form-radio v-model="selected" name="Japanese" value="Japanese">Japanese</b-form-radio>
              <b-form-radio v-model="selected" name="Kenyan" value="Kenyan">Kenyan</b-form-radio>
              <b-form-radio v-model="selected" name="Malaysian" value="Malaysian">Malaysian</b-form-radio>
              <b-form-radio v-model="selected" name="Mexican" value="Mexican">Mexican</b-form-radio>
              <b-form-radio v-model="selected" name="Moroccan" value="Moroccan">Moroccan</b-form-radio>
              <b-form-radio v-model="selected" name="Russian" value="Russian">Russian</b-form-radio>
              <b-form-radio v-model="selected" name="Spanish" value="Spanish">Spanish</b-form-radio>
              <b-form-radio v-model="selected" name="Thai" value="Thai">Thai</b-form-radio>
              <b-form-radio v-model="selected" name="Tunisian" value="Tunisian">Tunisian</b-form-radio>
              <b-form-radio v-model="selected" name="Turkish" value="Turkish">Turkish</b-form-radio>
              <b-form-radio v-model="selected" name="Vietnamese" value="Vietnamese">Vietnamese</b-form-radio>
            </b-form-group>
          </b-collapse>
        </div>
      </div>
      <div class="col-10"></div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      selected: "Amerika"
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #959597;
}
a:hover {
  font-family: "NunitoSans-bold", Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: #959597;
}

.container {
  margin-top: 45px;
  margin-bottom: 40px;
}

.jumbotron {
  background-image: url("../assets/img/bg-hero.png");
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 40px;
  border-radius: 15px;
}

.jumbotron h1 {
  margin-top: 30px;
  color: white;
  font-family: "NunitoSans-bold", Arial, Helvetica, sans-serif;
}

.filter h2 {
  font-family: "NunitoSans-bold", Arial, Helvetica, sans-serif;
  font-size: 1.8em;
}

.jumbotron p {
  color: white;
}
.filter {
  overflow: visible;
}

.filter h2 {
  margin-bottom: 10px;
  font-size: 1.3em;
  font-family: "NunitoSans-bold", Arial, Helvetica, sans-serif;
  color: #505050;
}

.filter .icon-toogle {
  margin-left: 40px;
}

.card {
  padding: 20px 15px 20px 25px;
  -webkit-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.16);
  border-radius: 13px;
}

.form-group {
  padding-top: 10px;
}
</style>