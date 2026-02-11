// For all regular funtin call this belongs to global scope
// sayHello() regular function call

// For not regular funtion call like myObj.setCourse("reactjs"); this belongs to current scope



// let myObj = {
//   firstName: "kishan",
//   lastName: "Kancahrla",
//   coursesEnrolled: [],
//   setCourse: function(course) { // Changed to a regular function
//     this.coursesEnrolled.push(course);
//     function sayHello() {
//       console.log("Hello ********");
//       console.log(this);
      
      
//     }
//     sayHello() //regular function call
//   },

// };

// myObj.setCourse("reactjs"); //irregular funciton call
// console.log(myObj.coursesEnrolled); // Output: ["reactjs"]

// let myObj = {
//   firstName: "kishan",
//   lastName: "Kancahrla",
//   coursesEnrolled: [],
//   setCourse: (course) => {
//     myObj.coursesEnrolled.push(course);
//   },
// };

// myObj.setCourse("reactjs");
// console.log(myObj.coursesEnrolled);

// let myObj = {
//   firstName: "kishan",
//   lastName: "Kancharla",
//   coursesEnrolled: [],

//   setCourse(course) {
//     this.coursesEnrolled.push(course); // Now 'this' correctly refers to myObj
//   }
// };

// myObj.setCourse("reactjs");
// myObj.setCourse("Node.js");

// console.log(myObj.coursesEnrolled); // Output: ["reactjs", "Node.js"]

// 1. Object methods:

// When a function is defined as a method of an object, this refers to that object within the function.
// JavaScript
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: "Hello, my name is Alice"

// Use code with caution.

// 2. Constructor functions:

// In constructor functions, this refers to the newly created object instance.
// JavaScript
function Person(name) {
  this.name = name;
}

const person1 = new Person("Bob");
console.log(person1.name); // Output: "Bob"

// Context of this: Within getCourseCount, this refers to the user object because the function is invoked as user.getCourseCount(). However, the variable name declared with var within getCourseCount is not a property of the user object itself.
// Accessing this.name: When you try to access this.name at line 7, you're looking for a property named name on the user object. Since there's no such property on the object itself, this.name is undefined.
var user = {
  firstName: "Hitesh",
  courseCount: 4,
  getCourseCount: function () {
    var name = "kishan";
    console.log("LINE 7", this.name); // This looks for  property "name"  but there is no property so it is undefined. this keyword won't look for varibles it only looks for object property
    console.log("LINE 7", this); // This line logs the object itself ({ firstName: "Hitesh", courseCount: 4, getCourseCount: function... })
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this); // This line logs the window object (because sayHello is a nested function, it inherits the this from the outer function)
    }
    sayHello();
  },
};

user.getCourseCount();

// function sayHello(){
//     console.log("Hello");
//     console.log("LINE 10", this.name); // This line logs the window object (because sayHello is a nested function, it inherits the this from the outer function)
//   }

//   sayHello()

// In Node.js, when a function is called directly at the global scope (without being a method of an object), this inside the function typically refers to the global object.
// However, the global object in Node.js is typically an empty object by default. It doesn't have properties like name unless explicitly added.
