const { getAllStats, zeroStats } = require("./stats");

const createPokemon = (species, level = 1) => {
  const base = {
    species,
    level,
    iv: zeroStats(),
    ev: zeroStats()
  };

  const stats = getAllStats(base);

  return { ...base, ...stats };
};

module.exports = createPokemon;
