/*  1. Learn About Functional Programming

    Functional programming is a style of programming where solutions are simple, isolated
    functions, without any side effects outside of the function scope: 

        INPUT -> PROCESS -> OUTPUT
        
    Functional programming is about: 
    
        1. Isolated functions - there is no dependence on the state of the program, which
            includes global variables that are subject to change
            
        2. Pure functions - the same input always gives the same output
        
        3. Functions with limited side effects - any changes, or mutaitons, to the state of the 
            program outside the function are carefully controlled 
            
    Below, the prepareTea and getTea functions are already defined for you. Call the getTea
    function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.  */
    
    // Function that returns a string representing a cup of green tea

    const prepareTea = () => "greenTea";

/*  
    Given a function (representing the tea type) and number of cups needed, the 
    following function returns an array of strings (each representing a cup of 
    a specific type of tea) */
            
    const getTea = (numOfCups) => {
        const teaCups = [];

        for(let cups = 1; cups < numOfCups; cups++) {
            const teaCup = prepareTea();
            teaCups.push(teaCup);
        }
        return teaCups;
    }

    const tea4TeamFCC = getTea(40);
    console.log(tea4TeamFCC);// returns an Array containing 40 cups of greenTea
/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   2. Understan Fucntional Programming Terminology

    The FCC Team had a mood swng and now wants two types of tea: green tea and black tea.
    General Fact: Client mood swings are prety common.

    With that information, we'll need to revisit the getTea function from last challenge to handle 
    various tea requests. We can modify getTea to accept a function as a parameter to be able to 
    change the type of tea it prepares. This makes getTea more flexible, and gives the programmer more control when client requests change.

    But first, let's cover some functional terminology: 

    1. Callbacks are the functions that are slipped or passed into another function to decide the 
       invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

    2. Functions That can be assigned to avariable, passed into another function, or returned from 
       another function just like any other normal value, are called first class functions. In 
       JavaScript, all functions are first class functions.  
        
    3. The functions that take a function as an argument, or return a function as a return value, are
        called higher order functions.
        
    4. When functions are passed in to or returned from another function, then those functions which 
        were passed in or returned can be called a lambda.    

    Prepare 27 cups of green tea and 13 cups of black tea and store them in teaGreenTeamFCC 
    and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.
    
    Note: The data (the number of cups of tea) is supplied as the last argument. 
    we'll discuss this more in later lessons.
*/

// Function that returns a string representing a cup of green 
    const prepareGreenTea = () => "greenTea"

// Function that returns a string representing a cup of black tea
    const prepareBlackTea = () => "blackTea"    

/*
    Given a function (representing the tea type) and number of cups needed, the following function
    returns an array of strings (each representing a cup of a specific type of tea).
*/  
    const getTeas = (prepareTea, numOfCups) => {
        const teaCups = [];

        for(let cups = 1; cups < numOfCups; cups++) {
            const teaCup = prepareTea();
            teaCups.push(teaCup)
        }
        return teaCups;
    };

    const tea4BlackTeamFCC = getTeas(prepareBlackTea, 13);
    const tea4GreenTeamFCC = getTeas(prepareGreenTea, 27);
    
    console.log(tea4BlackTeamFCC); // returns 13 cups of Black Tea
    console.log(tea4GreenTeamFCC); // returns 27 cups of Green Tea

/*  
    Understan the Hazards of Using Imperative Code

    Functional programming is a good habit. It keeps your code easy to manage, and saves you 
    from sneaky bugs. But before we get there, let's look at an imperative approach to 
    programming to highlight where you may have issues.

    In English (and many other languages),  the imperative tense is used to give commands. Similarly,
    an imperative style in programming is one that gives the computer a set of statements to perform a 
    task. 

    Often the statements change the state of the program, like updating global variables. You tell the 
    computer what you want done by calling a method or function.

    JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method wich handles the deails of iterating over an array. This helps to avoid semantic errors, like the Off "By One Errors" that were covered in the Debugging section.

    Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.
    
    A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browsser (opening new tabs, mergin window, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

    The code editor shows an implementation of this functionality with functions for tabOpen(), 
    tabClose() and join(). The array tabs is part of the Window object that stores the name of the open pages.

    Examine the code below. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, 
    should be 
    [
        'FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 
        'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 
        'Work mail', 'Docs', 'freeCodeCamp', 'new tab'
    ]
    but the list produced by the code is slightly different.

    Change Window.prototype.tabClose so that it removes the correct tab.
*/    

// tabs is an array of titles of each site open within the window
    const Window = function(tabs) {
        this.tabs = tabs; // We keep a record of the array inside the object
    };



// when you join two windows into one window
    Window.prototype.join = function(otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    }

// When you open new tab    
    Window.prototype.tabOpen = function(tab) {
        this.tabs.push("new tab"); // let's open a new tab for now
        return this;
    }    

