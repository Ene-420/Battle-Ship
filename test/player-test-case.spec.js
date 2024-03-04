import { Computer, Player } from "../obj/player";

describe('PLayer features', () => {
    let player_1;

    beforeAll(() => {
        player_1 = new Player('Mark')
    })

    test('Check Player Name -> Returns PLayer Name', () => {
         

        //expect(player_1.player).toEqual('Human')
        expect(player_1.name).toEqual('Mark')
    })

    test('Check Player Type -> Returns Human', () => {
        expect(player_1.player).toEqual('Human')
    })
})

describe('Computer Test', () => {
    let computer;
    beforeAll(() => {
        computer = new Computer('R2-D2')
    })
    test('Player type is Computer', () => {
        expect(computer.player).toEqual('Computer')
    })

    test("Player name is R2-D2", () => {
      expect(computer.name).toEqual("R2-D2");
    });

    test('Conputer Makes Play',()=> {
        expect(Object.keys(computer.makePlay()).length).toBe(2)
    })
})