// Constructor
class setAge {
  constructor(newAge) {
    this.age = newAge;
  }
}

// Bob object
var bob = new Object();

bob.age = 30;
bob.setAge = setAge; // Access the constructor

bob.setAge(75);
console.log("Bob age is " + bob.age)

// Susan object
var susan = new Object();

susan.age = 25;
susan.setAge = setAge; // Access the constructor

susan.setAge(35);
console.log("Susan age is " + susan.age)