/* 
    Drop it 

    Given the array arr, iterate through and remove each element starting from the first element (the O index) until the function func returns true when the iterated elemnt is passed through it.

    Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/

    function dropElements(arr, func) {
        let newArr = [];
        
        arr.filter(e => {
            if(func(e)) {
                newArr.push(e);
            }
        });
        if(newArr[0] === undefined) {
            return [];
         } else {
            return arr.slice(arr.reduce((total, element,i) => {
                if(func(element)) {
                    total.push(i);
                } 
                return total;
            }, [])[0]);
        }       
    }
    console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))

    console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // should return [3, 4].
    console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // should return [1, 0, 1].
    console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); // should return [1, 2, 3].
    console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); // should return [].
    console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // should return [7, 4].
    console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // should return [3, 9, 2]