// When you close a tab
    Window.prototype.tabClose = function(index) {
        const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
        const tabsAfterIndex = this.tabs.slice(index, 1); // Get the tabs after the tab

        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

        // Only change code above this line

        return this;
    };

                // Let's create three browser windows

    // Your mailbox, drive, and other work sites
    const workWindow = new Window(["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"]);
    
    // Social Sites
    const socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]);

    // Entertaminment sites
    const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"])

    // Now perform the tab opening, closing, and other operations
    const finalTabs = socialWindow
                        .tabOpen() // Open a new tab for cat names
                        .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                        .join(workWindow.tabClose(1).tabOpen());

    console.log(finalTabs.tabs)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

    Avoid Mutations and Side Effects Using Functional Programming

    If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function, unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

    this is a small ecample of a much larger pattern - you call a function on a variable, array, or n object, and the function changes the variable or something in object.
    
    One of the core principles of functional programming is to not change things. Changes lead to bugs. 
    It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable. 
    
    The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug. 

    Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it 
    does not cause any side effects. 
    
    Let's try to master this discipline and not alter any variable or object in our code.

    Fill in the code for the function incrementer so it returns the value of the global 
    variable fixedValue increased by one.

    // The global variable
    let fixedValue = 4;

    function incrementer() {
     // Only change code below this line


    // Only change code above this line
    }
    */

    // The global variable
    let fixedValue = 4;

    function incrementer() {
        let fixedV = fixedValue;
         fixedV++;
         return fixedV;
    }
    console.log(incrementer());
    console.log(incrementer());

/*  
    Pass Arguments to Avoid External Dependence in a Function

    The last challenge was a step closer to functional programming principles, 
    but there is still something missing.

    We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

    Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present,then pass that variable or object directly into the function as argument.

    There are several good consequences from this priciple. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

    This can give you more confidence when you alter, remove, or add new code. You would know what you can or connot change and you can see where the ptentioal traps are.

    Finally, the function would always produce the same output for the same set of inptuts, no matter what part of the code executes it.

    Let's update the incrementer function to clearly declare its dependencies.

    Write the increnter function so it takes an argument, and then returns a result after increasing the value by one.

        // The global variable
    let fixedValue = 4;

    // Only change code below this line
    function incrementer() {


    // Only change code above this line
    }
*/   

    function funcWithParameter(number) {
        number++;
        return number;
    }
    console.log(funcWithParameter(4));
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    Refactor Global Variables Out of Functions

    So far, we have seen two distinct principles for funciton programming: 

        1.  Don't alter a variable or object - create new variables and objects 
            and return them if need be from a function. Hint: using something like 
            const newArr = arrVar, where arrVar is an array will simply create a 
            reference to the existing variable and not a copy. So changing a value 
            in newArr would change the value in arrVar.
        
        2.  Declare function parameters - any computation inside a function depends 
            only on the arguments passed to the function, and not on any global object 
            or variable.

        3.  Adding one to a number is not very exciting, but we can apply these principles 
            when working with arrays or more complex objects.    
        
    Rewrite the code so the global array bookList is not changed inside either function.
    The add function should add the given bookName to the end of the array passed to it 
    and return a new array (list). The remove function should remove the given bookName 
    from the array passed to it.

    Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

    // The global variable
    const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

    // Change code below this line
    function add(bookName) {

    bookList.push(bookName);
    return bookList;
    
    // Change code above this line
    }

    // Change code below this line
    function remove(bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {

        bookList.splice(book_index, 1);
        return bookList;

        // Change code above this line
        }
    }
*/    
    // The global variable
    const bookList = [
        "The Hound of the BAskervilles",
        "On The Electrodynamics of Moving Bodies",
        "Philosophic Naturalis Principia Mathematica",
        "Disquisitiones Arithmeticae"
    ];

    // Add function
    function add(arr,bookName) {
        const newList = arr.slice();
        newList.push(bookName);
        return newList;
    }
    console.log(add(bookList, "A Breif History of Time"));

    // remove function
    function remove(arr, bookName) {
        let newList = [];
        arr.filter(item => {
            (item !== bookName)? newList.push(item)
            : "don't match";
        });
        return newList;
    }
    console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Use the map Method to Extract Data from an Array

    So far we have learned to use pure function to avoid side effects in a program. Also, 
    we have seen the value in having a function only depend on its input arguments.

    This is only the beginning. As its name suggests, functional programming is centered around a 
    theorey of functions.

    It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments. 

    Let's start with some simple array function, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simple map.

    The map method iterates over each item in an array and returns anew array containing the results of calling the callback function on each element. It does this without mutating the original array.

    When the callback is used, it is passed three arguments. 
        
        1.  The first argument is the current element being processed. 
        2.  The second is the index of that element
        3.  The third is the array upon which the map method was called

    See below for an example using the map method on the users array to return new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback/    
    */    

    const users = [
        { name: "John", age: 34}, 
        { name: "Amy", age: 20},
        { name: "camperCat", age: 10}
    ];

    const names = users.map(item => item.name);
    console.log(names); // returns ["John", "Amy", "camperCat"]

