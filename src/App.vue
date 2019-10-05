<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <Quiz
            :options="options"
            :rightAnswer="rightAnswer"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Quiz from "./components/Quiz.vue";
import * as PokemonModel from "./models/PokemonModel";

export default {
  name: "app",
  components: {
    Quiz
  },
  data: function() {
    return {
      options: [],
      rightAnswer: {},

    };
  },
  mounted: function() {
    PokemonModel.getPokemons()
    .then(value => {
      this.options = value.options,
      this.rightAnswer = value.rightAnswer;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
