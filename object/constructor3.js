// Constructor
function Rectangle(height, width) {
  this.height = height;

  this.width = width;

  this.calcArea = function() {
      return this.height * this.width;
  };

  this.calcPerimeter = function() {
      return (this.height * 2) + (this.width * 2);
  };
};

var rect = new Rectangle(7,3);
var area = rect.calcArea();
var perimeter = rect.calcPerimeter();

console.log("Rectangle area : " + area);
console.log("Rectangle perimeter : " + perimeter);
