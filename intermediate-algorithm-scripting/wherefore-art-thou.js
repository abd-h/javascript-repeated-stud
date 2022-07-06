/*
    WHEREFORE ART THOU 
    Makek a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the return array.

    For example, if the first argument is [{ fkirst: "Romeo", last: "Montague"}, {first: Mercutio, last: "null"}, {first: "Tybalt", last: "Capult"}], and the second argument is {last: "Capult"}, then you must return the third object from the array {the first argument}, because it contains the name and its value, that was passed on as the second argument.
*/

    function whatIsInAName(collection, source) {
        let sKeys = Object.keys(source),
            result = [];
       collection.filter(obj => {
        for(let i = 0; i < sKeys.length; i++) {
            // console.log(source[sKeys[i]]);
         if(!obj.hasOwnProperty(sKeys[i]) || obj[sKeys[i]] !== source[sKeys[i]]) {
            return false;
         } 
        }
        result.push(obj);
      })
      return result;
    }

    console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

    console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })); // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

    console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
    console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })); // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
    console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
    console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})); // should return []