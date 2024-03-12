import { Computer, Player } from "../obj/player.js";
import {
  GameDisplay,
  displayControls,
  displayControlsComputer,
} from "./display.js";
import { GameBoard } from "../obj/gameboard.js";

export const screen = () => {
  const { computerGameboard, playerGameBoard } = init();
  let { currentPlayer, switchCurrentPlayer } = switchPlay();
  function play(value) {
    

    
    let shipStatus = false;
    //const {switchCurrentPlayer} = switchPlay
    //    while (!shipStatus) {
    console.log({currentPlayer})
      if (currentPlayer.player === "Human") {
        const hasPlayerPlayed = displayControls(value,
          computerGameboard.receiveAttack,
        );
        if (hasPlayerPlayed) {
          shipStatus = computerGameboard.checkSunkenShips();
        } else if(!hasPlayerPlayed){
          currentPlayer = switchCurrentPlayer();
          console.log({ currentPlayer });
        }
      } if (currentPlayer.player === "Computer") {
        let { row, column } = currentPlayer.makePlay();
        if (
          displayControlsComputer(
            `${row}${column}`,
            playerGameBoard.receiveAttack,
          )
        ) {
          shipStatus = playerGameBoard.checkSunkenShips()
          //currentPlayer = switchCurrentPlayer()
        } else currentPlayer = switchCurrentPlayer();
      }
//    }
      
  }

  function init() {
    const body = document.querySelector("body");
    const content = document.createElement("main");
    const { playerBoard, computerBoard } = GameDisplay();
    body.append(content);
    let playerGameBoard = GameBoard()
    let computerGameboard = GameBoard();
    playerGameBoard.placeShip();
    computerGameboard.placeShip();

    console.log(playerGameBoard.returnGrid());
    console.log(computerGameboard.returnGrid());

    content.append(
      playerBoard(playerGameBoard.returnGrid()),
      computerBoard(computerGameboard.returnGrid()),
    );
    return { computerGameboard, playerGameBoard };
  }

  return { play };
};

function switchPlay() {
  let players = [];
  let player1 = new Player("Mark");
  let player2 = new Computer("E-3000");

  players.push(player1, player2);
  let currentPlayer = players[0];

  function switchCurrentPlayer() {
    if (currentPlayer.player.includes("Human")) {
      currentPlayer = players[1];
      return currentPlayer;
    } else if (currentPlayer.player.includes("Computer")) {
      currentPlayer = players[0];
      return currentPlayer;
    }
  }

  return { currentPlayer, switchCurrentPlayer };
}
