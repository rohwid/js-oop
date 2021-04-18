var square = new Object();

square.sideLength = 6;

// Call the object variable and function with "this"
square.calcPerimeter = function() {
  return this.sideLength * 4;
};

// Call the object variable and function with "this"
square.calcArea = function() {
    return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();

console.log("The perimeter of this circle is " + p);
console.log("The area of this circle is " + a);