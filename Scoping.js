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

