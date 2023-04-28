function findWinner(pokemons, berries) {
    console.log('Pokemons info before feeding:');
    pokemons.forEach(element => element.introduce());
    pokemons.forEach(element => element.feed(berries));
    console.log('Pokemons info after feeding:');
    pokemons.forEach(element => element.introduce());
    pokemons.sort( (a, b) => ((a.experience + a.weight)/a.speed) - ((b.experience + b.weight)/b.speed) );
    console.log('The winner is:');
    pokemons[0].introduce();
}

export {
    findWinner
};
