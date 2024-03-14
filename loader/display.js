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
  };

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
  };
  return { playerBoard, computerBoard };
};

export const displayControls = (value, callback) => {
  //const gameBoard = document.querySelector('.gameboard-computer')
  const computerGameBoard = document.querySelector(
    `.gameboard-computer> .ship-row> button[data-cell-no = '${value}']`,
  );

  if (computerGameBoard) {
    if (computerGameBoard.classList.contains("hit")) {
      return null;
    } else {
      let cellNumber = value.split("");
      const response = callback(~~cellNumber[0], ~~cellNumber[1]);
      if (Array.isArray(response)) {
        if (computerGameBoard.matches(".ship-cell")) {
          //computerGameBoard.disabled = true;
          computerGameBoard.classList.add("ship-cell-hit");
          computerGameBoard.classList.add("hit");

          //console.log({ diagonalCell });
          if (response.length > 0) {
            console.log({ response });
            for (let cell of response) {
              let emptyDiagonalCell = document.querySelector(
                `.gameboard-computer [data-cell-no = '${cell[0]}${cell[1]}']`,
              );
              console.log({ emptyDiagonalCell });
              if (emptyDiagonalCell) {
                const border = document.createElement("span");
                //emptyDiagonalCell.disabled = true;
                border.classList.add("no-ship-border-cell-hit");
                emptyDiagonalCell.append(border);
                emptyDiagonalCell.classList.add("hit");
              }
            }
          }
          return true;
        }
      } else if (response === true) {
        if (computerGameBoard.matches(".no-ship-cell")) {
          const played = document.createElement("span");
          played.classList.add("no-ship-cell-hit");
          computerGameBoard.append(played);
          computerGameBoard.classList.add("hit");
          //computerGameBoard.disabled = true
          return false;
        }
      }
    }
  }
};

export const displayControlsComputer = (value, callback) => {
  const compChosenCell = document.querySelector(
    `.gameboard-player [data-cell-no = '${value}']`,
  );
  if (compChosenCell.classList.contains('hit')) {
    return 'try again'
  }
  else {
      if (compChosenCell) {
        const splitValue = value.split("");
        const response = callback(~~splitValue[0], ~~splitValue[1]);
        if (Array.isArray(response)) {
          if (compChosenCell.matches(".ship-cell")) {
            //computerGameBoard.disabled = true;
            compChosenCell.classList.add("ship-cell-hit");
            compChosenCell.classList.add("hit");

            //console.log({ diagonalCell });
            if (response.length > 0) {
              console.log({ response });
              for (let cell of response) {
                let emptyDiagonalCell = document.querySelector(
                  `.gameboard-player [data-cell-no = '${cell[0]}${cell[1]}']`,
                );
                console.log({ emptyDiagonalCell });
                if (emptyDiagonalCell) {
                  const border = document.createElement("span");
                  //emptyDiagonalCell.disabled = true;
                  border.classList.add("no-ship-border-cell-hit");
                  emptyDiagonalCell.append(border);
                  emptyDiagonalCell.classList.add("hit");
                }
              }
            }
            return true;
          }
        } else if (response === true) {
          if (compChosenCell.matches(".no-ship-cell")) {
            const played = document.createElement("span");
            played.classList.add("no-ship-cell-hit");
            compChosenCell.append(played);
            compChosenCell.classList.add("hit");
            //computerGameBoard.disabled = true
            return false;
          }
        }
      }
  }

};
