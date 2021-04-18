// Define the object
var phonebookEntry = {};

// Set the vaariabe of the Object and it's value
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';

// Call other object from the other object
phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone()
