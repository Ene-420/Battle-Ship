export class GameBoard {
  grid = [];
  shipPlacements = [
    { length: 4, count: 1 },
    { length: 3, count: 2 },
    { length: 2, count: 3 },
    { length: 1, count: 4 },
  ];

  render() {
    row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < this.row.length; i++) {
      let rowItem = [];
      for (let x = 0; i < this.column.length; x++) {
        let newCell = new Cell(i, x);
        rowItem.push(newCell);
      }
      this.grid.push(rowItem);
    }
  }

  placeShip() {
    for (let i = 0; i < this.shipPlacements.length; i++) {
      /// 0 = horizontal, 1 = vertical

      for (let i = 0; i < this.shipPlacements[i].count; i++) {
        let shipDirection = this.getRandomNumber(0, 2);

        if (shipDirection === 1) {
          let cell =
            this.grid[this.getRandomNumber()][this.getRandomNumber()].filled;
          let emptyCell = this.cellCheck(cell);
          //for(let i = )
        }
      }
    }
  }

  // placeShips(row = this.getRandomNumber(), column = this.getRandomNumber()) {
  //     if(){}
  //     else{}
  // }
  receiveAttack(row, column) {
    const cellState = grid[row][column];

    if (Object.keys(cellState.filled)) {
      let attackedShip = cellState.filled;

      attackedShip.isHit();
      return true;
    } else return false;
  }

  getRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  cellState(row, column) {
    let gridCell = this.grid[row][column];
    if (Object.keys(gridCell.filled)) return false;
    else return true;
  }

  cellCheck(cell) {
    if (!Object.keys(cell.filled)) return cell;
    else {
      this.cellCheck(
        this.grid[this.getRandomNumber()][this.getRandomNumber()].filled,
      );
    }
    return cell;
  }

  findAdjacentCells(cell, length, direction) {
    let adjacentCells = [];
    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        if (cell.column === 0 && cell.row === 0) {
          let state = this.cellState(cell.row, cell.column + 1);

          if (state) {
            adjacentCells.push([cell.row, cell.column + 1]);
            cell.row++;
          } else return false;
        } else if (cell.column === 9) {
          let state = this.cellState(cell.row, cell.column - 1);

          if (state) {
            adjacentCells.push([cell.row, cell.column - 1]);
            cell.row++;
          } else return false;
        } else if (i == 0) {
          if (row - 1 >= 0 && row - 1 <= 9) {
          }
        }
      }
    }
  }

  cellRowPosition(row, column) {
    if (column === 0) {
      if (row === 0) {
        let state = this.cellState(row, column + 1);

        if (state) {
          adjacentCells.push([row, column + 1]);
          row++;
        } else return false;
      } else if (row > 0) {
        let state = this.cellState(row - 1, column + 1);

        if (state) {
          adjacentCells.push([row - 1, column + 1]);
          row++;
        } else return false;
      }
    } else if (column === 9) {
      if (row === 0) {
        let state = this.cellState(row, column + 1);

        if (state) {
          adjacentCells.push([row, column + 1]);
          row++;
        } else return false;
      }
    } else {
    }
  }
}

class Cell {
  constructor(row, column, filled = {}) {
    this.column = column;
    this.row = row;
    this.filled = filled;
  }

  // fillCell() {
  //     this.filled = true
  // }
}
