<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <b-jumbotron bg-variant="info" text-variant="white">
            <img src="../assets/pokemon-logo.png" class="logo" alt="Pokemon logo" />

            <hr class="my-4" />
            <div>
              <b-form-input :value="name" @input="setName" placeholder="Enter your name"></b-form-input>
            </div>
            <div>
              <b-button pill variant="danger" @click="startGame">Start</b-button>
            </div>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from '../router';

export default {
  name: "startgame",
  computed: {
    ...mapGetters(["name"])
  },
  methods: {
    ...mapActions(["setName"]),
    startGame: function() {
      router.push('/quiz');
    }
  }
};
</script>

<style>
  .logo {
    height: 100px;
  }

  .btn {
    margin: 10px 0px;
  }
</style>
 