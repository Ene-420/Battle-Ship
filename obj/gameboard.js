import Ship from "./ship";

export const GameBoard = () => {
  let grid = [];
  let adjacentCells = [];
  let filledCells = [];
  const shipPlacements = [
    { length: 4, count: 1 },
    { length: 3, count: 2 },
    { length: 2, count: 3 },
    { length: 1, count: 4 },
  ];

  render();
  //placeShip();

  function render() {
    const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = row.length - 1; i >= 0; i--) {
      let rowItem = [];
      for (let x = 0; x < column.length; x++) {
        let newCell = new Cell(row[i], column[x]);
        rowItem.push(newCell);
      }
      grid.push(rowItem);
    }
  }

  function placeShip(row = 0, column = 0) {
    let cell = grid[row][column];
    for (let ship of shipPlacements) {
      for (let i = 0; i < ship.count; i++) {
        let shipDirection = getRandomNumber(0, 2);
        // vertical = 1, horiozntal = 0
        let newCell = cellCheck(cell);
        //console.log({newCell})
        if (shipDirection === 1) {
          let foundSpace = checkForPerfectFitVertical(newCell, ship);
          let { row, column } = foundSpace;
          let newShip = new Ship(ship.length);
          //console.log({foundSpace})
          for (let i = 0; i < ship.length; i++) {
            grid[row][column].filled = newShip;
            adjacentCells.push([row, column]);
            filledCells.push(grid[row][column]);
            column++;
          }
        } else {
          let foundSpace = checkForPerfectFitHorizontal(newCell, ship);
          let { row, column } = foundSpace;
          let newShip = new Ship(ship.length);
          //console.log({ foundSpace });
          for (let i = 0; i < ship.length; i++) {
            //console.log({foundSpace})
            grid[row][column].filled = newShip;
            adjacentCells.push([row, column]);
            filledCells.push(grid[row][column]);
            row++;
          }
        }
      }
    }
  }

  function checkSunkenShips() {
    console.log(filledCells);
    if (filledCells.length > 0)
      return filledCells.every((ship) => ship.filled.isSunk());
    else return false;
  }

  //check for cells that can contain ship
  function checkForPerfectFitVertical(cell, ship) {
    if (
      cellState(cell.row, cell.column) &&
      shipFitInGrid(cell, ship.length, "vertical")
    ) {
      //console.log(cell);
      let borderCell = findVerticalAdjacentCells(cell, ship);

      const result = borderCell.every((itemCell) =>
        cellState(itemCell[0], itemCell[1]),
      );
      //console.log(result)
      if (result) {
        adjacentCells.push(...borderCell);
        return cell;
      } else {
        let newRandomCell = grid[getRandomNumber()][getRandomNumber()];
        return checkForPerfectFitVertical(cellCheck(newRandomCell), ship);
      }
    } else {
      let newRandomCell = grid[getRandomNumber()][getRandomNumber()];
      return checkForPerfectFitVertical(cellCheck(newRandomCell), ship);
    }
  }

  function checkForPerfectFitHorizontal(cell, ship) {
    if (
      cellState(cell.row, cell.column) &&
      shipFitInGrid(cell, ship.length, "horizontal")
    ) {
      //console.log(cell);
      let borderCell = findHorizontalAdjacentCells(cell, ship);

      const result = borderCell.every((itemCell) =>
        cellState(itemCell[0], itemCell[1]),
      );
      if (result) {
        adjacentCells.push(...borderCell);
        return cell;
      } else {
        let newRandomCell = grid[getRandomNumber()][getRandomNumber()];
        return checkForPerfectFitVertical(cellCheck(newRandomCell), ship);
      }
    } else {
      let newRandomCell = grid[getRandomNumber()][getRandomNumber()];
      return checkForPerfectFitHorizontal(cellCheck(newRandomCell), ship);
    }
  }
  function receiveAttack(row, column) {
    const cellState = grid[row][column];

    if (Object.keys(cellState.filled).length > 0) {
      let attackedShip = cellState.filled;

      attackedShip.isHit();
      return true;
    } else {
      cellState.hit = true;
      return true;
    }
  }

  function getRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // check cell content return true -> empty, false -> not empty
  function cellState(row, column) {
    if (row > 9 || column > 9) return false;
    let gridCell = grid[row][column];
    //console.log(row, column);
    if (Object.keys(gridCell.filled).length > 0) return false;
    else return true;
  }

  // ensure cell (row, column) fit in grid
  function checkCell(row, column) {
    if (row < 10 && row >= 0 && column < 10 && column >= 0 && grid[row][column])
      return true;
    else return false;
  }

  function arrayContainsArray(array, content) {
    return array.some(
      (element) => JSON.stringify(element) === JSON.stringify(content),
    );
  }
  // look for empty cell and return cell
  function cellCheck(cell) {
    if (
      Object.keys(cell.filled).length === 0 &&
      !arrayContainsArray(adjacentCells, [cell.row, cell.column])
    )
      return cell;
    else return cellCheck(grid[getRandomNumber()][getRandomNumber()]);
  }

  function shipFitInGrid(cell, length, direction) {
    if (direction.includes("vertical")) {
      let { row, column } = cell;
      let checkStartCell = checkCell(row, column);
      let checkEndCell = checkCell(row, column + (length - 1));

      if (checkStartCell && checkEndCell) return true;
      else return false;
    } else {
      let { row, column } = cell;
      let checkStartCell = checkCell(row, column);
      let checkEndCell = checkCell(row + (length - 1), column);

      if (checkStartCell && checkEndCell) return true;
      else return false;
    }
  }

  //find bordering cells of a ship
  function findVerticalAdjacentCells(cell, ship) {
    const { front, up, down, back } = directionOperations();
    let adjacentCells = [];
    let subRow = cell.row,
      subColumn = cell.column;

    for (let x = 0; x < ship.length; x++) {
      if (cell.row === 0) {
        if (subColumn === 0) {
          if (x === ship.length - 1)
            adjacentCells.push(...up(cell.row, subColumn));
          adjacentCells.push(...front(cell.row, subColumn));
          subColumn++;
        } else if (subColumn === 9) {
          if (x === 0) adjacentCells.push(...down(cell.row, subColumn));
          adjacentCells.push(...front(cell.row, subColumn));
          subColumn++;
        } else if (subColumn > 0 && subColumn < 9) {
          if (x === 0) adjacentCells.push(...down(cell.row, subColumn));
          if (x === ship.length - 1) {
            adjacentCells.push(...up(cell.row, subColumn));
            adjacentCells.push(...front(cell.row, subColumn));
          }
          //else adjacentCells.push(...front(cell.row, cell.column));
          subColumn++;
        }
      }

      if (cell.row === 9) {
        if (subColumn === 0) {
          if (x === ship.length - 1)
            adjacentCells.push(...up(cell.row, subColumn));
          adjacentCells.push(...back(cell.row, subColumn));
          subColumn++;
        } else if (cell.column === 9) {
          if (x === 0) adjacentCells.push(...down(cell.row, subColumn));
          adjacentCells.push(...back(cell.row, subColumn));
          subColumn++;
        } else if (subColumn > 0 && subColumn < 9) {
          if (x === 0) adjacentCells.push(...down(cell.row, subColumn));
          if (x === ship.length - 1)
            adjacentCells.push(...up(cell.row, subColumn));
          adjacentCells.push(...back(cell.row, subColumn));
          subColumn++;
        }
      }

      if (cell.row > 0 && cell.row < 9) {
        if (subColumn === 0) {
          if (x === ship.length - 1)
            adjacentCells.push(...up(cell.row, subColumn));
          adjacentCells.push(
            ...back(cell.row, subColumn),
            ...front(cell.row, subColumn),
          );
          subColumn++;
        } else if (cell.column === 9) {
          if (x === 0) adjacentCells.push(...down(cell.row, subColumn));
          adjacentCells.push(
            ...back(cell.row, subColumn),
            ...front(cell.row, subColumn),
          );
          subColumn++;
        } else if (subColumn > 0 && subColumn < 9) {
          if (x === 0) adjacentCells.push(...down(cell.row, subColumn));
          if (x === ship.length - 1)
            adjacentCells.push(...up(cell.row, subColumn));
          adjacentCells.push(
            ...back(cell.row, subColumn),
            ...front(cell.row, subColumn),
          );
          subColumn++;
        }
      }
    }
    return adjacentCells.filter((word) => checkCell(word[0], word[1]) === true);
  }

  function findDiagonals(cell) {
    let row = cell.row,
      column = cell.column;

    return [
      [row - 1, column + 1],
      [row - 1, column - 1],
      [row + 1, column - 1],
      [row + 1, column + 1],
    ].filter((grid) => checkCell(grid[0], grid[1]) === true);
  }
  function findHorizontalAdjacentCells(cell, ship) {
    const { up, down, front, back } = directionOperations().horizontal;
    let adjacentCells = [];
    let subRow = cell.row;
    for (let i = 0; i < ship.length; i++) {
      if (cell.column === 0) {
        if (subRow === 0) {
          if (i === ship.length - 1)
            adjacentCells.push(...front(subRow, cell.column));
          adjacentCells.push(...up(subRow, cell.column));
          subRow++;
        } else if (subRow === 9) {
          if (i === 0) adjacentCells.push(...back(subRow, cell.column));
          adjacentCells.push(...up(subRow, cell.column));
          subRow++;
        } else if (subRow > 0 && subRow < 9) {
          if (i === 0) adjacentCells.push(...back(subRow, cell.column));
          if (i === ship.length - 1)
            adjacentCells.push(...front(subRow, cell.column));
          adjacentCells.push(...up(subRow, cell.column));
          subRow++;
        }
      }

      if (cell.column === 9) {
        if (subRow === 0) {
          if (i === ship.length - 1)
            adjacentCells.push(...front(subRow, cell.column));
          adjacentCells.push(...down(subRow, cell.column));
          subRow++;
        } else if (subRow === 9) {
          if (i === 0) adjacentCells.push(...back(subRow, cell.column));
          adjacentCells.push(...down(subRow, cell.column));
          subRow++;
        } else if (subRow > 0 && subRow < 9) {
          if (i === 0) adjacentCells.push(...back(subRow, cell.column));
          if (i === ship.length - 1)
            adjacentCells.push(...front(subRow, cell.column));
          adjacentCells.push(...down(subRow, cell.column));
          subRow++;
        }
      }

      if (cell.column > 0 && cell.column < 9) {
        if (subRow === 0) {
          if (i === ship.length - 1)
            adjacentCells.push(...front(subRow, cell.column));
          adjacentCells.push(...down(subRow, cell.column));
          adjacentCells.push(...up(subRow, cell.column));
          subRow++;
        } else if (subRow === 9) {
          if (i === 0) adjacentCells.push(...back(subRow, cell.column));
          adjacentCells.push(...down(subRow, cell.column));
          adjacentCells.push(...up(subRow, cell.column));
          subRow++;
        } else if (subRow > 0 && subRow < 9) {
          if (i === 0) adjacentCells.push(...back(subRow, cell.column));
          if (i === ship.length - 1)
            adjacentCells.push(...front(subRow, cell.column));
          adjacentCells.push(...down(subRow, cell.column));
          adjacentCells.push(...up(subRow, cell.column));
          subRow++;
        }
      }
    }
    return adjacentCells.filter((word) => checkCell(word[0], word[1]) === true);
  }
  function returnGrid() {
    return grid;
  }

  return {
    returnGrid,
    receiveAttack,
    checkSunkenShips,
    cellState,
    cellCheck,
    shipFitInGrid,
    findVerticalAdjacentCells,
    checkForPerfectFitVertical,
    checkForPerfectFitHorizontal,
    findHorizontalAdjacentCells,
    placeShip,
    findDiagonals
  };
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

