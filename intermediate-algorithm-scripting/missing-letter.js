    /*
        Missing letters
        Find the missing letter in the passed letter range and return it. 

        If all letters are present in the range, return undefined.
    */

        function fearNotLetter(str) {
            let alphabet = "abcdefghijklmnopqrstuvwxyz".split(""),
                lastLetter = str[str.length -1],
                firstLetter = str[0],
                newStr = alphabet.slice(alphabet.indexOf(firstLetter), alphabet.indexOf(lastLetter) + 1);
                if(str == newStr.join("")) {
                    return undefined;
                } else {
            return newStr.reduce((missingLetter, element) => {
                if(str.indexOf(element) == -1) {
                    missingLetter.push(element);
                }
                return missingLetter;
            }, []).join("");
        }
        }
        console.log(fearNotLetter("abce")); // should return the string d.
        console.log(fearNotLetter("abcdefghjklmno")); // should return the string i.
        console.log(fearNotLetter("stvwx")); // should return the string u.
        console.log(fearNotLetter("bcdf")); // should return the string e.
        console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.