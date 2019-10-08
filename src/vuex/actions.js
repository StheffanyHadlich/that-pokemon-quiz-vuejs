import * as PokemonModel from '../models/PokemonModel'

import mutations from './mutation-types';

export const getPokemons = async ({ commit }) => {
  const questions = await PokemonModel.getPokemons();
  commit(mutations.SET_QUESTIONS, questions); 
}

export const checkAnswer = ({commit}) => {
  commit(mutations.UPDATE_SCORE);
  commit(mutations.TOGGLE_ANSWER);
}

export const clickNext = ({commit}) => {
  commit(mutations.UPDATE_INDEX);
  commit(mutations.TOGGLE_ANSWER);
}

export const onChange = ({commit}, value) => {
  commit(mutations.ON_CHANGE, value)
}

export const redirectTo = ({commit}, value) => {
  commit(mutations.REDIRECT_TO, value)
}

