export default class Ship {
  head = null;
  constructor(value, length = 1, direction) {
    this.head =  value;
    this.length = length;
    this.hit = 0;
    this.sunk = false;
    this.direction = direction;
  }

  append(value) {
    if (!this.head) {
      this.head = Node(value);
    }
    let next = this.head;
    while (next.nextNode !== null) {
      next = next.nextNode;
    }
    return next.nextNode = new Node(value);

  }

  getHead() {
    return this.head;
  }
  isHit() {
    this.hit++;
    //this.length--
  }

  isSunk() {
    let isSunken = this.hit == this.length ? true : false;
    this.sunk = isSunken;
    return isSunken;
  }
}

// class Node {
//   constructor(value = null, nextNode = null) {
//     this.value = value;
//     this.nextNode = nextNode;
//   }
// }