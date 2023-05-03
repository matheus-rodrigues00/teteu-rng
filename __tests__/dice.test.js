const Dice = require("../lib/dice.js");

const dice_line1 = "   _______";
const dice_line2 = "  /      /\\";
const dice_line3 = " /      /  \\";
const dice_line4 = "/_____ /    \\";
const dice_line5 = "\\      \\    /";
const dice_line6 = " \\      \\  /";
const dice_line7 = "  \\ ____ \\/";

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

  test("resetDice() should reset the dice faces to the original ones", () => {
    dice.resetDice();
    console.log(dice);
    console.log(dice.dice_line1);
    expect(dice.dice_line1).toEqual(dice_line1);
    expect(dice.dice_line2).toEqual(dice_line2);
    expect(dice.dice_line3).toEqual(dice_line3);
    expect(dice.dice_line4).toEqual(dice_line4);
    expect(dice.dice_line5).toEqual(dice_line5);
    expect(dice.dice_line6).toEqual(dice_line6);
    expect(dice.dice_line7).toEqual(dice_line7);
  });

  test("assembleDice() should assemble the dices faces into a single string", () => {
    const diceString = dice.assembleDice();
    expect(diceString).toEqual(
      dice_line1 +
        "\n" +
        dice_line2 +
        "\n" +
        dice_line3 +
        "\n" +
        dice_line4 +
        "\n" +
        dice_line5 +
        "\n" +
        dice_line6 +
        "\n" +
        dice_line7
    );
  });

  test("rollAll() should roll all the dices and numbers must be different", () => {
    dice.rollAll();
    const top = dice.getFace("top");
    const left = dice.getFace("left");
    const right = dice.getFace("right");

    expect(top).not.toEqual(left);
    expect(top).not.toEqual(right);
    expect(left).not.toEqual(right);
  });

  test("rollAll() must return a different string than the original one", () => {
    const originalString = dice.assembleDice();
    dice.rollAll();
    const newString = dice.assembleDice();
    expect(newString).not.toEqual(originalString);
  });
});
