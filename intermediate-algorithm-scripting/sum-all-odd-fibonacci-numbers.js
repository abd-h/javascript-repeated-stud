/*
    Sum All Odd Fibonacci Numbers
    Given a positive integers num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1. 
    Every additiional number in the sequence is the sum of the previous numbers. the first six numbers of the Fivonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

    function sumFibs(num) {
        let fib =[1,1];
        let fib2 = 0;
       for(let i = 1; i <= num; i++) {
        fib.push(fib[i] + fib[i -1]);

       }
       return fib.filter((a, b) => {
        if(a % 2 === 1 && a <= num) {
            return a;
        } else {
            return "";
        }
       }).reduce((a, b)=> {
        return a + b;
       }, 0);
    }

    console.log(sumFibs(10)); // should return a number.
    console.log(sumFibs(1000)); // should return 1785.
    // console.log(sumFibs(1000)); // should return 1785.
    // console.log(sumFibs(1000)); // should return 1785.
    console.log(sumFibs(4000000)); // should return 4613732.
    console.log(sumFibs(4)); // should return 5.
    console.log(sumFibs(75024)); // should return 60696.
    console.log(sumFibs(75025)); // should return 135721.

    console.log("Te");