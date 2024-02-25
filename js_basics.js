// Display a popup box with the message "Hello"
alert("Hello");

//  Data Types :- 
// 1) String: A sequence of characters enclosed in single or double quotes.
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

// 2) Number: Any numeric value, including integers, floats, and other numerical representations.
// 3) Boolean: Represents true or false values.


// Variables: Used to store and manipulate data. They can be declared using var, let, or const followed by the variable name.

var name = "devKage";            // String
let age = 22;                    // Number
const am_I_a_ninja = true;       // Boolean

// Scope: You can understand scope as the region where your variables , functions and objects are and can be accessed from. It determines their visibility and lifetime within your code.

// few of the different types of scoping are:
// Global level scoping: Any sort of variable declared outside of any function or block are accessible from anywhere in your code. They automatically becomes a property of the global object.

let num1 = 24;
let num2 = 32;

function total_price() {
    console.log(`We can access num1 and num2 even INSIDE the function\nnum1=${num1} , num2=${num2}`)
}
total_price()
console.log(`We can access num1 and num2 even OUTSIDE the function\nnum1=${num1} , num2=${num2}`)

// Block Level Scoping: Any sort of variable , function or object are ONLY accessible within the block (enclosed by {}) in which they are defined
{
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // ReferenceError: x is not defined

// Function Level Scoping: Any sort of variable , function or object are only accessible within the function they are declared in.
function myFunction() {
    var x = 10;
    if (x > 5) {
        console.log(x + 6); // Output: 16
    }
    console.log(x); // Output: 10
}

myFunction();
console.log(x); // ReferenceError: x is not defined


/*  Differences between var, let, and const:

var:
    - It is used for function-level scoping ,i.e accessible throughout the entire function.
    - Values inside of 'var' variables, can be changed at any point of time as these variables are mutable

let:
    - It is used with block level scoping i.e , it is limited to the block (e.g., within curly braces) in which they are declared.
    - Just like 'var' , the values can be changed at any point of time as these variables are mutable

const:
    - It is also used with block level scoping.
    - Variables declared with const are immutable, meaning their values cannot be changed once they are assigned (think of blockchain :D)
*/


// Note: 'let' is preferred over 'var' in modern JS ,as let provides more predictable behavior, better scoping, and improved readability .


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

// Objects: They are one of the fundamental data types in JS , that  allows us to store data in key-value pairs. It is a collection of properties where each property will have a name (key) and a corresponding value while belong to any data type or functions or even other objects.

//  Object Literal: It is the simpler way of delcaring the object using curly braces;
const ninja = {
    name: "Naruto", //String
    age: 12, //Number
    address: "Konoha Village",
    hasTailedBeast: true, //boolean
    friends: ["Sasuke", "Sakura"],//Array
    dialogue: function () { //function
        console.log("I'm going to be hokage one day")
    }
}

// Accessing the object properties
console.log(ninja.name) //Naruto
// Another way to do it
console.log(ninja["address"]);// Konoha Village
//  These 2 methods work because, when you define an object literal or add properties to an object the property names are stored as strings. Under the hood, JavaScript engines treat dot notation and bracket notation similarly. When you use dot notation, JavaScript implicitly converts the property name to a string. 
console.log(ninja["friends"]); //[ 'Sasuke', 'Sakura' ]
console.log(ninja.friends); //[ 'Sasuke', 'Sakura' ]

ninja.dialogue(); //I'm going to be hokage one day

//Another way to declare an object is using 'new' keyword.
const wizard = new Object();
// The variable 'wizard' is declared using the 'const' keyword.
// new Object() creates a new object instance using the Object constructor.
// Now, the variable 'wizard' holds a reference to the newly created empty object.

//To add properties and methods to 'wizard' object
wizard.name = "Harry Potter";
wizard.age = 15;
wizard.friends = ["Ron", "Herminoe", "Sirius"];
wizard.isChosenOne = true;
wizard.winTheGame = function () {
    console.log("Caught the golden snitch");
}
wizard.isOrphan = true;

console.log(wizard);
/* Output:
{
    name: 'Harry Potter',
    age: 15,
    friends: [ 'Ron', 'Herminoe', 'Sirius' ],
    isChosenOne: true,
    winTheGame: [Function (anonymous)],
    isOrphan: true
  }
  */

//Few commonly used methods in objects
// 1) Object.assign({}.source): To combine all the properties of specified object and copies them onto another object.

const source1 = { a: 1, b: 2 };
const source2 = { c: 4 };
const target = Object.assign({}, source1, source2);
console.log(target) //{ a: 1, b: 3, c: 4 }

// Another way to do the same process is using the 'Spread' (...)  Operator.
const target2 = { ...source1, ...source2 };
console.log(target2); //{ a: 1, b: 3, c: 4 }

// 2) Object.keys(object_name): It will return an array of the object's property names.
console.log(Object.keys(wizard)); //[ 'name', 'age', 'friends', 'isChosenOne', 'winTheGame', 'isOrphan' ]

//3) Object.values(object_name): It will return an array of the object's values that are stored relating to a property.
console.log(Object.values(ninja));
/*  Output:
[
    'Naruto',
    '12',
    'Konoha Village',
    true,
    ['Sasuke', 'Sakura'],
    [Function: dialogue]
]
  */

//4) object_name.hasOwnProperty('property_name'): It returns a boolean indicating whether the object has a specific property.
console.log(ninja.hasOwnProperty('hasTailedBeast')); //true
console.log(wizard.hasOwnProperty('LastName')); //false


// Object destructuring: This is a way of creating variables from an object's properties. It can also be done for arrays\

const demigod = {
    demigod_name: "Percy Jackson",
    age_d: 12,
    father_name: "Poseidon",
    power: "water"
}

const { power } = demigod;
console.log(power); //water
const { demigod_name, age_d } = demigod;
console.log(demigod_name); //Percy Jackson
// Now if I have a propertywhich I want to turn into a variable but witha  different name , like from object 'demigod' if we consider the property 'father_name' and we want to make it into a variable Fname, we can do so like this:
const { father_name: fname } = demigod; //const {original key: desired_variable_name} = object_name
console.log(fname); //Poseidon

// This keyword:
// 1) 'this' always refers to the context within which a function is executed.
// 2) If you use "this" outside of a funcction , then it'll either refer to the window (incase of web browsers) or else global (in case of node.js)
console.log(this);//{}
// The above sttement will result in an empty object , because it's currently in a node environment and it's not being referred to in context of anything.

// We can even refer to it inside of a function in an object.
const emp = {
    name: "Dwight",
    age: 42,
    address: "Scranton",
    getThis: function () {
        console.log(this);
    }
};

emp.getThis(); //it points to the emp object. So, when you log this inside the getThis method, it will print the entire emp object to the console.

/* Output:
{
  name: 'Dwight',
  age: 42,
  address: 'Scranton',
  getThis: [Function: getThis]
}
*/

//Now let's try using this, inside of a regular function i.e which is not inside of any method
function getName() {
    let uname = "Harry";
    console.log(this);
}

getName(); // undefined
// In this case 'uname' is a local variable. When we use 'this' inside a regular function  , it refers to the global object and not the function's local variables.

// Arrow Functions: They are primarily used to write shorter function syntax
/*
Basic Syntax:
const functionName = (parameters) => {
    // function body
    return expression;
};
*/

const addNum = (num1, num2) => {
    return num1 + num2;
}

console.log(addNum(5, 8)); //13

/*
An alternative way to write it is:
const functionName = (parameters) => expression;

This way make use of 'Implicit return , that is the value of the expression will be returned withiout making use of the 'return' keyword
*/

const subtractNum = (num1, num2) => num1 - num2;
console.log(subtractNum(5, 8)); //-3

// The relationship between this and arrow functions is different compared to regular functions in JavaScript.  
//  In a regular Function, 'this' refers to object because it's called as a method of object.
//  when you use 'this' inside an arrow function, it doesn't create its own this value. Instead, it uses the this value from the code around it, where the arrow function is defined.


























