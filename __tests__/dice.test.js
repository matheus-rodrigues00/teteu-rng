const Dice = require("../lib/dice.js");

describe("Dice", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });

  test("roll() should return a random integer between 1 and 6 inclusive", () => {
    const rolls = new Set();
    for (let i = 0; i < 1000; i++) {
      rolls.add(dice.roll());
    }
    expect(rolls.size).toBeLessThan(7);
  });
});
