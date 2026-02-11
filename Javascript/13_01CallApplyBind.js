// Definition for call()

// call() is a JavaScript method used to immediately invoke a function while explicitly setting the this context to the object passed as the first argument, followed by the function’s arguments individually.

function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

const person = { name: "Kishan" };

introduce.call(person, "Hyderabad", "India"); // Hi, I'm Kishan from Hyderabad, India

// Definition for apply()

// apply() is similar to call() — it invokes a function immediately and sets the this context, but it accepts the function arguments as an array instead of passing them individually.



const person2 = { name: "siri" };

introduce.apply(person, ["Eluru", "India"]);// // Hi, I'm siri from Eluru, India


// Definition for bind()

// bind() returns a new function with the this context permanently set to the object provided. Unlike call() and apply(), it does not execute the function immediately — it creates a new bound function that can be invoked later.

const person3 = { name: "sai" };

const greetBind = introduce.bind(person3, "ponangi", "india")
greetBind()

// 👉 Here, call/apply/bind let you control this and reuse the same function for multiple objects.

//******************************************************


// 2️⃣ Constructor Inheritance (Constructor Chaining)

// Before ES6 class/extends, developers used call/apply to make one constructor “borrow” another.

function Animal(type) {
  this.type = type;
}

function Dog(name) {
  // Borrow Animal constructor → inheritance
  Animal.call(this, "Dog");  
  this.name = name;
}

const d = new Dog("Tommy");
console.log(d.type); // Dog
console.log(d.name); // Tommy


// 👉 Animal.call(this, "Dog") ensures that when Dog runs, it also runs Animal’s constructor on the same this object.

// ✅ Summary

// Control this + reuse functions

// call → call immediately with arguments.

// apply → call immediately with arguments as array.

// bind → returns new function with fixed this.

// Inheritance (constructor chaining)

// Use call/apply inside child constructor to run parent constructor on the child’s this.