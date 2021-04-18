// Contructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington",275);

console.log("My name is " + bob.name + ", I'm " + bob.age + " years old");
console.log("My name is " + susan.name + ", I'm " + susan.age + " years old");
console.log("My name is " + george.name + ", I'm " + george.age + " years old");