class Animal { 
    speak() {
        return this;
    }
    
    static eat() {
        return this;
    }
}

let obj = new Animal();
console.log(obj.speak()); // Animal {}

let speak = obj.speak;
console.log(speak()); // undefined

console.log(Animal.eat()); // class Animal

let eat = Animal.eat;
console.log(eat()); // undefined