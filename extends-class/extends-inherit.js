var Animal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// Extend inherit from Animal to Dog
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
