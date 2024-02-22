import Ship from "../obj/ship";

describe('Ship Sunk', () => {

    test('Ship takes hit and sinks', () => {
      const sunkenShip = new Ship(3, 2);

      sunkenShip.isHit();
      expect(sunkenShip.isSunk()).toBeTruthy();  
    })
    
})

describe('Ship Floats', () => {
    test('Ship takes hit but still floats', () => {
        const floatingShip = new Ship(3)

        floatingShip.isHit()
        expect(floatingShip.isSunk()).toBeFalsy()
    })
})