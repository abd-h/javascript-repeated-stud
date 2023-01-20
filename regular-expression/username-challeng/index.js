/*  Restrict Possible Usernames

    Usernames are used everywhere on the internet. They are what give users a unique identity on theirfavorite sites
    
    You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username. 

        1.  Usernames can only use alpha-numeric characters.

        2.  The only numbers in the username have to be at the end. There can be zero or more of them ar 
            the end
        
        3.  Username letters can be lowercase and uppercase. 
        
        4.  Usernames have to be at least two characters a long. A two-character username can only use 
            alphabet letters as characters.

    Change the regex userCheck to fit the constrains listed above.        
    */

    let username = "J%4",
        userCheck = /^([a-z][a-z]+|[^\d][a-z][a-z]+)\d*$|([a-z][\d][\d])+\d*$/i, // Change this line
        userResult = userCheck.test(username),
        userResultMatch = username.match(userCheck);
    console.log(userResultMatch)
    console.log(userResult)    

//    Tests
//Your regex should match the string JACK
//Your regex should not match the string J
//Your regex should match the string Jo
//Your regex should match the string Oceans11
//Your regex should match the string RegexGuru
//Your regex should not match the string 007
//Your regex should not match the string 9
//Your regex should not match the string A1
//Your regex should not match the string BadUs3rnam3
//Your regex should match the string Z97
//Your regex should not match the string c57bT3
//Your regex should match the string AB1
//Your regex should not match the string J%4    