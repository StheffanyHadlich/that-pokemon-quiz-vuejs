<template>
  <div class="header">
    <b-jumbotron>
      <h4>
        <b-badge variant="warning" >{{t('player')}}: {{name}}</b-badge>
      </h4>
      <h4>
        <b-badge variant="success" >{{t('score')}}: {{score}}</b-badge>
      </h4>
      <h4>
        <b-badge variant="info">{{t('Questions')}}: {{index | convertIndex }} / {{total}}</b-badge>
      </h4>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
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

