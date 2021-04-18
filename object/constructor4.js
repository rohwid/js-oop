// Constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.name;
    }
    else {
        return person2.name;
    }
};

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
console.log("And the age difference between Alice and Billy is " + ageDifference(alice, billy));