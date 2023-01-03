/*
    *** Object Oreinted Programming ***

    OOP, or Object Orinted Programming, is one of the major approaches to the software development process.
    In OOP, objects and classes organize code to describe things and what they can do.

    In this caurse, you'll learn the basic priciples of OOP in JavaScipt, inlcuding the this keyword, prototype chains, constructors, and inheritance. 

    *** Create a Basic JavaScrip Object ***

    Think about things people see every day, like cars shops, and birds. These are all opject: tangible things people can oserve and interact with.

    What are some qualities of these objects? A car has weels. Shop sell items. Birds have wings. 

    these qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, bur not all cars have the same numbmer of wheels. 


    Objects in JavaScript are used to model real-world object, giving them properties and behavior just like their real-world counterparts. Here's an example using these concept to create a duck object:
*/

    let duck = {
        name: "Aflec",
        numLegs: 2
    };

/*
    This duck object has two property/value pairs: a name of Aflec and a numLegs of 2.

    Create a dog object with name and numLegs properties, and set them to astring and a number, respectively.
*/    

    let dog = {
        name: "Barker", 
        numLegs: 4
    };

    console.log(dog);

/*
    *** Use Dot Notation to Access the Properties of an Object ***

    The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example: 
*/    
    let duckOne = {
        name: "Aflec", 
        numLegs: 2
    };
    console.log(duckOne.name);

/*
    Dot notation is used on the object, name dduckOne, followed by the name of the property, name, to acces the value of Aflac.

    Print both properties of the dog object toyour console.
*/    

    console.log(dog.name, dog.numLegs);

/*

    *** Create a Method  on an Object ***

    Objects can have aspecial type of property, called a method. 

    Methods are preoperties that are functions. This adds different behavior to an ovject. Her is the duck ecample with amethod:
*/    

    let duckThree = {
        name: "Aflac",
        numLegs: 2,
        sayName: function() {
            return "The name of this duck is " + duckThree.name + ".";
        }
    }

    console.log(duckThree.sayName());
/*
    the example adds the sayName method, which is a function that returns a a sentence giving the name of the duckThree. Notice that the method accessed the name property in the return statement using duckThree.name. the next challenge will cover another way to do this.
    
    Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has four legs.
*/    
    let dogTwo = {
        name: "Spotty",
        numLegs: 4,
        sayLegs: function() {
            return "This dog has " + dogTwo.numLegs + " legs."
        }
    }

    console.log(dogTwo.sayLegs());

/*
    *** Make Code More REusable with the this Keyword ***

    The last challenge introduced a method to the duckThree object. It used duckThree.name dot notation to access the value for the name property within the return statement: 

    sayName: function() {return "The name of this duck is " + duckThree.name + "."}

    while this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has amny references to its properties there is a greater chance for error.

    a way to avoid these issues is with the this keyword: 
*/    

    let duckFour = {
        name: "Aflac",
        numLegs: 2,
        sayName: function() {
            return "The name of this duck is " + this.name + "."
        }
    }

    console.log(duckFour.sayName());
/*
    This is a deep topic, and the above example is only one way to use it. In the current context, this refers to thhe object that the method is associated with: duckFour. If the object's name is changed to mallard, it is not necessary to find all the references to duckFour inn the code. It makes the code reusable and easy to read. 
*/    

/*

    *** Define a Constructor Function ***

    Constructors are function that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

    Here is an example of a constructor:
*/

    function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }

/*
    This constructor defines a Birrd object with properties name, color and numLegs set to Albert, blue, and 2, respectively. constructors follow a fewe conventions: 

        .   constructors are dfined with a capitalized name to distinguish them from other functions that are not constructors.

        .   Constructors use the keyword this to set properties of the object they will create. Inside the constructors, this refers to the new object it will create.

        .   Constructors define properties and behaviours instead of returning a value as other function might. Create a contructor, Dog, 

    Create a constructor, Dog, with properties name color, and numLegs that are set to a string, a string and a number, respectively.
*/    

    function Dog() {
        this.name = "Terrier";
        this.color = "Gray"
        this.numLegs = 4;
    }


/*

    *** Use a Constructor to Create Objects ***

    Here's the BirdTwo constructor from the previous challenge:
*/    

    function BirdTwo() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }

    let blueBird = new Bird();
/*  NOTE: this inside the constructor always refers to the object bein created.

    Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties define inside the BirdTwo constructor.
*/    
    console.log(blueBird.name); // Albert
    console.log(blueBird.color); // Blue
    console.log(blueBird.numLegs); // 2
//  Just like any other object, its properties can be accessed and modified:

    blueBird.name = 'Elvira';
    console.log(blueBird.name);

// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning ir to a variable hound.

    let hound = new Dog();
    console.log(hound.name); // Terrier

/*  
    *** Extend Constructors to Recieve Argument ***

    The BirdTwo and Dog constructors from the last challenge worked well. However, notice that all birds 
    that are created with the Bird constructor are automatically named Albert, are blue in color, and 
    have two legs. What if you want brids with different values for name and color? It's possible t 
    change the properties of each bird manually but that would be a lot of work:
*/    

    let swan = new BirdTwo();
    swan.name = "Carlos";
    swan.color = "White";
    console.log(swan.name);
/*
    Suppose uou were writing a program to keep track of hundreds or even htousands of different birds in 
    an aviary. It would take a lot of time to  create all the birds, then change the properties to different values for every one. to more easily create different BirdTwo objects, you can design your BirdTwo constructor to accept parameters: 
*/    

    function BirdThree(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }
// Then pass in the  values as argumrents to define each unique bird into the BirdThree constructor: 
    
    let cardinal = new BirdThree("Brue", "Red");
/* 
    This  gives a new instance of BirdThree with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardianl has these properties: 
*/  
    console.log(cardinal.name); // Bruce
    console.log(cardinal.color); // Red
    console.log(cardinal.numLegs); // 2

/*
    The constructor is more flexible. It's now possible to define the preoperties for each Bird at te time it is created, which is one way that javaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates thir creation.

    Challenge 5
    Create another Dog constructor. This time, set it up to take the parameters name and clor, and have the arguments for the name and color properties.
*/    
    function DogTwo(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }

    let terrierTwo = new DogTwo("leo", "grey");
    console.log(terrierTwo.name);

/*

    *** Verify an Object's Constructor with instanceof ***

    Anytime a constructor functions creates a new object, that object is said to be an instance of its constructor. JavaScript gives a cnvenient way to verify this with the instanceof operator. instanceof allows you to compare an oject to a constructor, returning true or false based on whether or not that object was created with the contructor. Here's an example:
*/

    let BirdFour = function(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }

    let crow = new BirdFour("Alexis", "Black");
    console.log(crow instanceof BirdFour); // returns true;
    
/*
    If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor
*/
    let canary = {
        name: "Mildred",
        color: "Yellow",
        numLegs: 2
    };

    console.log(canary instanceof BirdFour); // returns false.

/*  Challeng Five

    Create a new instance of the HOuse constructor, calling it myHouse and passing a number of bedrooms.
    Then, use instanceof to verify that it is an instance of House.
*/    

    function House(numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }
    let myHouse = new House(4);
    console.log(myHouse.numberOfRooms);
    console.log(myHouse instanceof House); // returns true

