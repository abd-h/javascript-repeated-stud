/*
    Find Characters with Lazy Matching

    In regular expression, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as match. The alternative is called a lazy match, which the smallest possible part of the string that satisfies the regex pattern. 

    You can apply  the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between. 

    Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern. 

    However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

    Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular experssion is completely fine.

    fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
    Remember the wildcard . in a regular expression matches any character.
*/
    let text = "<h1>Winter is coming</h1>",
        textRegex = /<.*?>/; // change this line,
        textResult = text.match(textRegex);
    console.log(textResult)   
    
/*________________________________________________________________________________

    Find One or More Criminals in a Hunt

    Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are resposible for finding all of the criminals at once

    Here's an example to review how to do this:

    The regex /z+/ matches the letter z when it appears one or more time in a row. It would find matches in all to the following string:

    "z"
    "zzzzzz"
    "ABCzzzz"
    "zzzzABC"
    "abczzzzzzzzzzzzzzzzzzzzzabc"
    But it does not find matches in the following string since there are no letter z character:

    ""
    "ABC"
    "abcabc"

    Write a greedy regex that finds one ore more criminals within a group of other poeple.
    A criminal is represented by the letter C

*/    

    let eCriminal = "P6P2P7P4P5CCCCCP3P1",
        eCriminalRegex = /C+/g,
        eCriminalResult = eCriminal.match(eCriminalRegex);
    console.log(eCriminal.match(eCriminalRegex));    

/*  ___________________________________________________________________________

    Match Beginning String Patterns 

    Prior challenges showed that regular expression can be used to look for a number of matches.
    They are also used to search for patterns in specific positions in strings. 

    In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Ouside of a character set, the caret is used to search patterns at the beginning of strings.  */

    let firstString = "Ricky is first and can be found.",
        firstRegex = /^Ricky/;
    console.log(firstString.match(firstRegex))  // returns [Ricky]  

    let notFirst = "You can't find Ricky now.";
    console.log(notFirst.match(firstRegex)); // returns null

/*  Use the caret character in a regex to find Cal only in the 
    beginning of the string rickyAndCal */

    let rickyAndCal = "Cal and Ricky both like racing.",
        calRegex = /^Cal/,
        calResult = calRegex.test(rickyAndCal);
    console.log(calResult)   
    
/*  Match Ending String Patterns

    In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.
    
    You can search the end of strings using the dollar sign character $ at the end of the regex. */

    let theEnding = "This is a never ending story",
        storyRegex = /story$/;
    console.log(storyRegex.test(theEnding));   // returns true
    
    let notEnding = "Sometimes a story will have to end";
    console.log(storyRegex.test(notEnding)); // returns false

//  Use the anchor character ($) to match the string caboose at the end of string caboose.

    let caboose = "the last car on a train is the caboose",
        lastRegex = /caboose$/,
        cabResult = lastRegex.test(caboose);
    console.log(cabResult); 
    
/*  ________________________________________________________________________________

    Match All Letters and Numbers

    Using characters classes, you were able to search for all letters of the alphabet with [a-z]. 
    This kind of characters classed is common enough that there is a shortcut for it, although it includes a few extra characters as well.

    The closest character class in JavaScript ot match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character classes matches upper and lowecase letters plus numbers. Note, this character class also includes the underscore character (-).
*/    

    let longHand = /[A-Za-z0-9_]/,
        shortHand = /\w+/,
        numbers = "42",
        varNames = "important_var";
    console.log(longHand.test(numbers));
    console.log(shortHand.test(numbers));
    console.log(longHand.test(varNames));
    console.log(shortHand.test(varNames));
    // All four of these test calls would return true.

/*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Match Everything But Letters and Numbers

    You've learned that you can use a shortcut to match alphanumerics.

    You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter.
    This shortcut is the same as [^A-Za-z0-9].  */
    
    let shortHand2 = /\W/,
        numbers2 = "42%",
        sentence = "Coding!";
    console.log(numbers2.match(shortHand2));
    console.log(sentence.match(shortHand2));   
// The first match call would return the value ["%"] and the second would return ["!"]
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Match All Numbers

    You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

    The shorcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], whichlooks for a single character of any numberbetween zero and nine.

    Use the shorthand character class \d to count how manydigits are in movie titles. Writtenout numbers ("six" instead of 6) do not count. */

    let movieName = "2001 A Space Odyssey",
        numRegex = /\d/g,
        movResult = movieName.match(numRegex)
    console.log(movResult); // ["2", "0", "0", "1"]    

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= 
    Match All Non-Numbers

    The last challenge showed how to search for digits using the shorcut \dwith a lowercase d.
    You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

    The shorcut to look for non-digit characters is \D. 
    this is equal to the character class [^0-9], which looks for asingle character that is not a 
    number between zero to nine.

    Use the shorthand character class for non-digits \D to cound how many non-digits are inn 
    movie titles. */    

    let newMovieName = "2001 A Space Odyssey",
        nonNew = /\D/g,
        noneNewResult = newMovieName.match(nonNew).length;
    console.log(noneNewResult)
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Match Whitespace
    
    The challenges so far have covered matching letters of the alphabet and numbers. 
    You can also match the whitespace or spaces between letters.
    
    You can search for whitespace using \s, which is a lowercase s. This pattern not only matches
    whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]. */    

    let whiteSpace = "Whitespace. Whitespace everywhere!",
        spaceRegex = /\s/g;
    console.log(whiteSpace.match(spaceRegex)); // returns [" ", " "]
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Match Non-Whitespace Characters

    You learned about searching for whitespace using \s, with a lowercase s. You can also search for
    everything except whitespace.

    Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, 
    carriage return, tab, form feed, and new line characters. YOu can think of it being similar to the character classes    [^ \r\t\f\n\v]. */

    let noWhiteSpace = "Whitespace Whitespace everywhere!",
        nonSpaceRegex = /\S/g;
    console.log(noWhiteSpace.match(nonSpaceRegex).length)    

