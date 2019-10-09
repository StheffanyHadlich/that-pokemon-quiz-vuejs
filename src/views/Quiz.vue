<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4">
          <Header v-if="questions.length" :index="index" :score="score" :total="total" :name="name" />
        </b-col>
        <b-col sm="5">
          <Questions
            v-if="questions.length"
            v-model="index"
            :options="questions[index].options"
            :rightAnswer="questions[index].rightAnswer"
            :score="score"
            :index="index"
            :total="total"
            :name="name"
            :show="show"
            :isCorrect="isCorrect"
            :checkAnswer="checkAnswer"
            :onChange="onChange"
            :clickNext="clickNext"
            :loading="loading"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Questions from "../components/Questions.vue";
import Header from "../components/Header.vue";

export default {
  name: "quiz",
  components: {
    Questions,
    Header
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters([
      "questions",
      "name",
      "index",
      "score",
      "selected",
      "total",
      "show",
      "isCorrect"
    ])
  },
  created: async function() {
    await this.getPokemons();
    this.loading = false;
  },
  methods: {
    ...mapActions(["getPokemons", "checkAnswer", "clickNext", "onChange"])
  }
};
</script>
