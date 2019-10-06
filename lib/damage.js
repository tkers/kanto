const { getEffectiveness } = require("./effectiveness");
const { PHYSICAL } = require("./categories");

const getSameTypeAttackBonus = (origin, move) =>
  origin.species.type === move.type ? 1.5 : 1;

const getDamage = (origin, move, target) => {
  const attack = move.category === PHYSICAL ? origin.attack : origin.special;
  const level = origin.level;
  const power = move.power;
  const defense = target.defense;

  const modifier =
    getSameTypeAttackBonus(origin, move) *
    getEffectiveness(move.type, target.species.type);

  return Math.floor(
    ((((2 * level) / 5 + 2) * power * attack) / defense / 50 + 2) * modifier
  );
};

exports.getDamage = getDamage;
