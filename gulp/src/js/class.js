'use strict';

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width;
  }
}

var polygon = new Polygon( 30, 40 );
console.log( polygon.calcArea() );
