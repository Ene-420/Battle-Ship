export const GameDisplay = () => {
  const playerBoard = (elements) => {
    const gameGrid = document.createElement("div");
    gameGrid.classList.add("gameboard-player");
    for (let i = 0; i < elements.length; i++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("ship-row");
      for (let gridColumn of elements[i]) {
        if (Object.keys(gridColumn.filled).length > 0) {
          const filledCell = document.createElement("button");
          filledCell.dataset.cellNo = `${gridColumn.row}${gridColumn.column}`;
          filledCell.classList.add("ship-cell");
          filledCell.classList.add("ship-filled");
          gridRow.append(filledCell);
        } else {
          const regularCell = document.createElement("button");
          regularCell.dataset.cellNo = `${gridColumn.row}${gridColumn.column}`;
          regularCell.classList.add("no-ship-cell");
          gridRow.append(regularCell);
        }
      }
      gameGrid.append(gridRow);
    }

    return gameGrid;
  }

  const computerBoard = (elements) => {
    const gameGrid = document.createElement("div");
    gameGrid.classList.add("gameboard-computer");
    for (let i = 0; i < elements.length; i++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("ship-row");
      for (let gridColumn of elements[i]) {
        if (Object.keys(gridColumn.filled).length > 0) {
          const filledCell = document.createElement("button");
          filledCell.dataset.cellNo = `${gridColumn.row}${gridColumn.column}`;
          filledCell.classList.add("ship-cell");
          gridRow.append(filledCell);
        } else {
          const regularCell = document.createElement("button");
          regularCell.dataset.cellNo = `${gridColumn.row}${gridColumn.column}`;
          regularCell.classList.add("no-ship-cell");
          gridRow.append(regularCell);
        }
      }
      gameGrid.append(gridRow);
    }

    return gameGrid;
  }
  return{playerBoard, computerBoard}
};

export function displayControls(callback) {
  // new Promise((resolve, reject) => {
    
  // })
  const gameBoard = document.querySelector(".gameboard-computer");

  gameBoard.onclick =function(event){
    if (event.target.tagName === "BUTTON") {
      let cellNumber = event.target.dataset.cellNo.split("");
      const diagonalCell = callback(~~cellNumber[0], ~~cellNumber[1]);
      if (diagonalCell) {
        if (event.target.classList.contains("ship-cell")) {
          event.target.classList.add("ship-cell-hit");
          console.log({ diagonalCell });
          if (diagonalCell.length > 0) {
            console.log({ diagonalCell });
            for (let cell of diagonalCell) {
              let emptyDiagonalCell = gameBoard.querySelector(
                `[data-cell-no = '${cell[0]}${cell[1]}']`,
              );
              console.log({ emptyDiagonalCell });
              if (emptyDiagonalCell) {
                const border = document.createElement("span");
                border.classList.add("no-ship-border-cell-hit");
                emptyDiagonalCell.append(border);
              }
            }
          }
          return true;
        } else if (event.target.classList.contains("no-ship-cell")) {
          const played = document.createElement("span");
          played.classList.add("no-ship-cell-hit");
          event.target.append(played);
          return false;
        }
      }
    }
  };
};

export const displayControlsComputer = (value, callback) => {
  const compChosenCell = document.querySelector(`.gameboard-player [data-cell-no = '${value}']`);
  if (compChosenCell) {
    const splitValue = value.split("");
    if (callback(~~splitValue[0], ~~splitValue[1])) {
      if (compChosenCell.classList.contains("ship-cell")) {
        compChosenCell.classList.add("ship-cell-hit");
        return true;
      } else if (compChosenCell.classList.contains("no-ship-cell")) {
        const played = document.createElement("span");
        played.classList.add("no-ship-cell-hit");
        compChosenCell.append(played);
        return false;
      }
    }
  }
};
