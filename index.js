#!/usr/bin/env node

const chalkAnimation = require("chalk-animation");
const inquirer = require("inquirer");
const Dice = require("./lib/dice.js");

let game_type = "dice";

const sleep = (seconds = 1) =>
  new Promise((r) => setTimeout(r, seconds * 1000));

async function start() {
  await gameOptions();
  await handleGame(game_type);
}

const gameOptions = async () => {
  const game = await inquirer.prompt({
    type: "list",
    name: "game",
    message: "Choose your random number generator game",
    choices: ["dice"],
    default() {
      return "dice";
    },
  });
  game_type = game.game;
};

const handleGame = async (game_type) => {
  if (game_type === "dice") {
    const dice = new Dice();
    dice.rollAll();
    const d1 = await chalkAnimation.rainbow(dice.displayDice());
    await sleep(4);
    d1.stop();
  } else if (game_type === "quiz") {
    const quiz = await import("./quiz.js");
    await quiz.start();
  }
};

console.clear();

start();
