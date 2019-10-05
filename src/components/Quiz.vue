<template>
  <div class="quiz-container">
    <b-jumbotron >
      <div>
        <h3>Who's That Pokémon?</h3>
      </div>
      <hr class="my-4">
      <div>
         <b-form-group >
          <b-form-radio v-model="selected" name="some-radios" value="Bulbasaur">Bulbasaur</b-form-radio>
          <b-form-radio v-model="selected" name="some-radios" value="Charmander">Charmander</b-form-radio>
          <b-form-radio v-model="selected" name="some-radios" value="Squirtle">Squirtle</b-form-radio>
        </b-form-group>

        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

      </div>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  }
}
</script>
