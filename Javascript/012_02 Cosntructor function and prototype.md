# what is constructor fucniton
Constructor Functions in JavaScript

A constructor function is a special type of function used to create objects in JavaScript. It acts as a blueprint for defining the properties and methods that an object will have. When you invoke a constructor function using the new keyword, it creates a new object instance based on that blueprint.
 ##  fucnition is block of code which we can use mulitple times when ever we need.
# To create an object instance in JavaScript using a constructor function, you follow these steps:

Invoke the constructor function: Use the new keyword followed by the name of the constructor function.
Pass arguments: If the constructor function takes arguments, provide them within parentheses when invoking it.
Assign to a variable: Assign the newly created object instance to a variable for later use.
Example:

JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);

# We can add new properties or methods to built-in JavaScript objects such as Array, Object, and String by modifying their prototypes. This practice is sometimes called "monkey patching."

Adding Properties or Methods to Built-in Objects
Here’s how you can add new methods or properties to these built-in objects:

1. Adding a Method to Array
You can add a new method to the Array prototype like this:

javascript
Copy code
// Adding a method to the Array prototype
Array.prototype.last = function() {
    return this[this.length - 1];  // Returns the last element of the array
};

// Example usage
const myArray = [1, 2, 3, 4];
console.log(myArray.last());  // Output: 4
2. Adding a Method to Object
You can add a method to the Object prototype as follows:

javascript
Copy code
// Adding a method to the Object prototype
Object.prototype.toJSON = function() {
    return JSON.stringify(this);  // Converts the object to a JSON string
};

// Example usage
const myObject = { name: "John", age: 30 };
console.log(myObject.toJSON());  // Output: '{"name":"John","age":30}'
3. Adding a Method to String
You can also add a method to the String prototype:

javascript
Copy code
// Adding a method to the String prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('');  // Reverses the string
};

// Example usage
const myString = "hello";
console.log(myString.reverse());  // Output: "olleh"

Important Considerations
Global Impact: Modifying built-in prototypes affects all instances of that object type across your code and any third-party libraries. This can lead to unexpected behavior, especially if those libraries expect the standard behavior of the built-in objects.

Collision Risk: If another library or piece of code adds a method with the same name, it can lead to conflicts or overwriting of the method.

Best Practices: Generally, it's advisable to avoid modifying built-in prototypes unless you have a compelling reason to do so. Instead, you can create utility functions or extend functionality in a more isolated manner (like using classes or utility objects).

Performance: Extending built-in objects may have performance implications, especially in performance-critical applications. JavaScript engines can optimize built-in types differently than modified prototypes.


---





# we can iherite the parent properties and method to child constructor 

// Parent constructor function
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

// Adding a method to the Animal prototype
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

// Child constructor function
function Dog(name, breed) {
    // Call the parent constructor to initialize inherited properties
    Animal.call(this, name, 'Dog'); // Calling Animal constructor with the name and species as 'Dog'
    this.breed = breed; // Additional property specific to Dog
}

// Setting the prototype of Dog to Animal's prototype using Object.setPrototypeOf
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Adding a method specific to Dog
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

// Creating an instance of Dog
const myDog = new Dog("Rex", "Golden Retriever");

// Accessing properties and methods
console.log(myDog.name);      // Output: Rex
console.log(myDog.species);   // Output: Dog
console.log(myDog.breed);     // Output: Golden Retriever
myDog.speak();                // Output: Rex barks.


------------------------------------------------------------------------------------------------------------------

Above explanation from chat GPT### with restoring 

Understanding Constructor Inheritance in JavaScript
Step 1: Define the Parent Constructor (Animal)
The Animal constructor function initializes the name and species properties.

javascript
Copy
Edit
function Animal(name, species) {
    this.name = name;
    this.species = species;
}
Step 2: Add a Method to the Animal Prototype
The speak method is added to the prototype of Animal, so all instances of Animal can use it.

javascript
Copy
Edit
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};
Step 3: Define the Child Constructor (Dog)
The Dog constructor function initializes name and breed, but it also needs to inherit properties from Animal.

javascript
Copy
Edit
function Dog(name, breed) {
    // Call the Animal constructor to inherit name and set species as 'Dog'
    Animal.call(this, name, 'Dog'); 
    this.breed = breed; // Additional property specific to Dog
}
🔹 Why Animal.call(this, name, 'Dog')?

Animal.call(this, name, 'Dog') invokes the Animal constructor in the context of Dog.
This ensures Dog instances get name from Animal and a fixed species "Dog".
Step 4: Inherit Methods from Animal
By default, Dog.prototype is an empty object. We need to link it to Animal.prototype so that Dog instances can access Animal methods.

javascript
Copy
Edit
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
🔹 Why Object.setPrototypeOf(Dog.prototype, Animal.prototype)?

This sets Dog.prototype to inherit from Animal.prototype.
Now, Dog instances can access Animal methods (like speak).
Step 5: Restore the Constructor Reference
After modifying Dog.prototype, its constructor reference gets overwritten. We restore it:

javascript
Copy
Edit
Dog.prototype.constructor = Dog;
Step 6: Add a Child-Specific Method (speak)
We override the speak method in Dog to give it a specific behavior.

javascript
Copy
Edit
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};
🔹 Why Override speak?

The Animal class has a generic speak method.
Dog instances should have a custom speak method that outputs "barks" instead of "makes a noise".
Step 7: Create an Instance of Dog
javascript
Copy
Edit
const myDog = new Dog("Rex", "Golden Retriever");
Step 8: Access Properties and Methods
javascript
Copy
Edit
console.log(myDog.name);      // Output: Rex
console.log(myDog.species);   // Output: Dog
console.log(myDog.breed);     // Output: Golden Retriever
myDog.speak();                // Output: Rex barks.
Final Code:
javascript
Copy
Edit
// Parent constructor function
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

// Adding a method to the Animal prototype
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

// Child constructor function
function Dog(name, breed) {
    // Call the parent constructor to initialize inherited properties
    Animal.call(this, name, 'Dog'); 
    this.breed = breed; // Additional property specific to Dog
}

// Setting the prototype of Dog to Animal's prototype
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Restore the constructor reference
Dog.prototype.constructor = Dog;

// Adding a method specific to Dog
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

// Creating an instance of Dog
const myDog = new Dog("Rex", "Golden Retriever");

// Accessing properties and methods
console.log(myDog.name);      // Output: Rex
console.log(myDog.species);   // Output: Dog
console.log(myDog.breed);     // Output: Golden Retriever
myDog.speak();                // Output: Rex barks.
Summary
Animal (Parent Constructor)

Initializes name and species.
Has a method speak().
Dog (Child Constructor)

Calls Animal.call(this, name, 'Dog') to inherit properties.
Has its own property breed.
Uses Object.setPrototypeOf(Dog.prototype, Animal.prototype) for prototype inheritance.
Overrides speak().
✅ Now, Dog inherits from Animal correctly while also adding its own properties and methods.

Would you like an example using ES6 class syntax? 🚀