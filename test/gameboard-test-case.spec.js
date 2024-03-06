import { GameBoard } from "../obj/gameboard";

describe("Test cells in  grid", () => {
  let gameboard;
  beforeAll(() => {
    gameboard = GameBoard();
  });

  test("board", () => {
    expect(gameboard.returnGrid().length).toBe(10);
  });

  test("CellState -> Random Cell on Board", () => {
    expect(gameboard.cellState(3, 3)).toBe(true);
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

    test.skip('FInd Vertical Adjacents', () => {
        const ship = { length: 2 }
        const cell = { row: 3, column: 3, filled: {} }

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
  
  
  test('Check For Perfect Fit Veritcal -> Check for cell that can vertically contain cell', () => {
    const ship = { length: 2 };
    const cell = { 'row': 3, 'column': 3, 'filled': {} };

    expect(gameboard.checkForPerfectFitVertical(cell, ship)).toEqual(cell);
  })


  test.skip("Check For Perfect Fit Veritcal -> to return another cell due to cell being filled", () => {
    const ship = { length: 3, hit: 0 };
    const cell = { row: 3, column: 3, filled: { length: 3, hit: 0 } };
    let dummyCell = gameboard.returnGrid()[3][3]
    dummyCell.filled = { length: 3, hit: 0 };

    expect(gameboard.checkForPerfectFitVertical(cell, ship)).not.toEqual(cell);
  });

  test.skip('Check For Perfect Fit Horizontal', () => {
    const ship = { length: 2 };
    const cell = { row: 3, column: 3, filled: {} };

    expect(gameboard.checkForPerfectFitHorizontal(cell, ship)).toEqual(cell);
    
  })


  test.skip('FindHorizontalAdjacentCells', () => {
    const ship = { length: 2 };
    const cell = { row: 0, column: 0, filled: {} };

    expect(gameboard.findHorizontalAdjacentCells(cell, ship)).toBe(null);
  })

  test.skip('Place Ship ->', () => {
    gameboard.placeShip()
    let presentGameboard = gameboard.returnGrid()

    expect(presentGameboard).toBe(null)
  })


  test('Check Sunken Ships ->', () => {
    
    gameboard.placeShip()
    expect(gameboard.checkSunkenShips()).toBeFalsy()
  })

  test('Find Diagonal ->', () => {
    //gameboard.placeShip()
    const cell = { row: 1, column: 2, filled: {} };

    expect(gameboard.findDiagonals(cell)).toEqual([[0,3],[0,1],[2,1],[2,3]])
  })
});
