import mutationstypes from '../mutation-types.js'

const mutations = {
  [mutationstypes.SET_QUESTIONS](state, data){
    state.questions = data;
    state.total = data.length;
  },
  [mutationstypes.TOGGLE_ANSWER](state) {
    state.show = !state.show;
  },
  [mutationstypes.UPDATE_INDEX](state) {
    if(state.index < state.total - 1){
      state.isCorrect = null
      return state.index++
    }
  },
  [mutationstypes.UPDATE_SCORE](state) {
    if(state.questions[state.index].rightAnswer.name == state.selected){
      state.isCorrect = true;
      return state.score++;
    }
    return state.isCorrect = false;
  },
  [mutationstypes.ON_CHANGE](state, data) {
    state.selected = data;
  }
};

const state = {
  questions: [],
  index: 0,
  score: 0,
  selected: "",
  total: 0,
  show: false,
  isCorrect: false,
};

export default {
  state,
  mutations
};