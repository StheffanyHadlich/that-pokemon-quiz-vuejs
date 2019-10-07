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
            :show="show"
            :isCorrect="isCorrect"
            :checkAnswer="checkAnswer"
            :onChange="onChange"
            :clickNext="clickNext"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Quiz from "./components/Quiz.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Quiz,
    Header
  },
  computed: {
    ...mapGetters([
      'questions',
      'index',
      'score',
      'selected',
      'total',
      'show',
      'isCorrect',
    ])
  },
  created: async function() {
    await this.getPokemons();
  },
  methods: {
    ...mapActions([
        'getPokemons',
        'checkAnswer',
        'clickNext',
        'onChange'
      ]),
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
