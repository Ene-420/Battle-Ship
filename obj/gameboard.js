import Ship from "./ship";

export const GameBoard = () => {
  let grid = [];
  const shipPlacements = [
    { length: 4, count: 1 },
    { length: 3, count: 2 },
    { length: 2, count: 3 },
    { length: 1, count: 4 },
  ];

  render();
  placeShip();

  function render() {
    const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = row.length - 1; i >= 0; i--) {
      let rowItem = [];
      for (let x = 0; x < column.length; x++) {
        let newCell = new Cell(i, x);
        rowItem.push(newCell);
      }
      grid.push(rowItem);
    }
  }

  function arrayContainsArray(array, content) {
    return array.some(
      (element) => JSON.stringify(element) === JSON.stringify(content),
    );
  }

  function placeShip(row = 0, column = 0) {
    let cell = grid[row][column];
    for (let ship of shipPlacements) {
      for (let i = 0; i < ship.count; i++) {
        //let shipDirection = getRandomNumber(0, 2)
        let shipDirection = 1;
        if (shipDirection === 1) {
          let foundSpace = checkForPerfectFitVertical(cell, ship);
          for (let i = 0; i < ship.length; i++) {
            (grid[foundSpace.row][foundSpace.column]).filled = ship;
            foundSpace.column++;
          }
        } else {
          let foundSpace = checkForPerfectFitHorizontal(cell, ship);
          for (let i = 0; i < ship.length; i++) {
            grid[foundSpace.row][foundSpace.column].filled = ship;
            foundSpace.column++;
          }
        }
      }
    }
  }

  function checkSunkenShips() {
    let filledCells = grid.filter((cell) => Object.keys(cell.filled));
    return filledCells.every((ship) => ship.isSunken());
  }

  function checkForPerfectFitVertical(cell, ship) {
    if (
      cellState(cell.row, cell.column) &&
      findVerticalAdjacentCells(cell, ship)
    ) {
      let adjacentCell = findVerticalAdjacentCells(cell, ship);

      return cell;
    } else {
      let cellToCheck = cellCheck(cell);
      return checkForPerfectFitVertical(cellToCheck, ship);
    }
  }

  function checkForPerfectFitHorizontal(cell) {
    if (cellState(cell.row, cell.column)) {
      if (findVerticalAdjacentCells(grid[cell.row][cell.column])) return cell;
    } else {
      let cellToCheck = cellCheck(cell);
      console.log(cellToCheck)
      return checkForPerfectFit(cellToCheck);
    }
  }
  function receiveAttack(row, column) {
    const cellState = grid[row][column];

    if (Object.keys(cellState.filled)) {
      let attackedShip = cellState.filled;

      attackedShip.isHit();
      //return true;
    } else {
      cellState.hit = true;
      //return false
    }
  }

  function getRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  //check cell content return true -> empty false -> not empty
  function cellState(row, column) {
    if(row >9 || column > 9 )return false
    let gridCell = grid[row][column];
    console.log(row, column)
    if (Object.keys(gridCell.filled).length > 0) return false;
    else return true;
  }

  // look for empty cell and return cell
  function cellCheck(cell) {
    if (Object.keys(cell.filled).length === 0) return cell;
    else return cellCheck(grid[getRandomNumber()][getRandomNumber()]);
  }

  function findVerticalAdjacentCells(cell, ship) {
    let adjacentCell = [];
    //if (direction.includes("vertical")) {
    if (cell.row === 0 && cell.colmun === 0) {
      cell.row++;
      for (let i = 0; i < ship.length; i++) {
        if (cellState(cell.row, cell.column)) {
          adjacentCell.push([cell.row, cell.colmun]);
          cell.column++;
        } else return false;

        if (i == cell.length - 1) {
          let rightAboveTop = cellState(cell.row, cell.column)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;
          let aboveTop = cellState(cell.row--, cell.column)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;

          if (rightAboveTop == false || aboveTop == false) return false;
        }
      }
    } else if (cell.row > 0 && cell.column === 0) {
      let backRow = cell.row - 1;
      let frontRow = cell.row + 1;
      for (let i = 0; i < cell.length; i++) {
        if (
          cellState(backRow, cell.column) &&
          cellState(frontRow, cell.column)
        ) {
          adjacentCell.push([backRow, cell.colmun]);
          adjacentCell.push([frontRow, cell.column]);
          cell.column++;
        } else return false;

        if (i == cell.length - 1) {
          let aboveTop = cellState(cell.row, cell.column)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;
          let rightAboveTop = cellState(backRow, cell.column)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;

          let leftAboveTop = cellState(frontRow, cell.column)
            ? adjacentCell.push([frontRow, cell.column])
            : false;

          if (
            rightAboveTop == false ||
            aboveTop == false ||
            leftAboveTop == false
          )
            return false;
        }
      }
    } else {
      let backRow = cell.row - 1;
      let frontRow = cell.row + 1;
      let backColumn = cell.column - 1;
      for (let i = 0; i < cell.length; i++) {
        if (i == 0) {
          let belowBottom = cellState(cell.row, backColumn)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;
          let rightBelowBottom = cellState(backRow, backColumn)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;

          let leftBelowBottom = cellState(frontRow, backColumn)
            ? adjacentCell.push([frontRow, cell.column])
            : false;

          if (
            rightBelowBottom == false ||
            belowBottom == false ||
            leftBelowBottom == false
          )
            return false;
        }
        if (
          cellState(backRow, cell.column) &&
          cellState(frontRow, cell.column)
        ) {
          adjacentCell.push([backRow, cell.colmun]);
          adjacentCell.push([frontRow, cell.column]);
          cell.column++;
        } else return false;

        if (i == cell.length - 1) {
          let aboveTop = cellState(cell.row, cell.column)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;
          let rightAboveTop = cellState(backRow, cell.column)
            ? adjacentCell.push([cell.row, cell.colmun])
            : false;

          let leftAboveTop = cellState(frontRow, cell.column)
            ? adjacentCell.push([frontRow, cell.column])
            : false;

          if (rightAboveTop == false || aboveTop == false) return false;
        }
      }
    }

    return adjacentCell;
  }

  function returnGrid() {
    return grid;
  }

  return { returnGrid, receiveAttack, checkSunkenShips };
};

class Cell {
  constructor(row, column, filled = {}, hit = false) {
    this.column = column;
    this.row = row;
    this.filled = filled;
  }

  // fillCell() {
  //     this.filled = true
  // }
}
