/**
    Sum All Primes
    Aprime number is a whole number greater than 1 with exactly two divisors: 1 and it self. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 3 is not divisible since it is divisible by 1, 2 and 4.

    Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

    function isPrime(n) {
        for(let i = 2; i < n; i++) {                    
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(9));

    function sumPrimes(num) {
        let newNum = 0;                                   
        for(let i = 2; i <= num; i++) {
            if(isPrime(i) && i <= num) {
                newNum += i;
            }
        }
        return newNum;
       
    }
   console.log(sumPrimes(10)); // should return a number.
   console.log(sumPrimes(10)); // should return 17.
   console.log(sumPrimes(977)); // should return 73156.
