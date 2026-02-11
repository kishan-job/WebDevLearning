

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




// ******************Constructor-based inheritance: we are going to see object.create

// call / apply → to inherit properties.

// Object.create → to inherit methods.

// bind → rarely used.


function Person(name, age, city) {
  // properties
  this.name = name;
  this.age = age;
  this.city = city;

  // methods inside constructor (not efficient but allowed)
  this.introduce = function() {
    console.log(`Hi, I'm ${this.name} from ${this.city}`);
  };

  this.showAge = function() {
    console.log(`I'm ${this.age} years old`);
  };
}

// method via prototype
Person.prototype.sayHello = function() {
  console.log("Hello from prototype!");
};



function Student(name, age, city, grade) {
  Person.call(this, name, age, city); // inherit properties + constructor methods
  this.grade = grade;
}
// Inherit methods (prototype chaining)
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Child method
Student.prototype.study = function() {
  console.log(`${this.name} is studying`);
};


const s1 = new Student("Kishan", 23, "Hyderabad", "A");

s1.introduce(); // From constructor
s1.showAge();   // From constructor
s1.sayHello();  // From prototype
s1.study();     // Child method


