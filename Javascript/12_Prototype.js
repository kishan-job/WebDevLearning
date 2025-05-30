// In JavaScript, property inheritance allows an object to inherit properties and methods from another object

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

//inheritance

const User = {
    name: "top name",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}


// Teacher.__proto__ = User
// Teacher.prototype = User
Object.setPrototypeOf(Teacher, User)
// “Set the prototype of Teacher to be User.”
Object.setPrototypeOf(TeachingSupport, Teacher)



//challenge

String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`);
}

console.log("Hitesh".length);
"Hitesh  ".truelength();

//truelength()


// Constructor for TeachingSupport
function TeachingSupport() {
    this.isAvailable = false;
}

// Constructor for TSAssistant
function TSAssistant(makeAssignment, fullTime) {
    // Call the TeachingSupport constructor to initialize isAvailable
    TeachingSupport.call(this);  // Call the parent constructor
    this.makeAssignment = makeAssignment;
    this.fullTime = fullTime;
}

// Set the prototype of TSAssistant to be an instance of TeachingSupport
Object.setPrototypeOf(TSAssistant.prototype, TeachingSupport.prototype);

// Restore the constructor reference
TSAssistant.prototype.constructor = TSAssistant;

// Example of creating an instance of TSAssistant
const assistant1 = new TSAssistant("JS Assignment", true);

// Accessing properties
console.log(assistant1.makeAssignment);  // "JS Assignment"
console.log(assistant1.fullTime);        // true
console.log(assistant1.isAvailable);     // false (inherited from TeachingSupport)
