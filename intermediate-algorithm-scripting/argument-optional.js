/*

    Arguments Optional

    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument  and returns  the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

    Calling this returned function with a single argument will then return the sum. 

    let sumTwoAnd = addTogether(2);

    sumTwoAnd(3) returns 5;

    if either argument is invalid numbmer, return undefined.

*/

    function addTogether(...number) {
       let realNumber = typeof 1;
       if(number.length === 1 && typeof(number[0]) === realNumber) {
        return function(x) {
            if(typeof x !== realNumber) {
                return undefined
            } else {
                return number[0] + x;
            }
        }
       } else if(number.length == 2 && typeof(number[0]) === realNumber && typeof(number[1]) === realNumber) {
        return number[0] + number[1];
       } else if(number !== typeof []) {
        return undefined
       }
    }

    console.log(addTogether(2, 3)); // should return 5.
    console.log(addTogether(23, 30)); // should return 53.
    console.log(addTogether(5)(7)); // should return 12.
    console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // should return undefined.
    console.log(addTogether(2, "3")); // should return undefined.
    console.log(addTogether(2)([3])); // should return undefined.
    console.log(addTogether("2", 3)); // should return undefined.
