"use strict";
var myName = "John Galt";
console.log(myName);
//arrow function
var getSquare = function (a, b) {
    console.log("Finding the square of ", a, "+", b);
    return (a * a) + (b * b) + (2 * a * b);
};
console.log(getSquare(5, 3));
