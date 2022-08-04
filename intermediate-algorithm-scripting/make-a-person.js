/* 
    Make a Person

    Fill in the object constructor with the following methods below.

    getFirstName()
    getLastName()
    getFullName()
    SetFirstName(first)
    setLastName(last)
    setfullName(firstAndLast)

    Run the tests to see the expected output for each method. The methods that take an argument must accept only argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

    const Person= function(firstAndLast) {
        let firstName = firstAndLast.split(" ").slice(0, 1).join(" "),
            lastName = firstAndLast.split(" ").slice(1).join(" ");
        this.getFirstName = () => firstName;
        this.getLastName = () => lastName;
        this.getFullName = () => `${firstName} ${lastName}`;
        this.setFirstName = (first) => firstName = first;
        this.setLastName = (last) => lastName = last;
        this.setFullName = (firstAndLast) => {
            firstName = firstAndLast.split(" ").slice(0, 1).join(" "),
            lastName = firstAndLast.split(" ").slice(1).join(" ");
            return      `${firstName} ${lastName}`;
        }; 
    }

    const bob = new Person('Bob Ross');
    console.log(bob.getFullName());

   // No properties should be added. 
   console.log(Object.keys(bob).length); // should always return 6.
console.log(bob instanceof Person); // should return true.
console.log(bob.firstName); // should return undefined.
console.log(bob.lastName); // should return undefined.
console.log(bob.getFirstName()); // should return the string Bob.
console.log(bob.getLastName()); // should return the string Ross.
console.log(bob.getFullName()); // should return the string Bob Ross.
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName()); // should return the string Haskell Ross after bob.setFirstName("Haskell").
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setLastName("Curry").
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()); // should return the string Haskell after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()); // should return the string Curry after bob.setFullName("Haskell Curry").