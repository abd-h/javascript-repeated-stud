/*  
    Split a String into an array Using the split Method
    
    The split method splits a string into an array of strings. It takes an argument for the delimiter, 
    which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

    Here ate two examples that split ones string by spaces, then another by digits using a regular
    expression:
*/
    const str = "Hello World";
    const bySpace = str.split(" ");
    console.log(bySpace); // returns ['Hello', 'World']

    const otherString = "How9are7you2today";
    const byDigits = otherString.split(/\d/);
    console.log(byDigits); // returns ["How", "are", "you", "today"].

/*  Since string are immutable, the split method makes it easier to work with them.

    Use the split method inside the splitify function to split str into an array of words. 
    The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

    function splitify(str) {
        // Only change code below this line


        // Only change code above this line
    }

        splitify("Hello World,I-am code");
    */    

    function splitify(str) {
        return str.split(/\W/);
    }
    console.log(splitify("Hello World,I-am code"));
    console.log(splitify("Earth-is-our home")); // should return ["Earth", "is", "our", "home"].
    console.log(splitify("This.is.a-sentence")); // should return ["This", "is", "a", "sentence"].


/*   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Combine an Array into a String Using the join Method

    The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

    Here's an example: 
*/
    const arr = ["Hello", "World"];
    const str2 = arr.join(" ")   
    console.log(str2); // returns Hello World

/*  Use the join method (among others) inside the sentensify function to make a sentence 
from the words in the string str. The function should return a string. For example, I-like-star-wars
would be converted to I like Star Wars. For this challenge. do not use the replace method.

    function sentensify(str) {
    // Only change code below this line


    // Only change code above this line
    }

    sentensify("May-the-force-be-with-you"); */    

    function sentensify(str) {
        return str.split(/\W/).join(" ")
    }
    console.log(sentensify("May-the-force-be-with-you"));

//          Tests
//    Your code should use the join method.
//    Your code should not use the replace method.
    console.log(sentensify("May-the-force-be-with-you")); // should return a string.
    console.log(sentensify("May-the-force-be-with-you")); // should return the string May the force be with you.
    console.log(sentensify("The.force.is.strong.with.this.one")); // should return the string The force is strong with this one.
    console.log(sentensify("There,has,been,an,awakening")) // should return the string There has been an awakening.

/*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Apply Functional Programming to convert Strings to URL Slugs
    
    The last several challenges covered a number of useful array and string mehtods that follow functional programming principles. We've also learned about reduce, which is a paweful method
    used to reduce problems to simpler forms. From computing averages to sorting, any array operation 
    can be achieved by applying it. Recall that map and filter are spacial cases of reduce.

    Let's combine what we've learned to solve a practical problem.

    Many content management sites (CSM) have the titles of a post added to part of the URL for simple
    bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely
    URL would have some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

    Fill in the urlSlug function so it convers astring title and returns the hyphenated version for the
    URL. You can use any of the methods covered in this section, and don't replace. 
    
    Here the requirements:
        1.  The input is a string with spaces and-cased words
        2.  The output is a string with the spaces between word replaced by a hyphen (-)
        3.  The output should be all lower-cased letters
        4.  The output should not have any spaces

        // Only change code below this line
        function urlSlug(title) {


        }
        // Only change code above this line
        urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
            */    

        function urlSlug(title) {
            return title.split(" ")
                        // .map(a => a)
                        .filter(a => {
                            return (a !== /\s/)? a
                            : "";
                        })
                        .join("-")
                        .toLowerCase()
        }
        console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetsone"));

        console.log(urlSlug("Winter Is Coming")); // should return the string winter-is-coming.
        console.log(urlSlug(" Winter Is  Coming")); // should return the string winter-is-coming.
        console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.
        console.log(urlSlug("Hold The Door")); // should return the string hold-the-door.