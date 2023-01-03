/*
    Classes

    Classes are a template for creating objects. They encapsulate data with code to work on that data.

    Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
    
    Defining Classes

    Classes are in fact "spacial functions", and jusst as you can define function expressions and function declaration, the class sytax has two components:  class expression and class declarations.
    

    Class declarations 

    One way to define a class is using a class declaration. To declare a class, you use the class keyword with name of the class ("REctangle" here).
*/
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

/*
    Hoisting

    An important difference between function declaration and class declaration is that while functions can be called in code that appears before they are defined, classes mus be defined before they can be constructed. Code like the following will throw ReferenceError:

    const p = new Rectangle(); // ReferenceError

    class Rectangle {}
    This occurs because while the class is hoisted its values are not initialized.

    Class expressions
    A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named Class expression is local to the class's body. However, it can be accessed via the name property. 
*/    

    // unnamed 
    let UnnameRectangle = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    console.log(UnnameRectangle.name);// output UnnameRectangle

    // named

    Rectangle2 = class NamedRectangle2 {
        constructor(h, w) {
            this.h = h;
            this.w = w;
        }
    }
    console.log(Rectangle2.name);
  
/*
    Class body and method definitions 

    The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or cunstructor.

    Strict mode 
    The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax fo increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved fo future versions of ECMAScript.

    Constructor
    The constructor method is special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method. 

    A constructor can use the super keyword to call the constructor of the super class.

    Static initialization blocks
    Class static initialization clocks allow flexible initialization of class static properties including the evaluation of statements during initialization, and granting access to private scope.

    Multiple static blocks can be declared, and these canbe interleaveld with the declaration of static properties and methods (all static items are evaluated in declaration order)
*/

// Prototype methods

    class Rectangle3 {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        // Getter
        get area() {
            return this.calcArea();
        }
        // Method
        calcArea() {
            return this.height * this.width;
        }
    }

    const square = new Rectangle3(10, 10);
    console.log(square.calcArea());


// Generator Methods

    class Polygon {
        constructor(...sides) {
            this.sides = sides;
        }
        // Method
        *getSides() {
            for (const side of this.sides) {
                yield side;
            }
        }
    }

    const pentagon = new Polygon(1,2,3 ,4, 5);
    console.log([...pentagon.getSides()]); // [1, 2, 3, 4, 5]

/*  
    Static methods and properties
    The static keyword defines a static method or property for class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance.static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to replicate a cross instances.
*/