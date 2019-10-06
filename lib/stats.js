const zeroStats = () => ({
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  special: 0
});

const getStat = (pokemon, stat) =>
  Math.floor(
    (((pokemon.species[stat] + pokemon.iv[stat]) * 2 +
      Math.floor(Math.ceil(Math.sqrt(pokemon.ev[stat])) / 4)) *
      pokemon.level) /
      100
  ) + 5;

const getAllStats = pokemon => ({
  hp: getStat(pokemon, "hp") + pokemon.level + 5,
  attack: getStat(pokemon, "attack"),
  defense: getStat(pokemon, "defense"),
  speed: getStat(pokemon, "speed"),
  special: getStat(pokemon, "special")
});

exports.getAllStats = getAllStats;
exports.zeroStats = zeroStats;
