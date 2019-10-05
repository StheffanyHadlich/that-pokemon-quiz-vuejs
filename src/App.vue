<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
           <Quiz />
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Quiz from "./components/Quiz.vue";

export default {
  name: "app",
  components: {
    Quiz
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
