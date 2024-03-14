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

    console.log({ currentPlayer });
    if (currentPlayer.player === "Human") {
      let hasPlayerPlayed = displayControls(
        value,
        computerGameboard.receiveAttack,
      );
      console.log({ hasPlayerPlayed });
      if (hasPlayerPlayed) {
        shipStatus = computerGameboard.checkSunkenShips();
      } else if (hasPlayerPlayed === false && hasPlayerPlayed !== null) {
        currentPlayer = switchCurrentPlayer();
        console.log({ currentPlayer });
      }
    }
    if (currentPlayer.player === "Computer") {
      let { row, column } = currentPlayer.makePlay();
      let playAgain = displayControlsComputer(
        `${row}${column}`,
        playerGameBoard.receiveAttack,
      );
      if (playAgain === true) {
        let canPlayAgain = true;
        while (canPlayAgain === true) {
          let computerPlay = anotherChance(row, column)
          const outcome = displayControlsComputer(
            `${computerPlay[0]}${computerPlay[1]}`,
            playerGameBoard.receiveAttack,
          );
          playAgain = outcome
          canPlayAgain = outcome
          row = computerPlay[0], column = computerPlay[1]
        }
        shipStatus = playerGameBoard.checkSunkenShips();
        //play();
        //currentPlayer = switchCurrentPlayer()
      } if (playAgain==="try again") play();
      else currentPlayer = switchCurrentPlayer();
    }
    //    }
  }

  function anotherChance(row,column) {
    const possiblePlays = [1, -1]
    const possibledirection = computerGameboard.getRandomNumber(0, 2)
    const playMovement = computerGameboard.getRandomNumber(0, 2);

    //row -> 0, column -> 1
    if (possibledirection === 0) {
      if (
        row + possiblePlays[playMovement] > 0 &&
        row + possiblePlays[playMovement]
       <10)
        return [row + possiblePlays[playMovement], column];
      else return anotherChance(row, column)
    }

    else {
      if (
        column + possiblePlays[playMovement] > 0 &&
        column + possiblePlays[playMovement]
      < 10)
        return [row, column + possiblePlays[playMovement]];
      else return anotherChance(row,column)
    }
  }

  function init() {
    const body = document.querySelector("body");
    const content = document.createElement("main");
    const { playerBoard, computerBoard } = GameDisplay();
    body.append(content);
    let playerGameBoard = GameBoard();
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
