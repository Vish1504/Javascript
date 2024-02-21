// Exploring Math object and the Math.random() method to create a random number generator

// The Math object in JavaScript provides various properties, constants, and methods for mathematical operations.

/*
Commonly used properties/constants include:
1) Math.PI: Represents the mathematical constant Pi.
2) Math.SQRT1_2: Represents the square root of 1/2.
3) Math.SQRT2: Represents the square root of 2.

Commonly used methods in the Math object include:
1) Math.ceil(x): Rounds up to the nearest integer.
2) Math.floor(x): Rounds down to the nearest integer.
3) Math.sqrt(x): Returns the square root of x.
4) Math.pow(x, y): Raises x to the power of y.
5) Math.trunc(x): Removes the decimal part of a floating-point number and returns only the integer part.

*/

/*
    Now there is one more, method , we haven't gotten to ... So, JavaScript has this cool thing called Math.random() that gives us random numbers.
    When you call Math.random(), it's like rolling a dice and getting a number between 0 and 1 (not including 1).

    Now, let's see how we can use it
*/

// Find a random number from 0 to x (inclusive)
function randIntMax(x) {
    /*
        console.log(Math.trunc(Math.random() * (x + 1))); 
            The above statement wouldn't have worked , because it multiplies Math.random() by (x + 1) to cover the range from 0 to x, but Math.trunc() doesn't ensure equal probability for all integers in the range.
            As a result, some integers may have a higher probability of being generated than others, especially when x is large.
    */
    /*
        console.log(Math.ceil(Math.random() * (x + 1))); 
            Using Math.ceil() with Math.random() * (x + 1) would skip over 0 and start the range from 1, going up to (x + 1).
            This approach doesn't cover the entire range from 0 to x with equal probability, as it excludes 0 from the possible outcomes.
    */
    console.log(Math.floor(Math.random() * (x + 1)));
}

randIntMax(5)

// Find a random number between (inclusive) x and (inclusive) y
function randRange(x, y) {
    console.log(Math.floor(Math.random() * (y - x + 1)) + x);
}

randRange(2, 8);

