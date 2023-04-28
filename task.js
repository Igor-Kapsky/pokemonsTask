import api from './api/api.js';
import { getRandomInt } from './helpers/utils.js';
import { findWinner } from './helpers/appHelper.js';
import FirePokemon from './pokemonsClasses/firePokemon.js';
import GrassPokemon from './pokemonsClasses/grassPokemon.js';
import ElectricPokemon from './pokemonsClasses/electricPokemon.js';
import PsychicPokemon from './pokemonsClasses/psychicPokemon.js';
import IcePokemon from './pokemonsClasses/icePokemon.js';

const endpoint = 'https://pokeapi.co/api/v2/type/';
const pokemons = [];
const pokemonsType = ['fire', 'grass', 'electric', 'ice', 'psychic'];

for (let i = 0; i < pokemonsType.length; i++) {
    const response = await api.getRequest(endpoint + pokemonsType[i]);
    const pokemonCount = response.data.pokemon.length;
    const randomPokemonID = getRandomInt(0, pokemonCount);
    const pokemon = await api.getRequest(response.data.pokemon[randomPokemonID].pokemon.url);
    switch (pokemonsType[i]) {
        case 'fire':
            pokemons.push(new FirePokemon(pokemon.data.name, pokemonsType[i], pokemon.data.weight, pokemon.data.base_experience, pokemon.data.stats[0].base_stat));
            break;
        case 'grass':
            pokemons.push(new GrassPokemon(pokemon.data.name, pokemonsType[i], pokemon.data.weight, pokemon.data.base_experience, pokemon.data.stats[0].base_stat));
            break;
        case 'electric':
            pokemons.push(new ElectricPokemon(pokemon.data.name, pokemonsType[i], pokemon.data.weight, pokemon.data.base_experience, pokemon.data.stats[0].base_stat));
            break;
        case 'ice':
            pokemons.push(new IcePokemon(pokemon.data.name, pokemonsType[i], pokemon.data.weight, pokemon.data.base_experience, pokemon.data.stats[0].base_stat));
            break;
        case 'psychic':
            pokemons.push(new PsychicPokemon(pokemon.data.name, pokemonsType[i], pokemon.data.weight, pokemon.data.base_experience, pokemon.data.stats[0].base_stat));
            break;
    }
}
findWinner(pokemons, 10);
