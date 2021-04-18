// Person Constructor
var Person = function(name) {
    this.name = name;
    this.canTalk = true;
};

// Extends func based from Person
Person.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name);
    }
};


// Employee Constructor
var Employee = function(name, title) {
    Person.call(this, name);
    this.title = title;
};

// Extends Person to Employee constructor
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Extends func based from Employee
// Skipping other Person Extends function
Employee.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
};


// Customer Constructor
var Customer = function(name) {
    Person.call(this, name);
};

// Extends Person to Customer constructor
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;


// Mime Constructor
var Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
};

// Extends Person to Mime constructor
Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;


var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet(); // Hi, I am Bob, the Builder
  
joe.greet(); // Hi, I am Joe
  
rg.greet(); // Hi, I am Red Green, the Handyman
  
mike.greet(); // Hi, I am Mike
  
mime.greet();