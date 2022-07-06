/*
    Spinal Tap Case
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-dashes.
*/
    function spinalCase(str) {
        let regex3 = /([a-z])([A-Z])|\s|_/g,
            result;
        return result = str.replace(regex3, "$1-$2").toLowerCase();

    }

    console.log(spinalCase("This Is Spinal Tap")); // should return the string this-is-spinal-tap.
    console.log(spinalCase("thisIsSpinalTap")); // should return the string this-is-spinal-tap.
    console.log(spinalCase("The_Andy_Griffith_Show")); // should return the string the-andy-griffith-show.
    console.log(spinalCase("Teletubbies say Eh-oh")); // should return the string teletubbies-say-eh-oh.
    console.log(spinalCase("AllThe-small Things")); // should return the string all-the-small-t currenthings.