/*  
    Sum All Numbers in a Range
    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/


    function sumAll(arr) {
        let newArr = arr.slice().sort((a, b) => a - b),
            low = newArr[0],
            high = newArr[1],
            total = 0;
        for(let i = low + 1; i < high; i++) {
           total += i;
        }
        total += low;
        total += high;
        return total;
    }
    console.log(sumAll([1,4]));
    console.log(sumAll([4, 1])); //  should return 10.
    console.log(sumAll([5, 10])); //  should return 45.
    console.log(sumAll([10, 5])); //  should return 45.