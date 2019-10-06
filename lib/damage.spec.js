const test = require("tape");

const { getDamage } = require("./damage");

const { FIRE, ROCK, GRASS, POISON } = require("./types");
const { PHYSICAL } = require("./categories");

const charmander = {
  level: 12,
  species: { type: FIRE },
  hp: 34,
  attack: 21,
  defense: 18,
  speed: 24,
  special: 20
};
const bulbasaur = {
  level: 12,
  species: { type: [GRASS, POISON] },
  hp: 36,
  attack: 20,
  defense: 20,
  speed: 19,
  special: 24
};

const firePunch = { type: FIRE, category: PHYSICAL, power: 75 };
const rockSlide = { type: ROCK, category: PHYSICAL, power: 75 };

test("Calculates the inflicted damage", t => {
  const dmg1 = getDamage(charmander, firePunch, bulbasaur);
  t.equals(dmg1, 38, "Charmander uses Fire Punch on Bulbasaur");

  const dmg2 = getDamage(charmander, rockSlide, bulbasaur);
  t.equals(dmg2, 12, "Charmander uses Rock Slide on Bulbasaur");

  t.end();
});
