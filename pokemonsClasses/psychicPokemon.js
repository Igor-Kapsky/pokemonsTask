import BasePokemon from './basePokemon.js';

export default class PsychicPokemon extends BasePokemon {
    feed(berries) {
        this.weight += berries;
        if (this.weight > 100) {
            this.speed -= berries;
        } else {
            this.speed -= berries * 0.2;
        }
    }
}
