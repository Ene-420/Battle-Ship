import { Computer, Player } from "../obj/player";
import { displayControls, displayControlsComputer } from "./display";
import { GameBoard } from "../obj/gameboard";

const screen = () => {
    function play() {
       const {gameBoard}=init()
    
        let { currentPlayer, switchCurrentPlayer } = switchPlay();
        let shipStatus = gameBoard.checkSunkenShips()
    //const {switchCurrentPlayer} = switchPlay
    while (trushipe)
      if (currentPlayer.player === "Human") {
          if (displayControls(gameBoard.recieveAttack)) {
            
         
          }
        else  currentPlayer = switchCurrentPlayer();
      }

      else if (currentPlayer.player === 'Computer') {
          let {row, column} = currentPlayer.makePlay()
          if (
            displayControlsComputer(`${row}${column}`, gameBoard.recieveAttack)
          ) {
            //currentPlayer = switchCurrentPlayer()
          } else currentPlayer = switchCurrentPlayer();
      }
  }

  function init() {
    const body = document.querySelector("body");
    const content = document.createElement("main");
    body.append(content);
    let gameBoard = GameBoard();
    gameBoard.placeShip();

    console.log(gameBoard.returnGrid());
      content.append(GameDisplay(gameBoard.returnGrid()));
      return gameBoard
  }
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
