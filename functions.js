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