/*
    DNA Pairing
    Pairs of DNA strands consist of nucleobase pairs.  Base pairs are represented by the characters AR and CG, which form building blocks of the DNA double helix.

    The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. 

    For each character in the provided  string, dind the base pair character.

    Return the result as a 2d  array.

    For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

    The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

    function pairElement(str) {
        return str.split("").reduce((total, element) => {
           if(/A/.test(element)) {
            total.push(["A", "T"]);
           } else if(/T/.test(element)) {
            total.push(["T", "A"])
           } else if(/C/.test(element)) {
                total.push(["C", "G"]);
           } else if(/G/.test(element)) {
                total.push(["G", "C"])
           }
           return total;
        }, [])
    }
    console.log(pairElement("GCG"));

    console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
    console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
    console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].