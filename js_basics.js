// Display a popup box with the message "Hello"
alert("Hello");

/* Data Types :- 
    1) String: A sequence of characters enclosed in single or double quotes.
    2) Number: Any numeric value, including integers, floats, and other numerical representations.
    3) Boolean: Represents true or false values.
*/

// Variables: Used to store and manipulate data. They can be declared using var, let, or const followed by the variable name.

var name = "devKage";            // String
let age = 22;                    // Number
const am_I_a_ninja = true;       // Boolean


// Finding length of a string: string.length
let fullPhrase = "You're a Wizard Harry"
console.log(fullPhrase.length); //Output: 21

// Slicing a string - string.slice(x,y) -> It goes from x to y-1
console.log(fullPhrase.slice(0, 5)); //Output: You'r

// Making a string into uppercase
console.log(fullPhrase.toUpperCase()); // YOU'RE A WIZARD HARRY
// Similarly we can make it into lowercase using string.toLowerCase()

// To make only the 10th letter lower case and rest all as uppercase
console.log(fullPhrase.slice(0, 10).toUpperCase() + fullPhrase.slice(10, 11).toLowerCase() + fullPhrase.slice(11).toUpperCase()); // YOU'RE A WiZARD HARRY

// Arithmetic operators:

// - Addition: a+b
let sum = 5 + 3; // sum is 8

// - Subtraction: a-b
let difference = 10 - 5; // difference is 5

// - multiplication: a*b
let product = 4 * 6; // product is 24

// - Division: a/b
let quotient = 20 / 3; // quotient is approximately 6.666666666666667

// Modulus: a%b
let remainder = 20 % 3 // remainder is 2

// Increment: a++
// Decrement: a--

// Comparison operators :
// 1) == -> It checks only for the value but not the type
5 == 5 //true
5 == '5' //true
5 == 8 //false
5 == '1' //false
// 2) === -> It checks for the value AND the type
5 === 5 //true
5 === '5' //false


// Control Statements
/*
    1) If-else:

        if (condition is true){
            Do this
        }
        else{
            Do this
        }
        function learn_if_else(num) {
            if (num > 5) {
                console.log("Condition PASSED");
            }
            else {
                console.log("Condition FAILED");
            }
        }

        learn_if_else(7) //Condition PASSED
        learn_if_else(2) //condition FAILED

    2) while loop: It allows you to repeatedly execute a block of code as long as a specified condition evaluates to true.

    while(condition is TRUE){
        // Execute this
    }

    3) for loop: It allows you to repeatedly execute the code block as long as the condition is set to true the condition for a specific number of times. It is similar to a while loop, but in a for loop you'd have an idea of the number of iterations needed.

            for (initialization; condition; update) {
            // Code block to be executed repeatedly
        }

*/
























