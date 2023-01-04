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