/*

    *** Understand Own Properties ***

    In the following example, the Bird Constroctor defines two propeties: name and numLegs:
*/

    function BirdFive(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let duckTwo = new BirdFive("Doald");
    let canaryTwo = new Bird("Tweety");
/*
    name and numLegs are called own properties, because thay are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these propeties. The following code adds all of the own properties of duckTwo to the ownProps:
*/    

    let ownProps = [];
    
    for(let property in duckTwo) {
        if(duckTwo.hasOwnProperty(property)) {
            ownProps.push(property);
            
        }
    }

    console.log(ownProps);
//  The console would display the value ["name", "numLegs"].

// Challeng Six
// Add the own properies of canary to athe array ownProps.

    function BirdSix(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2
}

let canaryThree = new BirdSix("Eagle", "Silver Gray");

let ownProps2 = [];

for(let property in canaryThree) {
    if(canaryThree.hasOwnProperty(property)) {
        ownProps2.push(property)
    }
}

console.log(ownProps2);


/*
    *** Use Prototype Properties to Reduce Duplicate Code ***

    Since numLegs inside each would have the same value for all instance of Bird, 
    you essentially have a duplicated variable numLegs inside each Bird instance.

    this may not be an issue when there are oly two instance, but imagine if there are millions of instance. That would be a lot of duplicated variabels.

    A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Here's how to add numLegs to the bird Prototype:
*/
    Bird.prototype.wings = 2;
    console.log(duck.prototype);
    console.log(canary.numLegs);

/*
    Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that create it. 

    Add a numLegs property to the prototype of Dog.
*/    

    function DogThree(name) {
        this.name = name;
    }

    DogThree.prototype.numLegs = 4;

    let beagel = new DogThree("Bruce");

    console.log(beagel.numLegs);

/*  
    *** Iterate Over All Properties

    You have now seen two kind of properties: own properties and prototype properties. Own properties are define directly on the object instance itself. And prototype properties are define on the prototype.     
*/
    function BirdP(name) {
        this.name = name; // own property
    }

    BirdP.prototype.numLegs = 2; // prototype properties;

    let duckP = new BirdP("Donald");

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps = [];   

    let ownPropsThree = [],
        prototypePropsThree = [];

    for(let properties in duckP) {
        if(duckP.hasOwnProperty(properties)) {
            ownPropsThree.push(properties);
        } else {
            prototypePropsThree.push(properties)
        }
    }    

    console.log(prototypePropsThree);
    console.log(ownPropsThree);



/*
    *** Understand the Constructor Property

    There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:
*/

    let duckFive = new Bird();
    let beagleTwo = new Dog();

    console.log(duckFive.constructor === Bird);
    console.log(beagleTwo.constructor === Dog);
    // Both of these console.log calls would display true in the console.

/*  Note that the constructor property is areference to the constructor function that created the instance.
    The advantage of the consructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used: */    

    function joinBirdFraternity(candidate) {
        if(candidate.constructor === Bird) {
            return true;
        } else {
            return false;
        }
    }
    console.log(joinBirdFraternity(duckFive)); // returns true


/*  
    *** Change the Prototype to a New Object

    Up until now you have been adding properties to the prototype individually: 
*/   

    Bird.prototype.numLegs = 2;
    // This becomes tedious after more than a few properties.

    Bird.prototype.eat = function() {
        console.log("nom nom nom")
    }
    Bird.prototype.describe = function() {
        console.log("My name is " + this.name);
    }

/*  A more effiecient way is to set the prototype to a neew object that already contains the properties.
    This way all the properties are all added at once:    
*/    

    function BirdSeven(name, color) {
        this.name = name;
        this.color = color;
    }

    BirdSeven.prototype = {
        numLegs: 2,
        eat: function() {
            console.log("nom nom nom");
        },
        describe: function() {
            console.log("My name is " + this.name);
        }
    }

    let duckSeven = new BirdSeven("Donald", "Turqous");
    console.log(duckSeven);
    
        
  

    

/*
    *** Remember to Set the Constructor Property when Changing the Propertype ***

    There is one crucial side effenct of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now igves false results:

*/

    console.log(duckSeven.constructor === BirdSeven); // false
    console.log(duckSeven.constructor === Object); // true
    console.log(duckSeven instanceof BirdSeven) // true

// To fix this, whenever a prototype is manually set to a new object, to define the constructor property:

    function BirdEight(name, color) {
        this.name = name;
        this.color = color;
    }
    BirdEight.prototype = {
        constructor: BirdEight,
        wingSpan: "20cm",
        tail: 1,
    }

    let eagle = new BirdEight("Donnalle", "Silver")

    console.log(eagle.constructor === BirdEight);
    console.log(eagle.constructor === Object);
    console.log(eagle instanceof BirdEight)

    
/*
    *** Understand Where an Object's Prototype Comes From ***

    Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, her the BirdNine constructor creates the duckNine object:

*/

    function BirdNine(name) {
        this.name = name;
    }

    let duckNine = new BirdNine("Donald");
    // duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

    console.log(BirdNine.prototype.isPrototypeOf(duckNine)) // true


/*  
    *** Understand the Prototype Chain

    All objects in JavaScript (with afew exceptions) have a prototype. Also, an ovject's prototype itself is an object.
*/    
    function BirdTen(name) {
        this.name = name;
    }

    console.log(typeof BirdTen.prototype); // Object
//  Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

    console.log(Object.prototype.isPrototypeOf(BirdTen.prototype)); // true
// How is this useful? You may recall the hasOwnProperty method from a previous challenge:

    let duckTen = new BirdTen("Donald");
    console.log(duckTen.hasOwnProperty("name"));// true
/*
    The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, 
    which can then be accessed by duck. this is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype.Therefore, any object can use the hasOwnProperty method.  
    
    *** Use Inheritance So You Don't Repeat Yourself ***
    
    There's a principle inn programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. this usually means more work for programmers and more room for errors.

   Notice in the example below that the describe method is shared by Bird and Dog: 
    */ 

   Bird.prototype = {
    constructor: Bird,
    describe: function() {
        console.log("My name is " + this.name);
    }
   };

   Dog.prototype = {
    constructor: Dog, 
    describe: function() {
        console.log("My name is " + this.name);
    }
   };
/*  The describe method is repeated in two places. The code can be edited to follow the DRY princeple by creating a supertype (or parent) called Animal */   

   function AnimalTwo() { };
   

   AnimalTwo.prototype = {
    constructor: AnimalTwo,
    name: "Tom",
    describe: function() {
        console.log("My name is " + this.name);
    }
   };
// Since Animal includes the describe method, you can remove it from Bird and Dog:

 


/*  Inherit Behaviors from a Supertype

    In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:     */

    

    AnimalTwo.prototype.eat = function() {
        console.log("nom nom nom");
    };

/*  This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog without defining them again. It uses a technique called inheritance. This challeng covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator: 

    let animal = new Animal();
    
    There are some disadvantages when using this syntax for ingeritance, which are too complex for the scope of this challeng.  instead, here's an alternative approach without those disadvantages:
    
    let animal = Object.create(Animal.prototype);

    Object.create(obj) creates a new abject, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. by setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other istance of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.
    */

    let animal = Object.create(AnimalTwo.prototype);

/*  Set the Child's Prototype to an Instance of the Parent

    In the previous challenge you saw the first step for ingeriting behavior from the supertype (or parent) Animal: making a new instance of AnimalTwo.
    
    This challeng covers the next step: set the prototype of the subtype (or child) in this case, Bird-to be an instance of Animal.
    
    Bird.prototype = Object.create(Animal.prototype)*/
    function BirdEleven() { };
   function DogEleven() { };

    BirdEleven.prototype = Object.create(AnimalTwo.prototype);
    DogEleven.prototype = Object.create(AnimalTwo.prototype);

/*  Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all key "ingredients" from Animal. */

    let duckEleven = new BirdEleven();
    console.log(duckEleven.describe());
    console.log(duckEleven.eat());

/*  Reset an Ingerited Constructor Property

    When an object ingerits its prototype from another object, it also inherits the supertype's constructor property.
    
    Here's an example: 
    
    function Bird() { }  
    Bird.prototype = Object.prototype(Animal.prototype)*/    

    function Animal2() { };

    Animal2.prototype = {
        constructor: Animal2,
        type: "Preditor",
        speed: "45 m/s", 
        numLegs: 4,
        color: "Grey"
    }

    function Cat() { };

    Cat.prototype = Object.create(Animal2.prototype);
    let cheater = new Cat();
    console.log(cheater.type);

/* But Cat and all instances of Cat should show that they were constructed by Cat and not Animal2.
   To do so, you can manually set the constructor propety of Cat to Bird object:  */
   
   Cat.prototype.constructor = Cat;
   console.log(cheater.color);

/*  *** Add Methods After Inheritance ***

    A constructor function that inherits its prototype object from a supertype constructor functionn can still have its own methods in addition to inherited methods.

    For example, Bird is a constructor that inherits its prototype from Animal: 
 */   
    function Animal3() { };

    Animal3.prototype.eat = function() {
        return "nom nom nom";
    };

    function Bird3() { };

    Bird3.prototype = Object.create(Animal3.prototype);
    Bird3.prototype.constructor = Bird3;

/*  In addition to what is inherited from Animal, you want to add behavior that is unique to Bird3 objects. Here, Bird3 will get a fly() function. Functions are added to Bird3's prototype the same way as any constructor function:  */    

    Bird3.prototype.fly = function() {
        return "Flying wooosh"
    };

// Now instance of Bird will have both eat() and fly() methods: 

// Now instances of Bird will have both eat() and fly methods: 

    let duck3 = new Bird3();
    console.log(duck3.eat()); // returns nom nom nom
    console.log(duck3.fly()); // return Flying Wooosh

/*  *** Override Inherited Methods ***

    In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referncing its prototype object:

    ChildObject.prototype = Object.create(Parent.prototype);
    Then the childObject recieved its own methods by chaining them onto its prototype:

    ChildObject.prototype.methodName = function() {...};
    It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same methode name as the one to override. Here's an example of Bird owverriding the eat() method inherited from Animal3:    
*/     
    function Animal4() { };
    Animal4.prototype.eat = function() {
        return 'nom nom nom';
    }

    function Bird4() { };
    Bird4.prototype = Object.create(Animal4.prototype);
    Bird4.prototype.constructor = Bird4;

    Bird4.prototype.eat = function() {
        return "peck peck peck";
    }

    let duck4 = new Bird4();
    console.log(duck4.eat());

/*  If you have an instance let duck4 = new Bird4(); and you call duck.eat(), this is how 
    JavaScript looks for the method on the prototype chain of duck4 
    
    duck4 => Is eat() defined here? No.
    Bird4 => Is eat() defined here? => Yes. Execute it and stop searching.
    Animal4 => eat() is also defined, but JavaScript stop searching before reaching this level.
    Object => JavaScript stopped searching before reaching this level.

    Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
       */    
      
    function Bird5() { };
    Bird5.prototype.fly = function() {
        return "I am flying wooosh!"
    }

    function Penguin() { };
    Penguin.prototype = Object.create(Bird5.prototype);
    Penguin.prototype.constructor = Penguin;
    Penguin.prototype.fly = function() {
        return "Alas, this is flighless bird!"
    }

    let penguin = new Penguin();
    console.log(penguin.fly());

/* 
    **** Use a Mixin to Add Common Behavior Between Unrelated Objects ***
    
    As you have seen, behavior is shared through inheritance. However, there are cases when inheritance 
    is not the best solution. Inheritance does not work well for unrelated objects like bird and 
    Airplane. they can both fly, but a bird is not a type of Airplane and vice versa.

    For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collecrion 
    of functions.
    */    

    let flyMixin = (obj) => {
        obj.fly = function() {
            return "Flying, wooosh!"
        }
    };
    // The flyMixin takes any object and gives it the fly method.

    let birdObj = {
        name: "Donald",
        numLegs: 2
    },
    plane = {
        model: "777",
        numPassengers: 524
    };

    flyMixin(birdObj);
    flyMixin(plane);
//  Here birdObj and plane are passed into flyMixin, which then assigns the fly function to each object. 
//  Now bird and plane can both fly:    

    console.log(birdObj.fly()); // "Flying, wooosh!"
    console.log(plane.fly()); // "Flying, wooosh!"


/*  Use Closure to Protect Properties Within an Object from Being Modified Externally

    In the previous challenge, bird had a public propety name. It is considered public because it can be accessed and changed outside of bird's definition.
    
    bird.name = "Duffy";
    therefore, any part of your code can easily change the name of bird to any vlaue. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. that could cause a lot of issues.
    
    The simplest way to make this public property private is by crating a variable within the constructor function. This changes the scope of that variable to be within the constructor functionversus available globally. this way, the variable can only be accessed and changed by methods also within the constructor function. */

    function BirdClosure() {
        let hatchedEgg = 10;
        
        this.getHatchedEggCount = function() {
            return hatchedEgg;
        }
    }

    let ducky = new BirdClosure();
    console.log(ducky.getHatchedEggCount());
/*  
    Here getHatchedEggCount() is a privileged method, because it has access to the private 
    variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as 
    getHatchedEggCount. 

    In JavaScript, a function always has access to the context in which it was created. 
    This is called closure.

    Change how weight is declared in the BirdsWeihgt function so it is a  private variable. Then, create a method getWeight that returns the value of weight 15
 */

    function BirdsWeihgt() {
        let weight = 15;
        this.getWeight = function() {
            return weight;
        }
    }

    let birdsWeight = new BirdsWeihgt();
    console.log(birdsWeight.getWeight());
/*  
    Understanding the Immediately Invoked FunctionExpression (IIFE)

    A common pattern in JavaScript is to execute a function as soon as it is declared: */  
    
    (function() {
        console.log("Chirp Chirp Chirp");
    })();
/*  This is a anonymous function expression that executes right away, and outputs 
    "Chirp Chirp Chirp" immediately.
    
    Note that the function has no name and is not stored in a variable. The two parenthenses () 
    at the end of immediately executed or invoked. This pattern is known as an immdeiately invoked function expression or IIFE.
    
    Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE)
    
    function makeNest() {
        return "A cozy nest is ready."
    }
    */    
   (() => {console.log("A cozy nest is ready")})();

/*
    Use an IIFE to Create a Module

    An immediately invoked function expression (IIFE) is often used to group related functionlity ito a single object or module. For example, an earlier challenge defined tow mixins: 
*/
    function glidingMixings(obj) {
        obj.glide = function() {
            console.log("Gliding on the water");
        }
    };

    function flyMixings(obj) {
        obj.fly = function() {
            console.log("Flying, Woosh!");
        }
    };

    // We can group these mixins into a module as follows: 

    let motionModule = (function() {
        return {
            glideMixins(obj) {
                obj.glide = () => console.log("Gliding on the water!");
            },
            flyMixin(obj) {
                obj.fly = () => console.log("Flying, Woosh!");
            }
        }
    })()

/*  Note that you have an immediately invoked function experssion (IIFE) that returns an object 
    motionModule. This returned object contains all of the mixin behaviors as properties of the object.
    The advantage of the module patterns is that all of the motion behaviors canbe packaged into a single object that can then be used by other parts of your code. Here is an example using it: */    

    let boat = {
        name: "glider"
    },

    plane777 = {
        name: "Boen"
    }

    motionModule.glideMixins(boat);
    motionModule.flyMixin(plane777);
    boat.glide()
    plane777.fly();