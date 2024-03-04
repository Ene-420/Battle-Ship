export const GameDisplay = (elements) => {
    const gameGrid = document.createElement('div')
    gameGrid.classList.add('gameboard')
    for (let i = 0; i < elements.length; i++){
        const gridRow = document.createElement('div')
        gridRow.classList.add('ship-row')
        for (let gridColumn of elements[i]) {
            if (Object.keys(gridColumn.filled).length > 0) {
                const filledCell = document.createElement('button')
                filledCell.dataset.cellNo = `${gridColumn.row}${gridColumn.column}`
                filledCell.classList.add('ship-cell')
                gridRow.append(filledCell)
            }
            else {
                const regularCell = document.createElement('button')
                regularCell.dataset.cellNo = `${gridColumn.row}${gridColumn.column}`;
                regularCell.classList.add('no-ship-cell')
                gridRow.append(regularCell)
            }
            
        }
        gameGrid.append(gridRow)
    }

    return gameGrid
} 

export const displayControls = (callback) => {
    const gameBoard = document.querySelector('.gameboard') 

    gameBoard.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            let cellNumber = (event.target.dataset.cellNo).split('')
            if (callback(~~cellNumber[0], ~~cellNumber[1])) {
                if (event.target.classList.contains('ship-cell')) {
                    //event.target.classList.remove('ship-cell')
                    event.target.classList.add('ship-cell-hit')
                }

                else if (event.target.classList.contains('no-ship-cell')) {
                    //event.target.classList.remove("no-ship-cell");
                    event.target.classList.add("no-ship-cell-hit");
                }
            }
            
        }
    })
}