const directionOperations = () => {
  const horizontal = {
    front(row, column) {
      let frontRow = row + 1;
      let columnAbove = column + 1;
      let columnBelow = column - 1;

      return [
        [frontRow, column],
        [frontRow, columnAbove],
        [frontRow, columnBelow],
      ];
    },
    down(row, column) {
      return [[row, column - 1]];
    },
    up(row, column) {
      return [[row, column + 1]];
    },
    back(row, column) {
      return [
        [row - 1, column],
        [row - 1, column + 1],
        [row - 1, column - 1],
      ];
    },
  };
  function up(row, column) {
    let backRow = row - 1;
    let frontRow = row + 1;
    let aboveColumn = column + 1;

    return [
      [backRow, aboveColumn],
      [frontRow, aboveColumn],
      [row, aboveColumn],
    ];
  }

  function down(row, column) {
    let backRow = row - 1;
    let frontRow = row + 1;
    let columnBelow = column - 1;

    return [
      [backRow, columnBelow],
      [frontRow, columnBelow],
      [row, columnBelow],
    ];
  }

  function front(row, column) {
    let frontRow = row + 1;

    return [[frontRow, column]];
  }

  function back(row, column) {
    let backRow = row - 1;

    return [[backRow, column]];
  }

  return { up, down, front, back, horizontal };
};
