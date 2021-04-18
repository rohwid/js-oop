var rectangle = new Object();

rectangle.height = 3;
rectangle.width = 4;

// Access the variable inside the object with "this"
// And set the function to become part of the object
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};

// Access the variable inside the object with "this"
// And set the function to become part of the object
rectangle.setWidth = function (newWidth) {
  this.width = newWidth;
}

rectangle.setHeight(6);
rectangle.setWidth(8);

console.log("Rectangle height = " + rectangle.height);
console.log("Rectangle width = " + rectangle.width);
