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
      <div class="col-md-4 col-sm-12 col-xs-4 col-lg-3 filter mb-3">
        <b-card class="filter-card">
          <h2>Filter Resep</h2>
          <a v-b-toggle href="#area" @click.prevent class="toogle-button">
            Berdasarkan Negara
            <b-icon-chevron-down class="icon-toogle"></b-icon-chevron-down>
          </a>
          <b-collapse id="area">
            <b-form-group>
              <b-form-radio v-model="selected" name="Amerika" value="American">Amerika</b-form-radio>
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

          <b-button variant="primary" class="button-filter" @click="getPosts(selected)">Filter</b-button>
        </b-card>
      </div>
      <div class="col-md-8 meal-list">
        <div v-if="meals.length">
          <b-row>
            <div v-bind:key="data.index" v-for="data in meals">
              <b-card
                v-bind:img-src="data.strMealThumb"
                class="mb-4 meal-item mr-4"
                img-alt="Card image"
                img-top
                align="center"
                style=" border-top-left-radius: 10px;
    border-top-right-radius: 10px;"
                id="meal-item"
              >
                <b-card-text class="text-center">{{data.strMeal}}</b-card-text>

                <b-button class="button-filter" @click="getDetail(data.idMeal)">Lihat Resep</b-button>
               
              </b-card>
            </div>

            <b-modal id="modal-tall" v-bind:title="detailMeal.strMeal">
              <p class="my-4" v-for="i in 20" :key="i">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </b-modal>
          </b-row>
        </div>
        <div v-else>
          <h5>Makanan Belum Tersedia</h5>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";

const MealDbBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

function buildUrl(url) {
  return `${MealDbBaseUrl}${url}`;
}

export default {
  name: "Home",
  data() {
    return {
      selected: "American",
      meals: [],
      detailMeal: {},
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
        class: "my-5"
      }
    };
  },
  mounted() {
    this.getPosts(this.selected);
  },
  methods: {
    getPosts(url) {
      let area = buildUrl(url);
      axios
        .get(area)
        .then(response => {
          this.meals = response.data.meals;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getDetail(idMeal) {
      let urlDetail = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      axios
        .get(urlDetail)
        .then(response => {
          console.log(response.data.meals);
          this.detailMeal = response.data.meals[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
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
  margin-bottom: 50px;
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
  margin-left: 10px;
}

.filter-card {
  border-radius: 8px;
  padding: 10px 15px;
}

.form-group {
  padding-top: 10px;
}

.meal-list {
  margin: 0 auto;
}

.meal-item {
  border: none;
  background: #fff;
  border-radius: 12px;
  -webkit-box-shadow: 0px 3px 5px -1px rgba(171, 171, 171, 0.2);
  -moz-box-shadow: 0px 3px 5px -1px rgba(171, 171, 171, 0.2);
  box-shadow: 0px 3px 5px -1px rgba(171, 171, 171, 0.2);
}

.card-body h4.card-title {
  font-size: 1.1em;
}
.card-img,
.card-img-top {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.button-filter {
  margin-top: 8px;
  width: 100%;
  background: rgb(255, 153, 102);
  background: linear-gradient(
    157deg,
    rgba(255, 153, 102, 1) 0%,
    rgba(255, 94, 98, 1) 100%
  );
}

.button-filter {
  margin-top: 8px;
  width: 100%;
  border: none;
}

@media only screen and (min-width: 320px) {
  #meal-item {
    margin: 0 auto;
    max-width: 90%;
  }
}

@media only screen and (min-width: 768px) {
  #meal-item {
    margin-left: 20px;
    max-width: 80%;
  }
}

@media only screen and (min-width: 980px) {
  #meal-item {
    margin: 0 auto;
    max-width: 220px;
  }
}
</style>