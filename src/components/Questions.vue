<template>
  <div>
    <b-jumbotron class="quiz-container">
      <div>
        <h3>Who's That Pokémon?</h3>

        <div class="quiz-img">
          <b-spinner v-if="loading" type="grow" class="loading"  label="Spinning"></b-spinner>
          <img alt="Pokemon" v-else :src="rightAnswer.img" :class="show? 'show-pokemon' : 'hide-pokemon'" />
        </div>
      </div>
      <hr class="my-4" />
      <div>
        <b-form-group>
          <b-form-radio
            v-for="option in options"
            :key="option"
            @change="onChange"
            name="pokemon-options"
            :value="option"
            :class="[ 
              isSelected(option) && show && isCorrect ? 'right-answer' :  
              isSelected(option) && show && !isCorrect ? 'wrong-answer' : '' 
            ]"
          >{{option}}</b-form-radio>
        </b-form-group>
      </div>
      <b-button right-align pill variant="success" href="#" :disabled="show" @click="checkAnswer">Ok</b-button>
      <b-button right-align pill variant="info" href="#" :disabled="!show" @click="clickNext">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    rightAnswer: Object,
    options: Array,
    score: Number,
    checkAnswer: Function,
    show: Boolean,
    isCorrect: Boolean,
    loading: Boolean,
    onChange: Function,
    clickNext: Function
  },
  methods: {
    isSelected: function(value) {
      return this.rightAnswer.name === value;
    }
  }
};
</script>

<style>
.quiz-container {
  padding: 2em 5em;
}

.loading {
  margin: 2em;
}

.quiz-img {
  background-image: url("../../src/assets/bg.png");
  background-image: url(/img/bg.6ce8749a.png);
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
}

.hide-pokemon {
  height: 120px;
  -webkit-filter: brightness(0) blur(0.8px);
  filter: brightness(0) blur(0.8px);
}

.show-pokemon {
  height: 120px;
}

.right-answer {
  color: green;
}

.wrong-answer {
  color: red;
}
</style>
