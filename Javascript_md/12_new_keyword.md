
when we use new keyword before the constructor fucntion call then new keyword makes this keyword belogs to corrent object instead of pointing this to glaobal. Person("Alice", 30) is regular function call when we use new Person("Alice", 30) then it is not a regular function call then this keyword poinging to current execution

In JavaScript, the new keyword is used to create an instance of a user-defined object or to call a constructor function. When you use the new keyword followed by a function call, it creates a new object and binds this to that newly created object within the function.

Here's how the new keyword is typically used:

Creating an instance of a user-defined object: You can define your own constructor function and use the new keyword to create instances of objects based on that constructor.

javascript
Copy code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);
In this example, new Person("Alice", 30) creates a new Person object with name set to "Alice" and age set to 30.

Calling built-in constructors: JavaScript has built-in constructor functions for creating objects like Object, Array, Date, etc. You can use the new keyword with these constructors as well.

javascript
Copy code
var obj = new Object();
var arr = new Array(1, 2, 3);
var today = new Date();
In these examples, new Object(), new Array(1, 2, 3), and new Date() create new instances of Object, Array, and Date, respectively.

When you use the new keyword, it does a few things behind the scenes:

It creates a new object.
It sets the prototype of the newly created object to the prototype of the constructor function.
It executes the constructor function with this bound to the newly created object.
It returns the newly created object unless the constructor function explicitly returns another object.