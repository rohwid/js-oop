var man = {
  name: "Bob Smith",
  age: 30
};

var woman = {
  name: "Susan Jordan",
  age: 25
};

// Parse bob to var
var manName1 = man.name;
var manAge1 = man.age;

console.log("His name is " + manName1 + " and he is " + manAge1 + " Y.O");

// Parse susan to var
var womanName1 = woman.name;
var womanAge1 = woman.age;

console.log("Her name is " + womanName1 + " and she is " + womanAge1 + " Y.O");

// Add new man and parse to var
man.name = "Rohman Widiyanto";
man.age = 27;
var manName2 = man.name;
var manAge2 = man.age;

console.log("His name is " + manName2 + " and he is " + manAge2 + " Y.O");

// Add new woman and parse to var
woman.name = "Anita Muy";
woman.age = 25;
var womanName2 = woman.name;
var womanAge2 = woman.age;

console.log("Her name is " + womanName2 + " and she is " + womanAge2 + " Y.O");
