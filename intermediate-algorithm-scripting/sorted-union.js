/**
    Sorted Union 
    Write a function that takes two or morearrays and returns a new array of unique values in the order of the original provided arrays. 

    In aother word, all values present from all the arrays should be included in their original order, but with no duplicates in the final array.

    The unique numbers should be sorted by their original order, but the final array should not be sorted in numercal order.

    Check the assertion test for example.
 */

    function uniteUnique(...arr) {
        let newArr = [...new Set(arr.slice().flat())];
        return newArr;
    }
    
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
    console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
    console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
    console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // should return [1, 3, 2, 5, 4, 6].
    console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].