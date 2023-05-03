class Dice {
  #left = -1;
  #right = -1;
  #top = -1;
  dice_line1 = "   _______";
  dice_line2 = "  /      /\\";
  dice_line3 = " /      /  \\";
  dice_line4 = "/_____ /    \\";
  dice_line5 = "\\      \\    /";
  dice_line6 = " \\      \\  /";
  dice_line7 = "  \\ ____ \\/";

  constructor() {}

  getFace(face) {
    switch (face) {
      case "top":
        return this.#top;
      case "left":
        return this.#left;
      case "right":
        return this.#right;
      default:
        return -1;
    }
  }

  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollAll() {
    this.#top = this.roll();
    this.#left = this.roll();
    this.#right = this.roll();
    do {
      this.#left = this.roll();
    } while (this.#left === this.#top);
    do {
      this.#right = this.roll();
    } while (this.#right === this.#top || this.#right === this.#left);
    this.replaceDice(this.#top, this.#left, this.#right);
    return this;
  }

  replaceDice(top, left, right) {
    this.replaceFace("top", top);
    this.replaceFace("left", left);
    this.replaceFace("right", right);
  }

  displayDice() {
    const dice_formated = this.assembleDice();
    this.resetDice();

    return dice_formated;
  }

  resetDice() {
    this.dice_line1 = "   _______";
    this.dice_line2 = "  /      /\\";
    this.dice_line3 = " /      /  \\";
    this.dice_line4 = "/_____ /    \\";
    this.dice_line5 = "\\      \\    /";
    this.dice_line6 = " \\      \\  /";
    this.dice_line7 = "  \\ ____ \\/";
  }

  assembleDice() {
    const dice_formated =
      this.dice_line1 +
      "\n" +
      this.dice_line2 +
      "\n" +
      this.dice_line3 +
      "\n" +
      this.dice_line4 +
      "\n" +
      this.dice_line5 +
      "\n" +
      this.dice_line6 +
      "\n" +
      this.dice_line7;
    return dice_formated;
  }

  replaceFace(face, number) {
    if (face == "top") {
      switch (number) {
        case 1:
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 4 ? "O" : char))
            .join("");
          break;
        case 2:
          this.dice_line2 = this.dice_line2
            .split("")
            .map((char, index) => (index === 5 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => (index === 6 ? "O" : char))
            .join("");
          break;
        case 3:
          this.dice_line2 = this.dice_line2
            .split("")
            .map((char, index) => (index === 5 ? "O" : char))
            .join("");
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 4 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => (index === 3 ? "O" : char))
            .join("");
          break;
        case 4:
          this.dice_line2 = this.dice_line2
            .split("")
            .map((char, index) => ([4, 8].includes(index) ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => ([2, 6].includes(index) ? "O" : char))
            .join("");
          break;
        case 5:
          this.dice_line2 = this.dice_line2
            .split("")
            .map((char, index) => ([4, 8].includes(index) ? "O" : char))
            .join("");
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index == 5 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => ([2, 6].includes(index) ? "O" : char))
            .join("");
          break;
        case 6:
          this.dice_line2 = this.dice_line2
            .split("")
            .map((char, index) => ([4, 8].includes(index) ? "O" : char))
            .join("");
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => ([3, 7].includes(index) ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => ([2, 6].includes(index) ? "O" : char))
            .join("");
          break;
      }
    } else if (face == "left") {
      switch (number) {
        case 1:
          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => (index === 4 ? "O" : char))
            .join("");
          break;
        case 2:
          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => (index === 5 ? "O" : char))
            .join("");

          this.dice_line7 = this.dice_line7
            .split("")
            .map((char, index) => (index === 3 ? "O" : char))
            .join("");
          break;

        case 3:
          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => (index === 5 ? "O" : char))
            .join("");
          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => (index === 4 ? "O" : char))
            .join("");
          this.dice_line7 = this.dice_line7
            .split("")
            .map((char, index) => (index === 3 ? "O" : char))
            .join("");
          break;
        case 4:
          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => ([2, 6].includes(index) ? "O" : char))
            .join("");
          this.dice_line7 = this.dice_line7
            .split("")
            .map((char, index) => ([3, 8].includes(index) ? "O" : char))
            .join("");
          break;
        case 5:
          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => ([2, 6].includes(index) ? "O" : char))
            .join("");
          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => (index === 5 ? "O" : char))
            .join("");
          this.dice_line7 = this.dice_line7
            .split("")
            .map((char, index) => ([3, 8].includes(index) ? "O" : char))
            .join("");
          break;
        case 6:
          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => ([1, 6].includes(index) ? "O" : char))
            .join("");
          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => ([2, 7].includes(index) ? "O" : char))
            .join("");
          this.dice_line7 = this.dice_line7
            .split("")
            .map((char, index) => ([3, 8].includes(index) ? "O" : char))
            .join("");
          break;
      }
    } else if (face == "right") {
      switch (number) {
        case 1:
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => (index === 9 ? "O" : char))
            .join("");
          break;
        case 2:
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 10 ? "O" : char))
            .join("");
          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => (index === 8 ? "O" : char))
            .join("");
          break;

        case 3:
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 10 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => (index === 9 ? "O" : char))
            .join("");

          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => (index === 8 ? "O" : char))
            .join("");
          break;
        case 4:
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 10 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => (index === 11 ? "O" : char))
            .join("");

          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => (index === 8 ? "O" : char))
            .join("");

          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => (index === 9 ? "O" : char))
            .join("");
          break;
        case 5:
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 10 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => (index === 11 ? "O" : char))
            .join("");

          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => ([8, 10].includes(index) ? "O" : char))
            .join("");

          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => (index === 9 ? "O" : char))
            .join("");
          break;
        case 6:
          this.dice_line3 = this.dice_line3
            .split("")
            .map((char, index) => (index === 10 ? "O" : char))
            .join("");
          this.dice_line4 = this.dice_line4
            .split("")
            .map((char, index) => ([9, 11].includes(index) ? "O" : char))
            .join("");

          this.dice_line5 = this.dice_line5
            .split("")
            .map((char, index) => ([8, 10].includes(index) ? "O" : char))
            .join("");

          this.dice_line6 = this.dice_line6
            .split("")
            .map((char, index) => (index === 9 ? "O" : char))
            .join("");
          break;
      }
    }
  }
}

module.exports = Dice;
//      _______
//     /      /\
//    /      /  \
//   /_____ /    \
//   \      \    /
//    \      \  /
//     \ ____ \/
