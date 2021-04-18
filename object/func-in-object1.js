// Create new object
var me = new Object();

// Set the object params
me.name = "Rohman Widiyanto";
me.age = 24;

// Function in object
me.biodata = function() {
    console.log("My name is " + this.name + ". " + "I am " + this.age + " years old.");
};

me.biodata();
