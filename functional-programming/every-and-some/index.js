/*  Content
    1.  every()
    2.  some()
    3.  Currying and Partial Application

    *** every() ***
    Use the every Method to check that Every Element in an Array Meets a Criteria

    The every method works with arrays to check if every element passed a particular test. 
    It returns a Boolean value - true if all values meet the criteria, false if not.
    
    For example, the following code would check if every element in the numbers array is less than 10 */

    const numbers = [1, 5, 8, 0, 10, 11];
    const lessThanTen = numbers.every(n => n < 10);
    console.log(lessThanTen);

/* The every method would return false here. 

    Use the every method inside the checkPositive function to check if every element in arr is 
    positive. The function should return a Voolean value
    
    function checkPositive(arr) {
        // Only change code below this line


        // Only change code above this line
    }

    checkPositive([1, 2, 3, -4, 5]);    */

    function checkPositive(arr) {
        return arr.every(n => n > 0)
    }

    console.log(checkPositive([1, 2, 3, -4, 5]));

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===

    *** some() ***
    Use the some Method to Check that Any Elements in an Array Meet a Criteria

   The some method works with arrays to check if any elemen passes a particular test.
   It returns a Boolean value - true if any of the values meet the criteria, false if not.
   
   For example, the followinf code would check if any element in the numvers array is less than 10:*/  
   
   const someNumbers = [10, 50, 80, 220, 110, 113],
         lessThenTwenty = someNumbers.some(n => n < 20);
    console.log(lessThenTwenty); 
/* The some method would return true; 

    Use the some method inside the checkPositive function to check if any element in arr is positive.
    function should return value.

    function checkPositive(arr) {
        // Only change code below this line


        // Only change code above this line
    }

    checkPositive([1, 2, 3, -4, 5]);    */

    function checkPositiveNumber(arr) {
        return arr.some(n => n > 0);
    }

//            Tests
//  Your code should use the some method.
    console.log(checkPositiveNumber([1, 2, 3, -4, 5])); // should return true.
    console.log(checkPositiveNumber([1, 2, 3, 4, 5])); // should return true.
    console.log(checkPositiveNumber([-1, -2, -3, -4, -5])); // should return false.

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=== 

    *** Currying and Partial Application ***

    Introduction to Currying and Partial Application

    The Arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

    In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

    Here's an example:  */

    // uncurried function
    function unCurried(x, y) {
        return x + y;
    }

    // curried function
    function curried(x) {
        return function(y) {
            return x + y;
        }
    }
    
    // curried with arrow function
    const arrowCurried = x => y => x + y;

    console.log(arrowCurried(1)(3));
/*  console would return 4

    This is useful in your program if you can't supply all the arguments to a function ar one time.
    You can save each function call into a variable, which will hold the return function reference that takes the next argument when it's available. Here's an example using the curried function in the example above: */ 
    
    const funcForY = curried(1);
    console.log(funcForY(3)); // 4
/*  Similarly, partial application can be described as applying a few arguments to a function at a time 
    and returning another function that is applied to more arguments. Here's an example:  */    

    // impartial function

    function imaprtial(x, y, z) {
        return x + y + z;
    }

    // partial function

    const  partialFn = imaprtial.bind(this, 1, 2);
    console.log(partialFn(10)); // returns 13

/*  Fill in the body of the add function so it uses currying ro add parameters x, y, and z 

    function add(x) {
        // Only change code below this line


        // Only change code above this line
    }

    add(10)(20)(30);    */

    function add(x) {
        return (y) => z => x + y + z;
    }

    console.log(add(10)(20)(30));