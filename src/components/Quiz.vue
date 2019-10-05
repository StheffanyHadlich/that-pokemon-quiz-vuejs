<template>
  <div class="quiz-container">
    <b-jumbotron>
      <div>
        <h3>Who's That Pokémon?</h3>
        <div>
          <img alt="Guess this pokemon" :src="rightAnswer.img" />
        </div>
      </div>
      <hr class="my-4" />
      <div>
        <b-form-group>
          <b-form-radio
            v-for="option in options"
            :key="option"
            v-model="selected"
            name="some-radios"
            :value="option"
          >
            {{option}}
          </b-form-radio>
        </b-form-group>

        <div class="mt-3">
          Selected:
          <strong>{{ selected }}</strong>
        </div>
      </div>
      <b-button variant="success" href="#">Ok</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    rightAnswer: Object,
    options: Array
  },
  data() {
    return {
      selected: ""
    };
  }
};
</script>
