var date = new Date();
var bob = new Object();

bob.age = 0;

// Call the object variable with "this"
bob.setAge = function(newAge) {
  this.age = newAge;
};

// Call the object variable and function with "this"
bob.getYearOfBirth = function() {
  this.setAge(30)

  return date.getFullYear() - this.age;
};

console.log(bob.getYearOfBirth());
