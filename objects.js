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
    age: 12,
    father_name: "Poseidon",
    power: "water"
}

const { power } = demigod;
console.log(power); //water
const { demigod_name, age } = demigod;
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





























