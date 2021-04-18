// Class prototype (square1)
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }
}

// The prototype
let square1 = new Rectangle(10, 10);

console.log("Square Area " + square1.area);



// Object (square2)
var square2 = new Object();

square2.height = 0;
square2.width = 0;

square2.setSideLength = function(height, width) {
    this.height = height;
    this.width = width;
}

square2.calcArea = function() {
    return this.height * this.width;
};

// Must be called first
square2.setSideLength(20, 20)

console.log("Square Area " + square2.calcArea());



// Properties (square3)
var square3 = {
    height: 0,
    width: 0
}

square3.setSideLength = function(height, width) {
    this.height = height;
    this.width = width;
}

square3.calcArea = function() {
    return this.height * this.width;
};

// Must be called first
square3.setSideLength(30, 30)

console.log("Square Area " + square3.calcArea());