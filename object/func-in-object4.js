var square = new Object();

square.sideLength = 6;

// Use return value to a function
// So, this function can work as variable
square.calcPerimeter = function() {
  return this.sideLength * 4;
};

// Use return value to a function
// So, this function can work as variable
square.calcArea = function() {
    return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();

console.log("Square perimeter : " + p);
console.log("Square Area " + a);
