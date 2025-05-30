1. Structure: Function constructors define object creation logic within the function itself. Classes separate property initialization (constructor) and functionalities (methods).
   Inheritance: Classes enable inheritance, allowing new classes to inherit properties and methods from existing ones. 
   
   Syntax: When importing, you use new before the function name to create objects with function constructors, whereas class imports don't require new.
   In JavaScript, inheritance in function constructors is achieved through prototypes, not directly through keywords like extends found in class-based languages

---

class Car {
constructor(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
this.passengers = [];
}

getDetails() {
return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
}
}

// Creating an instance using the new keyword
const myCar = new Car("Toyota", "Camry", 2023);
console.log(myCar.getDetails()); // Output: Make: Toyota, Model: Camry, Year: 2023

class Truck extends Car {
constructor(make, model, year, bedLength) {
super(make, model, year); // Call parent constructor
this.bedLength = bedLength;
}

haulCargo() {
console.log("Hauling cargo in the truck bed!");
}
}

// Usage
const car1 = new Car("Toyota", "Camry", 2023);
console.log(car1.getDetails()); // Output: Make: Toyota, Model: Camry, Year: 2023

const truck1 = new Truck("Ford", "F-150", 2022, 8);
console.log(truck1.getDetails()); // Output: Make: Ford, Model: F-150, Year: 2022 (inherits from Car)
console.log(truck1.bedLength); // Output: 8
truck1.haulCargo(); // Output: Hauling cargo in the truck bed! (Truck's method)

---




While both methods create objects, the class constructor approach offers a more reliable and predictable execution order. By separating property initialization and method definitions, class constructors guarantee methods have access to valid data within the newly created object.
