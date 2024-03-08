export default class Ship {
  constructor(length = 1, hit = 0, sunk = false) {
      this.length = length;
      this.hit = hit
  }

  isHit(){
    this.hit++
    //this.length--
  };

  isSunk() {
      let isSunken = this.hit == this.length ? true : false;
      this.sunk = isSunken
      return isSunken
  }
}
