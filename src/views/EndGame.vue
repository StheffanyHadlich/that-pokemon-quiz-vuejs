<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <b-jumbotron bg-variant="info" text-variant="white">
            <h2>
              <strong>{{t('game over')}}</strong>
            </h2>

            <hr class="my-4" />
            <p>
              <strong>{{t('name')}}: {{name}}</strong>
            </p>
            <p></p>
            <p>
              <strong>{{`${t('score')}: ${score} ${t('out of')} ${total} ${t('questions')}`}}</strong>
            </p>
            <div class="results">
              <b-table striped hover :items="results"></b-table>
            </div>
            <div>
              <b-button pill variant="warning" @click="redirectToHome">{{t('play again')}}</b-button>
            </div>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "endgame",
  computed: {
    ...mapGetters(["score", "total", "results", "name"])
  },
  created: async function() {
    await this.getResults();
  },
  methods: {
    ...mapActions(["redirectToHome", "getResults"]),
  }
};
</script>

<style>
  .results {
    background-color: white;
  }
</style>
