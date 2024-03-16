import { GameDisplay, displayControls } from "../loader/display";
import { screen } from "../loader/screen.js";
import { GameBoard } from "../obj/gameboard";
import "./style.css";

// const body = document.querySelector('body')
// const content = document.createElement('main')
// body.append(content)
// let gameBoard = GameBoard()
// gameBoard.placeShip()

// console.log(gameBoard.returnGrid())
// content.append(GameDisplay(gameBoard.returnGrid()));
const body = document.querySelector("body");
const startGameBtn = document.createElement("button");
startGameBtn.classList.add("start-game-btn");

body.append(startGameBtn);
//let screenPlayer
startGameBtn.textContent = "Start Game";
startGameBtn.onclick = function (event) {
  let screenPlayer = screen();
    startGameBtn.style.display = 'none'
    body.style.gridTemplateRows= '1fr'
  const computerGameboard = document.querySelector(".gameboard-computer");
  computerGameboard.onclick = function (e) {
    //console.log({ e });
    let cellNo = e.target.dataset.cellNo;
    console.log({ cellNo });
    screenPlayer.play(cellNo);
  };
};

// displayControls(gameBoard.receiveAttack)

//function clickHandler(e) {}
