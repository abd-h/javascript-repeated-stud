/*  Specify Upper and Lower Number of Matches

    Recall that you use the plus sign + to look for one ore more characters 
    and the asterisk * to look for zero or more characters. These are convenient 
    but sometimes you want to match a certain range of patters.

    you can specify the lower and upper number of patterns with quantity specifiers. 
    Quantity specifiers are used with curly brackets ({and}). you put two numbers 
    between the curly brackets - for the lower and upper number of patterns.

    For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3, 5}h/.   */

    let a4 = "aaaah",
        a2 = "aah",
        multipleA = /a{3,5}h/;
    console.log(multipleA.test(a4)); // true
    console.log(multipleA.test(a2)); // false

/*  The first test call would return true, while the second would return false
    
    Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's */      
    
    let ohStr = "Ohhhhhh no",
        ohRegex = /Oh{3,6}\sno/,
        ohResult = ohRegex.test(ohStr),
        ohMatch = ohStr.match(ohRegex);
    console.log(ohResult)  // true  
    console.log(ohMatch); // ['Ohhhhhh no']
/*+=======================================================================================

    Sepcify Only the Lower Number of Matches

    You can specify the lower and upper number of patterns with quantity specifiers using curlly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit. 

    To only specify the lower number of patterns, keep the first number follwed by a comma. 

    For example, to match the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
*/    

    let A4 = "haaaah",
        A2 = "haah",
        A100 = "h" + "a".repeat(100) + "h", 
        multipleA2 = /a{3,}h/;
    console.log(multipleA2.test(A4)); // true
    console.log(multipleA2.test(A2)); // false
    console.log(multipleA2.test(A100)); // true
/*================================================================================

    Specify Exact Number of Matches
    You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches. 

    To specify a certain number of patterns, Just have that one number between the curly brackets. 
    
    For example, to match only the word hah with letter a 3 times, your regex would be /ha{3}h/ */

    let A5 = "ahaaaaah",
        A3 = "ahaaah",
        A50 = "h".repeat(50).concat("h"),
        multipleHa = /aha{3}h/; 
    console.log(multipleHa.test(A5)); // false   
    console.log(multipleHa.test(A3));  // true  
    console.log(multipleHa.test(A50)); // false
/*========================================================================================

    Check for All or None

    Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
    However, it may be important to check for them nonetheless.

    You can specify the possible existance of an element with a question mark, ?.
    This checks for zero or one of the proceding element. You can think of this symbol as saying 
    the previous element is optional. For example, there are slight difference in Amirican and British English and you can use the question mark to match both spellings.   */       

    let american = "color",
        british = "colour", 
        rainbowRegex = /colou?r/;
    console.log(rainbowRegex.test(american));    // true
    console.log(rainbowRegex.test(british));    // true

/*  Change the regex favRegex to match both the American English (favorite) 
    and the British English (favourite) version of the word. */    

    let favWord = "favorite",
        favRegex = /favou?rite/,
        favResult = favRegex.test(favWord);
    console.log(favResult);

/* ===================================================================================

    Positive and Negative Lookahead

    Lookahead are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

    There are two kinds of lookaheads: positive lookahead and negative lookahead.

    A positive lookahead will look to make sure the element in the search pattern is there, but won't
    actually match it. A  positive lookahead is used as (?=...) where the ... is the required part that is not matched.

    On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative looahead is used as (?!...) where the ... is the pattern that you do not wnt to be there. The rest of the pattern is returned if the negative lookahead part is not present.

    Lookaheads are a bit confusing but some examples will help. */
    
    let quit = "qu",
        noquit = "qt",
        quRegex = /q(?=u)/,
        qRegex = /q(?!u)/;
    console.log(quit.match(quRegex));   // ["q"]
    console.log(noquit.match(quRegex)); // null 
    
/*  A more practical use of lookaheads is to check two or more patterns in one string. 
    Here is a (naively) simple password checker that looks for between 3 and 6 character 
    and at least one number:   */
    
    let password = "abc123",
        checkPass = /(?=\w{3,6})(?=\D*\d)/;
    console.log(checkPass.test(password))

/*  Use lookahead in the pwRegex to match passwords that are greater than 5 or more characters long, 
    and have two consecutive digits.
*/    
    let sampleWord = "astronaut11";
        pwRegex = /(?=\w{6})(?=\w*\d{2})/,
        pwResult = pwRegex.test(sampleWord);
    console.log(pwResult);

/*  ===========================================================

    Check For Mixed Grouping of Characters

    Sometimes we want to check for groups of charaacters using a Regular Expression and to chieve that we use parentheses ().

    If you want to find either Penguin or Pumpkin in a starting, you can use the following Regular Expression: /P(engu|umpk)in/g

    Then  check whether the desired string groups are inn the test string by using the test() method.
*/    
    let testStr1 = "Pumpkin",
        testRegex1 = /P(engu|umpk)in/g;
    console.log(testRegex1.test(testStr1)); 
/*  The test would return true

    Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it shold make concessions for middle names.

    Then fix the code so that the regex that you have created is checked agaiinst myString and either true or false returned depending on whether the regex matches.
*/   

    let myNewStr = "Eleanor Roosevelt",
        myNewRegex = /(Franklin\s[D].|Eleanor)\sRoosevelt/g,
        myNewResult = myNewRegex.test(myNewStr);
    console.log(myNewResult);

/*  ================================================================================

    Reuse Patterns Using Capture Groups

    Say you want to match a word that occurs multiple times like below.

    let repeatStr = "row row row boat"; 
    You could use /row row row/, but what if you don't know the specific word repeated? 
    Capture groups can be used to find repeated substrings. 

    Capture groups are constructed by enclosing the regex pattern to be capture in parentheses.
    In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w + enclosed by parentheses: /(\w+)/.
    
    The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are 
    automatically numbered by the position of their opening parentheses (left to right), starting at 1.

    the example below matches a word that occurs thrice separated by spaces:    */
    
    let repeatedStr = "row row row boat",
        repeatRegex = /(\w+) \1 \1/;
    console.log(repeatRegex.test(repeatedStr)) // true
    console.log(repeatedStr.match(repeatRegex)); // ["row row row", "row"]
/*  Using the .match method on a string will return an array with the matched substring, along with its 
    captured groups. 
    
    Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces. */

    let repeatNum = "42 42 42",
        repRegex = /^(\d+)(\s)\1\2\1$/,
        repResult = repeatNum.match(repRegex);
    console.log(repResult); 
/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Use Capture Groups to Search and Replace

    Searching is useful. However, you can make searching even more powerful when it also changes
    (or replace) the text you match. 

    you can search and repalce text in a string using .replace() on a string. The inputs for .replace()
    is first the regex pattern you want to search for. The second parameter is the string to replace the match or function to do something.     */
    
    let wrongText = "The sky is silver.",
        silverRegex = /silver/;
    console.log(wrongText.replace(silverRegex, "Blue"));
/*  The replace call would return the string "The sky is blue..."

    You can also access capture groups in the replacement string with dollar signs ($).   */

    console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1")); 
/* The replace call would return the string Camp Code. 

   Write a regex fixRegex using three capture groups that will search for each word in the string one 
   two three. Then update the replacetText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
   
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        Remove Whitespace from Start and End
     
     Sometimes Whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
     
     Write a regex and use the appropriate string method to remove whitespace at the beginning and end of strings.

     Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
   */

    let hello = "  Hello, World! ",
        wsRegex = /^\s+|\s+$/g,
        wsResult = hello.replace(wsRegex, ""),
        wsResult1 = hello.match(wsRegex);
    console.log(wsResult);
    console.log(wsResult1);    