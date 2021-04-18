// The unamed class
var Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Print class name
// Without initiates and creates an instance
console.log(Rectangle.name);

// The named class
var Rectangle = class RectangleArea {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Print class name
// Without initiates and creates an instance
console.log(Rectangle.name);

// Other way to define "The named class"
class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Print class name
// Without initiates and creates an instance
console.log(Triangle.name);
