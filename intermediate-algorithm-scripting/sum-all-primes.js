/**
    Sum All Primes
    Aprime number is a whole number greater than 1 with exactly two divisors: 1 and it self. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 3 is not divisible since it is divisible by 1, 2 and 4.

    Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

    function sumPrimes(num) {
        let newNum = 3;
        for(let i = 1; i < num; i++) {
            if(num % i == 0) {
                console.log(i);
            }
        }

    }
    console.log(sumPrimes(10));