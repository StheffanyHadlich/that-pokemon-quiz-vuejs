<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <Quiz
            v-if="questions.length"
            v-model="index"
            :options="questions[index].options"
            :rightAnswer="questions[index].rightAnswer"
            :score="score"
            :selected="selected"
            :checkAnswer="checkAnswer"
            :onChange="onChange"
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
      questions: [],
      index: 0,
      score: 0,
      selected: "",
    };
  },
  mounted: function() {
    PokemonModel.getPokemons()
    .then(questions => {
      this.questions = questions;
    });
  },
  methods: {
    checkAnswer: function() {
      if(this.questions[this.index].rightAnswer.name === this.selected){
        this.index++;
        this.score++;
      }
    },
    onChange: function(value) {
      this.selected= value
    }
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
