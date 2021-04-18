function Animal (name) {
    this.name = name;
}

// Extend speak function from Animal function
Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}

// Extend class from from Animal function
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

var a = new Animal('Mitzie');
a.speak(); // Mitzie makes a noise.

var b = new Dog('Mitzie');
b.speak(); // Mitzie barks.
