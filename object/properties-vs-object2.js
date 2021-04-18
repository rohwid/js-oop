var date = new Date();

// This is object
var susan = new Object();

susan.name = "Susan Jordan";
susan.bornYear = 1995;

susan.age = function() {
  return date.getFullYear() - this.bornYear;
};

console.log("My name is " + susan.name + ", I'm " + susan.age() + " years old");

// This is properties
var rohman = {
  name: "Rohman Widiyanto",
  bornYear: 1991
};

rohman.age = function() {
  return date.getFullYear() - this.bornYear;
}

console.log("My name is " + rohman.name + ", I'm " + rohman.age() + " years old");