/*  
    The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the rating variable. Each movie inn the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your expression.

    
*/

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// }

// Only change code above this line

// console.log(JSON.stringify(ratings));

    const ratings = [];
    
    watchList.map((item) => {
        ratings.push({"title": item.Title, "rating": item.imdbRating});
    })

    console.log(JSON.stringify(ratings));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++kkk

     Implementmap on aPrototype

     As you have seen from applying Array.prototype.map(), or simply map() earlier,
     the map method returns an array of the same length as the one it was called on. It also does't
     alter the original array, as long as its calledback function doesn't.

     In other words, map is a pure function, and its output depends solely onits inputs. Plus, it 
     takes another function as its argument.

     You might learn alot about the map method if yhou implement your own version of it. 
     It is recommended you use a for loop or Array.prototype.forEach().

     Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
     You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

     Array.prototype.myMap = function(callback) {
        const newArray = [];
  
        // Only change code below this line

        // Only change code above this line
        return newArray;
    };
*/    
    // done with forEach method
    Array.prototype.myMap = function(callback) {
        let newArray = [];
        console.log(this);
        this.forEach((item, i, array) =>{
            newArray.push(callback(item, i, array))
        })
        return newArray;
    }

        // Tests
console.log([23, 65, 98, 5, 13].myMap(item => item * 2)) // should equal [46, 130, 196, 10, 26].
console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()))
// should return ["NAOMI", "QUINCY", "CAMPERBOT"].
console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])) 
// should return [1, 2, 5, 2, 1].
// Your code should not use the map method.

//  done with for loop

    Array.prototype.myMap2 = function(callback) {
        let newArray = [];

        for(let i = 0; i < this.length; i++) {
            newArray.push(callback(this[i], i, this))
        };
        return newArray
    }

    // Tests
console.log([23, 65, 98, 5, 13].myMap2(item => item * 2)) // should equal [46, 130, 196, 10, 26].
console.log(["naomi", "quincy", "camperbot"].myMap2(element => element.toUpperCase()))
// should return ["NAOMI", "QUINCY", "CAMPERBOT"].
console.log([1, 1, 2, 5, 2].myMap2((element, index, array) => array[index + 1] || array[0])) 
// should return [1, 2, 5, 2, 1].
// Your code should not use the map method.

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Use the filter Method to Extract Data from an Array

    Another useful Array function is Array.prototype.filter(), or simply filter().

    Filter calls a function on each element of an array and returns a new array containing only the 
    elements for which that function returns a truthy value - that is , a value which returns true if passed to the Boolean() constructor. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

    The callback function acceps three arguments. 

        1. The first argument is the current element being processed. 
        2. The second is the index of that element
        3. And the thied is the array upon which the filter method is called

    See the below example using the filter method on the newUsers array to return a new array 
    containing only the users under the age of 30. For simplicity, the example only uses the first argument of the call back.    
*/
    let newUsers = [
        { name: "John", age: 34},
        { name: "Amy", age: 20}, 
        { name: "camperCat", age: 10}
    ];

    const usersUnder30 = newUsers.filter(item => item.age < 30);
    console.log(usersUnder30); 
    /* The console would display the below value
   [{ name: "Amy", age: 20}, { name: "camperCat", age: 10}]

   The variable watchList holds an array of objects with information on several movies. 
   Use a combination of filter and map on watchList to assing a new array of objects with only
   title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.00. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform methematical operations on them.

   // Only change code below this line

    const filteredList = "";

    // Only change code above this line

    console.log(filteredList);
   */ 

    const filteredList = watchList
        .map(item => {
            return {title: item.Title, rating: item.imdbRating}
        })
        .filter(list => {
            return list.rating >= 8.00;
    });
    console.log(filteredList);

/*  

    Implement the filter Method on a Prototype

    You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototy.forEach().

    Write your own Array.prototype.myFilter(), which should behave exactly 
    like Array.prototype.filter(). You should not use the built-in filter. The Array instance can be accessed in the myFilter method using this;

    Array.prototype.myFilter = function(callback) {
        const newArray = [];
        // Only change code below this line

        // Only change code above this line
        return newArray;
    };
*/      

    Array.prototype.myFilter = function(callback) {
        console.log(this);
        let newArr = [];
        for(let i = 0; i < this.length; i++) {
            if(callback(this[i], i, this)) {
                newArr.push(this[i])
            }
        }
        return newArr;
    }
    console.log([23, 65, 98, 5, 13].myFilter(item => item % 2)); 
    //should equal [23, 65, 5, 13].

    console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")) 
    // should return ["naomi"].

    console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)) 
    //should return [1, 2, 5].

//    Your code should not use the filter method.