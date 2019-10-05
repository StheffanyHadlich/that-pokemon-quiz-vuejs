<template>
  <div class="quiz-container">
    <b-jumbotron>
      <div>
        <h3>Who's That Pokémon?</h3>
        <div class="quiz-img">
          <img alt="" :src="rightAnswer.img" />
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

<style>
  .quiz-img {
    background-image: url('../../src/assets/bg.png');
    background-image: url(/img/bg.6ce8749a.png);
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
  }

  .quiz-img img {
    border-style: none;
    height: 120px;
    -webkit-filter: brightness(0) blur(0.8px);
    filter: brightness(0) blur(0.8px);
  }
</style>
