import BasePokemon from './basePokemon.js';

export default class ElectricPokemon extends BasePokemon {
    feed(berries) {
        this.weight += berries * 7;
        if (this.weight > 100) {
            this.speed += berries;
        } else {
            this.speed += berries * 0.3;
        }
    }
}
