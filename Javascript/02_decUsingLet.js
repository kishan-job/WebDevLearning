// **Demonstrating Block-Level Scoping and Temporal Dead Zone with `let`:**

// **Initial Variable Declaration and Assignment:**
let initialUserName = "one"; // Global variable using `let`
console.log("Initial user name:", initialUserName); // Output: "one"

// **Reassigning a `let` Variable:**
initialUserName = "two"; // Allowed: Reassigning the value within the same scope
console.log("Updated user name:", initialUserName); // Output: "two"

// **Preventing Redeclaration of `let` Variables:**
// let initialUserName = "three"; // Error: Redeclaration within the same scope is not permitted

// **Block-Scoped Example with a Function:**
function demonstrateBlockScope() {
  if (true) {
    let messageWithinBlock = "Hello from the block!"; // Variable accessible only within the block
    console.log(messageWithinBlock); // Output: "Hello from the block!"
  }
  // console.log(messageWithinBlock); // Error: Variable not accessible outside the block
}

demonstrateBlockScope();

// **Temporal Dead Zone (TDZ):**
// The "temporal dead zone" (TDZ) is a concept in JavaScript that refers to the state where a variable exists but cannot be accessed until after its declaration. This applies specifically to variables declared with let and const.

// The Temporal Dead Zone (TDZ) refers to the state where variables are in a dead zone from the start of their block until they are decleared. where we get reference error.
// After decleartion we get undefined where varible is not in TDZ.but in Chat gpt the defineition is shown as TDZ until varible initialization which is not correct 


// {
// // TDZ for the 'age' variable starts at the begining of the scope
// // TDZ continues...
// line 1 console.log(age); // Throws a ReferenceError. TDZ continues here.
// line 2 let age; // Variable declaration. TDZ exits
// line 3  console.log(age); // undefined TDZ not present here we get undefined
// line 4 age = 25; 
// line 5  console.log(age); // Now accessible. TDZ doesn't apply here.

// }


// ****const****

// Variables declared with the const keyword must be initialized when declared; it's not possible to declare them first and initialize them later.

// In const, we cannot reassign values for primitive data types such as numbers, strings, booleans, and so on. However, for complex data types like objects, we can modify the property values. This is because a variable declared with const and holding a complex data type stores a reference to the object (memory address), not the entire object itself. When we update a property value, we are modifying the value stored in memory, but not the object itself.

// In JavaScript, primitive data types such as numbers, strings, booleans, null, and undefined are immutable. Once a variable is assigned a value, that value cannot be changed directly. When you reassign a new value to a variable that previously held a primitive value, you're essentially creating a new value in memory and updating the variable to reference that new value. The previous value remains in memory until it's no longer referenced by any variable, at which point it may be garbage-collected to free up memory for other purposes.
