export class Player {
  constructor(name) {
    this.name = name;
    this.player = "Human";
  }
}

export class Computer {
  plays = [];
  constructor(name) {
    this.name = name;
    this.player = "Computer";
  }

  getRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  arrayContainsArray(array, content) {
    return array.some(
      (element) => JSON.stringify(element) === JSON.stringify(content),
    );
  }
  makePlay(row = 0, column = 0) {
    if (!this.arrayContainsArray(this.plays, [row, column])) {
      this.plays.push([row, column]);
      return { row, column };
    } else {
      let row = this.getRandomNumber();
      let column = this.getRandomNumber();
      return this.makePlay(row, column);
    }
  }
}
