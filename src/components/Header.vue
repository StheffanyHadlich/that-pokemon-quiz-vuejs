<template>
  <div class="header">
    <b-jumbotron lead="Player name">
      <h4>
        <b-badge variant="success" >Score: {{score}}</b-badge>
      </h4>
      <h4>
        <b-badge variant="info">Questions: {{index | convertIndex }} / {{total}}</b-badge>
      </h4>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    score: Number,
    index: Number,
    total: Number
  },
  filters: {
    convertIndex: function(index) {
      return parseInt(index) + 1;
    }
  }
};
</script>

