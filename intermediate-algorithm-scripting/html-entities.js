/* 

    Convert HTML Entities
    Convert the charactetrs &, <, >, "" (double quote), and ' (apostrophe), in a string to their corrosponding HTML entities.
*/

    function convertHTML(str) {
        let regex = /&/,
            lessThan = /</g,
            greaterThan = />/g
            quotation = /"/g,
            apos = /'/g,
            lessAndGre = /[<][>]/;
            console.log(lessAndGre.test(str));
        return  (lessAndGre.test(str))? str.replace(lessAndGre, "&lt;&gt;")
                :(regex.test(str))? str.replace(regex, "&amp;")
                :(lessThan.test(str))? str.replace(lessThan, "&lt;")
                :(greaterThan.test(str))? str.replace(greaterThan, "&gt;")
                :(quotation.test(str))? str.replace(quotation, "&quot;")
                :(apos.test(str))? str.replace(apos, "&apos;")
                :str;
    }

    console.log(convertHTML("Dolce & Gabbana")); // should return the string Dolce &amp; Gabbana.
    console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return the     string Hamburgers &lt; Pizza &lt; Tacos.
    console.log(convertHTML("Sixty > twelve")); // should return the string Sixty &gt; twelve.
    console.log(convertHTML('Stuff in "quotation marks"')); 
    //should return the     string Stuff in &quot;quotation marks&quot;.
    console.log(convertHTML("Schindler's List")); // should return the string    Schindler&apos;s List.
    console.log(convertHTML("<>")); // should return the string &lt;&gt;.
    console.log(convertHTML("abc")); // should return the string abc.