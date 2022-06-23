/*
    Diff Two Arrays
    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. Inn other words, return the symmetric difference of the two arrays.

    Note You can return the array with its elements in any order.
*/

    function diffArray(arr1, arr2) {
        const newArr = [];
        arr1.filter(a => (arr2.indexOf(a) == -1)? newArr.push(a) : a);
        arr2.filter(a => (arr1.indexOf(a) == -1)? newArr.push(a) : a);
        return newArr;
    }
    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

    console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return ["pink wool"].
    console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return an array with one item.
    console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return ["diorite", "pink wool"].
    console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return an array with two items.
    console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) //should return [].
    console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) //should return an empty array.
    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //should return [4].
    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //should return an array with one item.
    console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) //should return ["piglet", 4].
    console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) //should return an array with two items.
    console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); //should return ["snuffleupagus", "cookie monster", "elmo"].
    console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); //should return an array with three items.
    console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); //should return [1, "calf", 3, "piglet", 7, "filly"].
    console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); //should return an array with six items.