const log = require("node-forge/lib/log");

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
    
    2) while loop: It allows you to repeatedly execute a block of code as long as a specified condition evaluates to true. 

    while(condition is TRUE){
        // Execute this
    }

    3) for loop: It allows you to repeatedly execute the code block as long as the condition is set to true the condition for a specific number of times. It is similar to a while loop, but in a for loop you'd have an idea of the number of iterations needed.

            for (initialization; condition; update) {
            // Code block to be executed repeatedly
        }

*/

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

// Arrays: It is an object which stores a collection of items under the same variable name. They can have elements of different data types, and they can dynamically adjust in size.
let names = ["harry", "Percy", "Dwight", "Naruto"]
console.log(names[2]); //Dwight

// Length of an array
console.log(names.length); //4

// Few common Array methods:
// 1) concat() : It is used to merge two or more arrays byt resulting in a new merged array.
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 2)reverse() : It reverses an array inplace and ends up changing the original array as well
let arr4 = ['a', 'b', 'c'];
let rev_arr4 = arr4.reverse();
console.log("arr4 " + arr4); //arr4 c,b,a
console.log("reversed arr4 " + rev_arr4); //reversed arr4 c,b,a
console.log("arr4 " + arr4); //arr4 c,b,a

// 3)push(num) : It helps to add the element "num" to the end of the array
console.log(arr4); // [ 'c', 'b', 'a' ]
arr4.push("Snoop Dogg");
console.log(arr4) //[ 'c', 'b', 'a', 'Snoop Dogg' ]

// 4)pop(): It helps to REMOVE the LAST element in the array and then return that element.
console.log(arr4); //[ 'c', 'b', 'a', 'Snoop Dogg' ]
console.log(arr4.pop()); //Snoop Dogg
console.log(arr4); //[ 'c', 'b', 'a' ]

// 5)shift(): It helps to REMOVE the FIRST element to the array and then return that element.
console.log(arr4); //[ 'c', 'b', 'a' ]
console.log(arr4.shift()); //c
console.log(arr4); //[ 'b', 'a' ]

// 6)unshift(): It ADDS the specified element to the BEGINNING of the array
console.log(arr4); //[ 'b', 'a' ]
arr4.unshift("Snoop is back");
console.log(arr4); // [ 'Snoop is back', 'b', 'a' ]






















