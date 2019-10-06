<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4">
          <Header v-if="questions.length" :index="index" :score="score" :total="total" />
        </b-col>
        <b-col sm="5">
          <Quiz
            v-if="questions.length"
            v-model="index"
            :options="questions[index].options"
            :rightAnswer="questions[index].rightAnswer"
            :score="score"
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
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Quiz,
    Header
  },
  data: function() {
    return {
      questions: [],
      index: 0,
      score: 0,
      selected: "",
      total: 0,
    };
  },
  mounted: function() {
    PokemonModel.getPokemons().then(questions => {
      this.questions = questions;
      this.total = questions.length;
    });
  },
  methods: {
    checkAnswer: function() {
      this.updateScore();
      this.updateIndex();
    },
    updateIndex: function() {
      if(this.index < this.total - 1)
        return this.index++
    },
    updateScore: function () {
      console.log(this.questions[this.index].rightAnswer.name, this.selected)
      if(this.questions[this.index].rightAnswer.name == this.selected){
        return this.score++;
      }
    },
    onChange: function(value) {
      this.selected = value;
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
