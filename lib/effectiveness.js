const { BUG, DRAGON, ELECTRIC, FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE, NORMAL, POISON, PSYCHIC, ROCK, WATER } = require("./types");

const IMMUNE = 0;
const NOT_VERY_EFFECTIVE = 0.5;
const NORMAL_EFFECTIVE = 1;
const SUPER_EFFECTIVE = 2;

const typeChart = {
  [NORMAL]: {
    [ROCK]: NOT_VERY_EFFECTIVE,
    [GHOST]: IMMUNE
  },
  [FIGHTING]: {
    [NORMAL]: SUPER_EFFECTIVE,
    [FLYING]: NOT_VERY_EFFECTIVE,
    [POISON]: NOT_VERY_EFFECTIVE,
    [ROCK]: SUPER_EFFECTIVE,
    [BUG]: NOT_VERY_EFFECTIVE,
    [GHOST]: IMMUNE,
    [PSYCHIC]: NOT_VERY_EFFECTIVE,
    [ICE]: SUPER_EFFECTIVE
  },
  [FLYING]: {
    [FIGHTING]: SUPER_EFFECTIVE,
    [ROCK]: NOT_VERY_EFFECTIVE,
    [BUG]: SUPER_EFFECTIVE,
    [GRASS]: SUPER_EFFECTIVE,
    [ELECTRIC]: NOT_VERY_EFFECTIVE
  },
  [POISON]: {
    [POISON]: NOT_VERY_EFFECTIVE,
    [GROUND]: NOT_VERY_EFFECTIVE,
    [ROCK]: NOT_VERY_EFFECTIVE,
    [BUG]: SUPER_EFFECTIVE,
    [GHOST]: NOT_VERY_EFFECTIVE,
    [GRASS]: SUPER_EFFECTIVE
  },
  [GROUND]: {
    [FLYING]: IMMUNE,
    [POISON]: SUPER_EFFECTIVE,
    [ROCK]: SUPER_EFFECTIVE,
    [BUG]: NOT_VERY_EFFECTIVE,
    [FIRE]: SUPER_EFFECTIVE,
    [GRASS]: NOT_VERY_EFFECTIVE,
    [ELECTRIC]: SUPER_EFFECTIVE
  },
  [ROCK]: {
    [FIGHTING]: NOT_VERY_EFFECTIVE,
    [FLYING]: SUPER_EFFECTIVE,
    [GROUND]: NOT_VERY_EFFECTIVE,
    [BUG]: SUPER_EFFECTIVE,
    [FIRE]: SUPER_EFFECTIVE,
    [ICE]: SUPER_EFFECTIVE
  },
  [BUG]: {
    [FIGHTING]: NOT_VERY_EFFECTIVE,
    [FLYING]: NOT_VERY_EFFECTIVE,
    [POISON]: SUPER_EFFECTIVE,
    [GHOST]: NOT_VERY_EFFECTIVE,
    [FIRE]: NOT_VERY_EFFECTIVE,
    [GRASS]: SUPER_EFFECTIVE,
    [PSYCHIC]: SUPER_EFFECTIVE
  },
  [GHOST]: {
    [NORMAL]: IMMUNE,
    [GHOST]: SUPER_EFFECTIVE,
    [PSYCHIC]: IMMUNE
  },
  [FIRE]: {
    [ROCK]: NOT_VERY_EFFECTIVE,
    [BUG]: SUPER_EFFECTIVE,
    [FIRE]: NOT_VERY_EFFECTIVE,
    [WATER]: NOT_VERY_EFFECTIVE,
    [GRASS]: SUPER_EFFECTIVE,
    [ICE]: SUPER_EFFECTIVE,
    [DRAGON]: NOT_VERY_EFFECTIVE
  },
  [WATER]: {
    [GROUND]: SUPER_EFFECTIVE,
    [ROCK]: SUPER_EFFECTIVE,
    [FIRE]: SUPER_EFFECTIVE,
    [WATER]: NOT_VERY_EFFECTIVE,
    [GRASS]: NOT_VERY_EFFECTIVE,
    [DRAGON]: NOT_VERY_EFFECTIVE
  },
  [GRASS]: {
    [FLYING]: NOT_VERY_EFFECTIVE,
    [POISON]: NOT_VERY_EFFECTIVE,
    [GROUND]: SUPER_EFFECTIVE,
    [ROCK]: SUPER_EFFECTIVE,
    [BUG]: NOT_VERY_EFFECTIVE,
    [FIRE]: NOT_VERY_EFFECTIVE,
    [WATER]: SUPER_EFFECTIVE,
    [GRASS]: NOT_VERY_EFFECTIVE,
    [DRAGON]: NOT_VERY_EFFECTIVE
  },
  [ELECTRIC]: {
    [FLYING]: SUPER_EFFECTIVE,
    [GROUND]: IMMUNE,
    [WATER]: SUPER_EFFECTIVE,
    [GRASS]: NOT_VERY_EFFECTIVE,
    [ELECTRIC]: NOT_VERY_EFFECTIVE,
    [DRAGON]: NOT_VERY_EFFECTIVE
  },
  [PSYCHIC]: {
    [FIGHTING]: SUPER_EFFECTIVE,
    [POISON]: SUPER_EFFECTIVE,
    [PSYCHIC]: NOT_VERY_EFFECTIVE
  },
  [ICE]: {
    [FLYING]: SUPER_EFFECTIVE,
    [GROUND]: SUPER_EFFECTIVE,
    [WATER]: NOT_VERY_EFFECTIVE,
    [GRASS]: SUPER_EFFECTIVE,
    [ICE]: NOT_VERY_EFFECTIVE,
    [DRAGON]: SUPER_EFFECTIVE
  },
  [DRAGON]: {
    [DRAGON]: SUPER_EFFECTIVE
  }
};

const getEffect = (moveType, pokemonType) => {
  const effect = typeChart[moveType][pokemonType];
  return typeof effect === "undefined" ? NORMAL_EFFECTIVE : effect;
};

const product = (a, b) => a * b;

const getEffectiveness = (moveType, pokemonType) => {
  if (pokemonType instanceof Array) {
    return pokemonType.map(pType => getEffect(moveType, pType)).reduce(product);
  }
  return getEffect(moveType, pokemonType);
};

exports.getEffectiveness = getEffectiveness;