import * as PokemonService from '../service/PokemonService'

export const getPokemons = async () => {
  const pokemons = await PokemonService.get();
   return await mountQuestion(pokemons.results);
}

export const getPokemon = async (url) => {
  const pokemon = await PokemonService.getById(url);
  return pokemon;
}


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

const mountRightAnswer = (pokemon, name) => {
  return {
    name: name,
    img: pokemon.sprites.front_default
  }
}
