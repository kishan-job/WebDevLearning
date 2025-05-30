but i heard Object is object but prototype is property of object beacuse of the we are using period befor the prototype 
Show drafts




You're right, there can be some confusion around how Object and prototype relate in JavaScript. Here's a breakdown to clarify:

1. Object Constructors vs. Object Instances:

There are two ways to think about Object in JavaScript:
Object constructor: This is a built-in function you can use with new to create object instances (like const obj = new Object()).

2. .prototype 

The prototype property is an object that is associated with every constructor function in JavaScript.
It serves as a blueprint for creating new objects from the constructor function.
When a new object is created using a constructor, it inherits properties and methods from the constructor's prototype object.
In JavaScript, .prototype is neither a method nor a property in the strictest sense. It's a special property that exists on constructor functions. It's used for inheritance and refers to an object that serves as a blueprint for objects created using that constructor.

3. Array.prototype

This is a special object associated with the Array constructor. It acts as a blueprint for array objects, defining properties and methods that all arrays inherit.
Built-in array methods like forEach, map, filter, etc., are defined on

Every array inherits properties and methods from its constructor's prototype (Array.prototype).

4. forEach and other method present in Array.prototype obeject
 console.log(Array.prototype)