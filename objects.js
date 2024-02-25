// Objects: They are one of the fundamental data types in JS , that  allows us to store data in key-value pairs. It is a collection of properties where each property will have a name (key) and a corresponding value while belong to any data type or functions or even other objects.

//  Object Literal: It is the simpler way of delcaring the object using curly braces;
const ninja = {
    name: "Naruto", //String
    age: "12", //Number
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