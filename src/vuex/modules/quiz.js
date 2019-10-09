import mutationstypes from '../mutation-types.js'
import router from '../../router';

const initialState = {
  questions: [],
  results: [],
  name: null,
  index: 0,
  score: 0,
  selected: "",
  total: 0,
  show: false,
  isCorrect: false,
}

const mutations = {
  [mutationstypes.SET_QUESTIONS](state, data) {
    state.questions = data;
    state.total = data.length;
  },
  [mutationstypes.TOGGLE_ANSWER](state) {
    state.show = !state.show;
  },
  [mutationstypes.UPDATE_INDEX](state) {
    state.isCorrect = null;
    return state.index++;
  },
  [mutationstypes.UPDATE_SCORE](state) {
    if (state.questions[state.index].rightAnswer.name == state.selected) {
      state.isCorrect = true;
      return state.score++;
    }
    return state.isCorrect = false;
  },
  [mutationstypes.ON_CHANGE](state, data) {
    state.selected = data;
  },
  [mutationstypes.REDIRECT_TO_HOME]() {
    router.push('/');
  },
  [mutationstypes.RESET_STORE](state) {
    Object.keys(initialState).forEach(key => {
      state[key] = initialState[key]
    });
  },
  [mutationstypes.SET_RESULTS](state, data) {
    state.results = data;
  },
  [mutationstypes.SET_NAME](state, data) {
    state.name = data;
  }
};

const state = {
  questions: [],
  results: [],
  name: null,
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