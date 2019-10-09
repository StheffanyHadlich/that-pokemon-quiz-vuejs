<template>
  <div>
    <b-jumbotron class="quiz-container">
      <div>
        <h3>Who's That Pokémon?</h3>

        <div class="quiz-img">
          <b-spinner v-if="loading" type="grow" class="loading" label="Spinning"></b-spinner>
          <img
            alt="Pokemon"
            v-else
            :src="rightAnswer.img"
            :class="show? 'show-pokemon' : 'hide-pokemon'"
          />
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
      <b-button right-align pill variant="info" href="#" :disabled="!show" @click="onClick">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import * as PokemonModel from '../models/PokemonModel'
export default {
  props: {
    rightAnswer: Object,
    options: Array,
    checkAnswer: Function,
    show: Boolean,
    name: String,
    score: Number,
    index: Number,
    total: Number,
    isCorrect: Boolean,
    loading: Boolean,
    onChange: Function,
    clickNext: Function,
    saveResult: Function
  },
  methods: {
    isSelected: function(value) {
      return this.rightAnswer.name === value;
    },
    onClick: function() {
      return PokemonModel.isLastIndex(this.index, this.total) ? this.clickNext() : this.saveResult(this.userData())
    },
    userData: function() {
        return {
          name: this.name,
          score:this.score
        }
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
