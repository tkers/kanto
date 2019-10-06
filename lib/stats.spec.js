const test = require("tape");

const { zeroStats, getAllStats } = require("./stats");

test("Generates zero stats", t => {
  const stats = zeroStats();
  t.equals(stats.hp, 0, "HP is 0");
  t.equals(stats.attack, 0, "Attack is 0");
  t.equals(stats.defense, 0, "Defense is 0");
  t.equals(stats.speed, 0, "Speed is 0");
  t.equals(stats.special, 0, "Special is 0");
  t.end();
});

test("Calculates the individual stats", t => {
  const species = {
    hp: 35,
    attack: 55,
    defense: 30,
    speed: 90,
    special: 50
  };
  const iv = {
    hp: 7,
    attack: 8,
    defense: 13,
    speed: 5,
    special: 9
  };
  const ev = {
    hp: 22850,
    attack: 23140,
    defense: 17280,
    speed: 24795,
    special: 19625
  };
  t.deepEquals(
    getAllStats({ species, iv, ev, level: 1 }),
    { hp: 12, attack: 6, defense: 6, speed: 7, special: 6 },
    "Calculate stats at level 1"
  );
  t.deepEquals(
    getAllStats({ species, iv, ev, level: 81 }),
    { hp: 189, attack: 137, defense: 101, speed: 190, special: 128 },
    "Calculate stats at level 81"
  );
  // @TODO should HP:231, DEF:123 ?
  t.deepEquals(
    getAllStats({ species, iv, ev, level: 100 }),
    { hp: 232, attack: 169, defense: 124, speed: 234, special: 158 },
    "Calculate stats at level 100"
  );
  t.end();
});
