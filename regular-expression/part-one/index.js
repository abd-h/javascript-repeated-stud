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

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Match Anything with Wildcard Period

    Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all
    words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard characters: . 

    The wildcard character . will match any one character. The wildcard is also called dot and period.
    You can use the wildcard character just like any other  character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words. */
    
    let humStr = "I'll hum a song",
        hugStr = "Bear hug",
        huRegex = /hu./;
    console.log(huRegex.test(humStr));  // returns true  
    console.log(huRegex.test(hugStr));  // returns true 

/*  complete the regex unRegex so that it matches the strings 
    run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character. */ 
    
    let exampleStr = "Let's have fun with regular expressions!", 
        unRegex = /.un/,
        unResult = unRegex.test(exampleStr);
    console.log(unResult);    

/*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Match Single Character with Multiple Possibilities

    You learned how to match literal patterns (/literal/) and wildcard character (/./). 
    Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

    You can search fore a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

    For example, you want to match bag, bif, and bug but not bog. you can create the regex /b[aiu]g/ to this. The [aiu] is the character class that will only match the charecters a, i, or u.
*/

    let bigStr = "big",
        bagStr = "bag",
        bugStr = "bug",
        bogStr = "bog",
        bgRegex  = /b[aiu]g/;

    console.log(bigStr.match(bgRegex));
    console.log(bagStr.match(bgRegex));
    console.log(bugStr.match(bgRegex));
    console.log(bogStr.match(bgRegex));

/*  Match Letters of the Alphabet

    You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a buil-in feature that makes this short and simple.

    Inside a character set, you can define a range of characters to match using a hyphen characters: -

    For example, to match lowercase letters a through e you would use [a-e].
    */    

    let catStr = "cat",
        batStr = "bat", 
        matStr = "mat",
        aeRegex = /[a-e]at/;
    console.log(catStr.match(aeRegex));    
    console.log(batStr.match(aeRegex));    
    console.log(matStr.match(aeRegex));    
/*  In order, the three match calls would return the values ["cat"], ["bat"], and null.

    Match all the letters in the string qouteSample.

    Note: Be sure to match both uppercase and lowecase letters  */
    
    let quoteSample = "The quick brown fox jumps over the lazy dog.",
        alphabetRegex = /[a-z]/gi,
        alphaResult = quoteSample.match(alphabetRegex);
    console.log(alphaResult);    
/*____________________________________________________________________________________

    Match Numbers and Letters of the Alphabet

    Using the hyphen (-) to match a range of characters is not limited to letters. It also works
    to match a range of numbers.

    For example, /[0-5] matches any number between 0 and 5, including 0 and 5.

    Also, it is possible to combine a range of letters and numbers in a single character set. */     

    let jennyStr = "Jenny857309", 
        myRegex2 = /[a-z0-9]/ig;
    console.log(jennyStr.match(myRegex2));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Match Single Characters Not Specified
    So far, you created a set of characters that you want to match, but you could also create a set of characters that do not want to match. These types of character sets are called negated character sets.

    To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

    For example, /[^aeiou]/ig matches all characters that are not a vowel. Note that characters
    like ., !, [, @, / and white space are matched - the negated character set only excludes the vowel characters.

    Create a single regex that matches all characters that are not a number or a vowel. 
    Remember to include the appropriat flags in the regex.
*/    

    let blindMice = "3 blind mice.",
        blindMiceRegex = /[^aeiou0-9 ]/ig,
        blindMiceResult = blindMice.match(blindMiceRegex);
    console.log(blindMiceResult);
    

/*  _____________________________________________________________________________

    Match Characters that Occur One or More Times 
    
    Sometimes, you need to match a character (or agroup of characters) that appears 
    one or more times in a row. This means it occurs at least once, and may be repeated.

    You can use the + character to check if that is the case. Remember, the charecter or pattern has to be present consecutively. That is, the character has to repeat one after the other.

    For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

    If it weere instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find match.

    YOu want to find matches when the letter s occurs one or more times in mississippi. Write a regex that uses the + sign.
    */

    let difficultSpelling = "Mississippi",
        diffMyRegex = /s+/g,
        diffResult = difficultSpelling.match(diffMyRegex);
    console.log(diffResult)
/*______________________________________________________________________________

    Match Characters that Occur Zero or More Times

    The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occure zero or more times.

    The character to do this is the asterisk or star: *.    */

    let  soccerWord = "goooooooooal",
         gPhrase = "gut feeling",
         oPhrase = "over the moon",
         goRegex = /go*/;
    console.log(soccerWord.match(goRegex)); // returns ["gooooooooo"] 
    console.log(gPhrase.match(goRegex)); // return ["g"]
    console.log(oPhrase.match(goRegex)); // return null

/* For this challenge, chewieQuote has been innitialized as the string Aaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a charachters in chwieQuote. Your regex does not need flags or character classes, and it should not march any of the other quotes. */    

    let chewieQuote = "Aaaaaaaaaaaaarrrgh!",
        chewieRegex = /Aa*/,
        chewieResult = chewieQuote.match(chewieRegex);
    console.log(chewieResult)    