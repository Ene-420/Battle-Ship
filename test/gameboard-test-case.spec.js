import { GameBoard } from "../obj/gameboard";

describe("Test cells in  grid", () => {
  let gameboard;
  beforeAll(() => {
    gameboard = GameBoard();
  });

  test.skip("board", () => {
    expect(gameboard.returnGrid().length).toBe(10);
  });

  test("CellState -> Random Cell on Board", () => {
    expect(gameboard.cellState(0, 0)).toBe(true);
  });

  test("CellState ->Not on board ", () => {
    expect(gameboard.cellState(10, 10)).toBeFalsy();
  });

  test("Cell Check -> Cell Not filled", () => {
    expect(gameboard.cellCheck({ row: 0, column: 1, filled: {} })).toEqual({
      row: 0,
      column: 1,
      filled: {},
    });
  });
    
    test.skip('Cell check -> Cell filled return another cell', () => {
        const mockCallCellCheck = jest.fn(
          gameboard.cellCheck({
            row: 0,
            column: 1,
            filled: { length: 3, hit: 2 },
          }),
        );
        expect(mockCallCellCheck.mock.results.value).toHaveLength(3)
    })

    test('FInd Vertical Adjacents', () => {
        const ship = { length: 2 }
        const cell = { row: 0, column: 0, filled: {} }

        expect(gameboard.findVerticalAdjacentCells(cell, ship)).toBe(null);
    })

    test.skip("Ship Fit in Grid -> Ship fits vertically in grid", () => {
        const cell = { row: 3, column: 3, filled: {} };

        expect(gameboard.shipFitInGrid(cell, 3, 'vertical')).toBeTruthy()
    });

    test.skip("Ship doesn't Fit in Grid -> Ship doesn't fit vertically in grid", () => {
      const cell = { row: 10, column: 18, filled: {} };

      expect(gameboard.shipFitInGrid(cell, 3, "vertical")).toBeFalsy();
    });
});
