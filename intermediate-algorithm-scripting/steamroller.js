/* 
    Steamroller
    Flatten a nested array. You must account for varying levels of nesting.
*/

    function steamrollArray(arr) {
        let newArr = [];
        arr.filter(a => {
          newArr = newArr.concat(Array.isArray(a)? steamrollArray(a) : a);
          return newArr;
        });
        return newArr;
    }

    
    // Tests
    console.log(steamrollArray([1, [2], [3, [[4]]]]));
    console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
    console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
    console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
    console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].
    //Your solution should not use the Array.prototype.flat() or 
    //Array.prototype.flatMap() methods.