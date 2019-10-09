<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <b-jumbotron bg-variant="info" text-variant="white">
            <h2>
              <strong>Game over</strong>
            </h2>

            <hr class="my-4" />
            <p>
              <strong>Name: Player name</strong>
            </p>
            <p></p>
            <p>
              <strong>Score: {{score}} out of {{total}} questions</strong>
            </p>
            <p>{{results}}</p>
            <div>
              <b-button pill variant="warning" @click="redirectToHome">Play again</b-button>
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
    ...mapGetters(["score", "total", "results"])
  },
  created: async function() {
    await this.getResults();
  },
  methods: {
    ...mapActions(["redirectToHome", "getResults"])
  }
};
</script>
 