var quarter = function(number) {
    return number / 4;
}

var value = prompt("Input a number!");

if (quarter(value) % 3 === 0 ) {
  console.log("The statement is true");
}
else {
  console.log("The statement is false");
}
