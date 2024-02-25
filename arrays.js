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