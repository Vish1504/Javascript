// Display a popup box with the message "Hello"
alert("Hello");

/* Data Types :- 
    1) String: A sequence of characters enclosed in single or double quotes.
    2) Number: Any numeric value, including integers, floats, and other numerical representations.
    3) Boolean: Represents true or false values.
*/

// Variables: Used to store and manipulate data. 
// Declaration: Variables can be declared using var, let, or const followed by the variable name. 

var name = "devKage";            // String
let age = 22;                    // Number
const am_I_a_ninja = true;       // Boolean

// Differences between var, let, and const:

/* 
var:
    - It is used more for function level scoping , i.e, it is accessible throughout the entire function in which they are declared.
    - Values inside of 'var' variables, can be changed at any point of time as these variables are 'mutable'
*/

/* 
let:
    - It is used with block level scoping i.e , it is limited to the block (e.g., within curly braces) in which they are declared.
    - Just like 'var' , the values can be changed at any point of time as these variables are 'mutable'
*/

/* 
const:
    - It is used with block level scoping i.e , it is limited to the block (e.g., within curly braces) in which they are declared.
    - Variables declared with const are immutable, meaning their values cannot be changed once they are assigned (think of blockchain; they are immutable as well)
*/


// Block Level Scoping: Blocks are denoted by curly braces '{}'. 
{
    let x = 10;
    console.log(x); // Output: 10
}

// Accessing 'x' outside the block will result in an error:
// console.log(x); // ReferenceError: x is not defined

// Function Level Scoping: Variables declared with var have function-level scope.
// This means they are accessible throughout the entire function in which they are declared.
function myFunction() {
    var x = 10;
    if (x > 5) {
        console.log(x + 6); // Output: 16
    }
    console.log(x); // Output: 10
}

myFunction();

// Accessing 'x' outside the function will result in an error:
// console.log(x); // ReferenceError: x is not defined

// Note: 'let' is preferred over 'var' in modern JS ,as let provides more predictable behavior, better scoping, and improved readability.


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

// Function: At times there can be a block of code , which we might need to repeat a lot of times. To make this work easier , we make use of functions.

// In a function , a parameter is the variable provided with the function definition, while an arguement is the value given to the parameter

function helloThere(fname) {
    let lenName = fname.length + 1;
    console.log(`Hello there, Mr.${fname}, I see your name consists of ${lenName} letters`)
}

helloThere("Percy"); //Output: Hello there, Mr.Percy, I see your name consists of 6 letters

//Here parameter=>fname , arguement=>"Percy"

//Creating the function to find the square of a given number
function square(number) {
    // the return statement is used within the function to send a value back to the code that called the function and is also used to stop the execution of the function
    return `Square of ${number} = ${number * number}`;
}
//Calling the function
console.log(square(7)) //Output: Square of 7 = 49

// Note: If a function does not explicitly return a value, it returns undefined by default. 















