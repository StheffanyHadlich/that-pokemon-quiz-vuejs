import * as actions from './actions';
import * as getters from './getters';

import quiz from './modules/quiz';

export default {
  actions,
  getters,
  modules: {
    quiz
  },
  strict: true,
};