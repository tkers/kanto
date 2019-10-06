const test = require("tape");

const { getEffectiveness } = require("./effectiveness");
const { NORMAL, WATER, FIRE, ELECTRIC, GRASS, GROUND, FLYING, BUG, ROCK } = require("./types");

test("Gets the type effectiveness for single-types", t => {
  t.equals(getEffectiveness(NORMAL, NORMAL), 1, "Normal move is regular vs Normal");
  t.equals(getEffectiveness(WATER, FIRE), 2, "Water move is Very Effective vs Fire");
  t.equals(getEffectiveness(ELECTRIC, GRASS), 0.5, "Electric move is Not Very Effective vs Grass");
  t.equals(getEffectiveness(GROUND, FLYING), 0, "Flying is Immune vs Ground move");
  t.end();
});

test("Gets the type effectiveness for double-types", t => {
  t.equals(getEffectiveness(FIRE, [BUG, GRASS]), 4, "Fire move is extra Very Effective vs Bug-Grass");
  t.equals(getEffectiveness(FIRE, [ROCK, WATER]), 0.25, "Fire move is extra Not Very Effective vs Rock-Water");
  t.end();
});
