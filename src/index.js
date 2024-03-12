import { GameDisplay, displayControls } from '../loader/display'
import { screen } from '../loader/screen.js'
import { GameBoard } from '../obj/gameboard'
import './style.css'



// const body = document.querySelector('body')
// const content = document.createElement('main')
// body.append(content)
// let gameBoard = GameBoard()
// gameBoard.placeShip()

// console.log(gameBoard.returnGrid())
// content.append(GameDisplay(gameBoard.returnGrid()));


// displayControls(gameBoard.receiveAttack)
let screenPlayer = screen()

const computerGameboard = document.querySelector('.gameboard-computer')

function clickHandler(e) {
    let cellNo = e.target.dataset.cellNo
    screenPlayer.play(cellNo);
}

computerGameboard.onclick = clickHandler




