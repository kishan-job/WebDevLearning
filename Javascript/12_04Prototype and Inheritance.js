

// .prototype is used to add properties and methods to constructor functions, and those become available to all objects created from that constructor.prototype is used to add properties and methods to constructor functions, and those become available to all objects created from that constructor.

let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

myHeros.hitesh()

// heyArray -> Total elements are 4

Array.prototype.heyArray = function(){
    console.log(`Total elements are ${this.length}`);
}

//myHeros.heyArray()

//dcHeros.heyArray()

//****************************inheritance*******************

// Inheritance in programming is when one entity (like a class or constructor function) can reuse the properties and methods of another.


// ***********different types of inheritances**************
// Object-based inheritance → object-to-object (Object.create, __proto__)

// Constructor-based inheritance → function constructors + prototype chain

// Class-based inheritance → class + extends (modern)

// Prototype-based inheritance → underlying mechanism (everything in JS uses this)

// Mixin-based inheritance → multiple inheritance simulation


//Object based inheritance 

const User = {
    name: "top name",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideos: true,
     __proto__: User
}


// const Teacher = Object.create(User);
Teacher.__proto__ = User
Teacher.prototype = User
Object.setPrototypeOf(Teacher, User)

// “Set the prototype of Teacher to be User.”


// recommended way is Object.create

// ✅ Simpler way:
const Teacher = Object.create(User);
Teacher.makeVideos = true;
 
// ✅ Harder way: Object.create with Property Descriptor
const Teacher = Object.create(User, {
  makeVideos: {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
  }
});





// ****************** Constructor-based inheritance (ES5)

// call → inherit properties
// Object.create → inherit prototype methods


// =======================
// 1. PARENT CONSTRUCTOR
// =======================
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  // ❌ Instance methods (copied per object)
  this.introduce = function() {
    console.log(`Hi, I'm ${this.name} from ${this.city}`);
  };

  this.showAge = function() {
    console.log(`I'm ${this.age} years old`);
  };
}

// ✅ Prototype method (shared)
Person.prototype.sayHello = function() {
  console.log("Hello from prototype!");
};



// =======================
// 2. CHILD CONSTRUCTOR
// =======================
function Student(name, age, city, grade) {

  // ✔ Copies properties + constructor methods
  Person.call(this, name, age, city);

  this.grade = grade;
}


// =======================
// ❌ CASE 1: WITHOUT PROTOTYPE CHAINING
// =======================

// const s1 = new Student("Kishan", 23, "Hyderabad", "A");

// s1.introduce(); // ✅ works (from constructor)
// s1.showAge();   // ✅ works (from constructor)

// ❌ This will FAIL:
// s1.sayHello();  
// Error: s1.sayHello is not a function

// 👉 WHY?
// Because we DID NOT link:
// Student.prototype → Person.prototype
// So no access to sayHello()



// =======================
// ✅ CASE 2: WITH PROTOTYPE CHAINING
// =======================

// Link Student → Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


// Child method
Student.prototype.study = function() {
  console.log(`${this.name} is studying`);
};


// =======================
// 3. USAGE
// =======================
const s2 = new Student("Kishan", 23, "Hyderabad", "A");

s2.introduce(); // ✅ works
s2.showAge();   // ✅ works
s2.sayHello();  // ✅ NOW works (from prototype)
s2.study();     // ✅ child method
