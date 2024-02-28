import { GameBoard } from "../obj/gameboard";

test('board', () => {
    let gameboard = GameBoard()

    expect(gameboard.returnGrid()).toBe(10)
})