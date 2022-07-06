/*  
    Pig Latin 
    Pig Latin is a way of altering English Words. The rules are as follows:

    -   If a word begins with a constonant, take the first consonant or constnant cluster, move it to the end of the word, and add ay to it.
    
    -   if a word begins with avower, just add way at the end. 

    Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

    function translatePigLatin(str) {
        let vowel = /^[aeiou]+/,
            consonant = /[^aeiou]+/;
         return (vowel.test(str))? str.concat("way")
                   :(consonant.test(str))? str.split("").slice(str.match(consonant)[0].length).concat(str.split("").slice(0,str.match(consonant)[0].length), "ay").join("")
                   : undefined;
    }
    console.log(translatePigLatin("consonant"))

    console.log(translatePigLatin("california")); // should return the string aliforniacay.
    console.log(translatePigLatin("paragraphs")); // should return the string aragraphspay.
    console.log(translatePigLatin("glove")); // should return the string oveglay.
     console.log(translatePigLatin("algorithm")); // should return the string algorithmway.
    console.log(translatePigLatin("eight")); // should return the string eightway.
    //Should handle words where the first vowel comes in the middle of the word. 
    console.log(translatePigLatin("schwartz")); // should return the string artzschway.
    // Should handle words without vowels. 
    console.log(translatePigLatin("rhythm")); // should return the string rhythmay.