/*
    Regular expression are used in programming languages to match parts of strings.
    You create patterns to help you do that matching. 

    If you want to find the word "the" in the string "The dog chased that cat", you could use 
    the following regular expression: /the/. Notice that quote marks are not required within the 
    regular expression.

    JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method.
    The .test()method takes the regex, applies it to string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
*/

    let testStr = "freeCodeCamp",
        testRegex = /Code/;

    console.log(testRegex.test(testStr))    
/*  console returns true

    Apply the regex myRegex on the string myString using the .test() method.
    let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex; // Change this line    
*/    

    let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex.test(myString);
    console.log(result);// true;
    
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

    Match Literal Strings
    In the last challeng, you searched for the word Hello using the regular expression /Hello/.
    That regex searched for a literal match of the string Hello. Here's another example searching for a literal march of the string Kevin:  */    

    let testStr2 = "Hello, my name is Kevin.",
        testRegex2 = /Kevin/;
    console.log(testRegex2.test(testStr2));    

    /*  This test would return true

    Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.  */ 
    
    let wrongRegex = /kevin/;
    console.log(wrongRegex.test(testStr2)); 
    
/* return false 

   A future challeng will show how to match those other forms as well. 
   
   Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

    let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
    let waldoRegex = /search/; // Change this line
    let result = waldoRegex.test(waldoIsHiding);    */

    let waldoIsHiding = "Somewhere Waldo is hiding in this text.",
        waldoRegex = /Waldo/,
        resultWaldo = waldoRegex.test(waldoIsHiding);
    console.log(resultWaldo);    

/*  _____________________________________________________________________________________
 
    Match a Literal String with Differen Possibilities

    Using regexes like /coding/, yhou ca look for the pattern coding in another string.

    This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

    This operator matches patterns either before or after it. For example, if you wantd to match the strings yes or no, the regex you want is /yes|no|maybe/. 

    Complete the regex petRegex to match the pets dog, cat bird, or fish.

    let petString = "James has a pet cat.";
    let petRegex = /change/; // Change this line
    let result = petRegex.test(petString);
   */    

    let petString = "James has a pet cat.",
        petRegex = /dog|cat|bird|fish/,
        resultPet = petRegex.test(petString);
    console.log(resultPet);      

/*  ________________________________________________________________________________________

    Ignore Case While Matching
    
    Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case dfferences. 
    
    Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters.
    Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
    
    You can match both case using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. you can use it by appending it to the regex. An example of using this flag is /ignorcase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
    
    Write a regex fccRegex to match freeCodeCamp, no matter its case. You regex should not match any abbreviations or variations with spaces.
    
    let fccString = "freeCodeCamp";
    let fccRegex = /change/; // Change this line
    let result = fccRegex.test(myString);   */

    let fccString = "freeCodeCamp",
        fccRegex = /freeCodeCamp/i,
        fccResult = fccRegex.test(fccString);
    console.log(fccResult);    

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Extract Matches

    So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .matcch() mathod.

    To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. 

    Here's example: 
*/    

    console.log("Hello, World".match(/Hello/));
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    console.log(ourStr.match(ourRegex));
/*  
    Here the first match would return ["Hello"] and the second would return ["expression"].
    
    Note that the .match syntax is the opposite of the .test method you have been using thus 
    far: 
    "str".match(/regex/);
    /regex/.test("str") 
    
    Apply the .match method to extract the string coding*/
    
    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/; // Change this line
    let codingResult = extractStr.match(codingRegex); // Change this line

/*____________________________________________________________________________

    Find More Than the First Match

    So far, you have only been able to extract or search a pattern once.
*/    
    let testRepeatStr = "Repeat Repeat Repeat",
        reRegex = /Repeat/;
    console.log(testRepeatStr.match(reRegex));
/*  Here match would return ["Repeat"]

    To search or extract a pattern more than once, you can use the global search flag: g.
*/
    let repeatRegex = /Repeat/g;
    console.log(testRepeatStr.match(repeatRegex)); 
/*  And here match returns the value ["Repeat", "Repeat", "Repeat"]

    Using the regex starRegex, find and extract both Twinkle words from the string twinleStar.
    
    Note: You can have multiple flags on your regex like /search/gi */    

    let twinkleStar = "Twinkle, twinkle, little star";
    let starRegex = /twinkle/gi; // Change this line
    let twinkleResult = twinkleStar.match(starRegex); // Change this line
    console.log(twinkleResult); // ['Twinkle', 'twinkle']