import * as PokemonService from '../service/PokemonService';

import chunk from 'lodash.chunk';

export const getPokemons = async () => {
  const pokemons = await PokemonService.get();
  const consult = await mountQuiz(pokemons.results);
  console.log(consult)
  return consult;
}

export const getPokemon = async (url) => {
  const pokemon = await PokemonService.getById(url);
  return pokemon;
}

const mountQuiz = async results => await Promise.all(separateQuestion(results).map((pokemons) => mountQuestion(pokemons)));

const mountQuestion = async pokemons => {
  return {
    rightAnswer: await pickAnswer(pokemons),
    options: pokemons.map(item => item.name)
  }

}

const pickAnswer = async pokemons => {
  const index = Math.floor(Math.random() * pokemons.length);
  const pokemon = await getPokemon(pokemons[index].url);
  return mountRightAnswer(pokemon, pokemons[index].name);
}

const separateQuestion = results => chunk(results, 4);

const mountRightAnswer = (pokemon, name) => {
  return {
    name: name,
    img: pokemon.sprites.front_default
  }
}
