1. Functional Programming:
Focuses on pure functions:
Take inputs and produce outputs based solely on those inputs (no external dependencies).
Avoid side effects (modifying external data or performing actions outside the function).
Treat data immutably (create new data structures instead of modifying existing ones).
Benefits:
Predictable behavior: Easy to understand how functions work based on inputs.
Easier testing: Can isolate functions and test them independently.
Fewer side effects: Less prone to bugs caused by unexpected data changes.

- Functional Programming way of writing code means  we are not changing the object which i present at extenal code we are creating a new object inside the function. 

**************1*************
function updateUserData(userObject, newName) {
  // Use the spread syntax (...) to create a copy of the object
  const updatedUser = { ...userObject, name: newName };
  // Return the new object with the updated name
  return updatedUser;
}

const userData = { age: 30 };
const updatedUserData = updateUserData(userData, "John");

console.log(userData); // Output: { age: 30 } (original object remains unchanged)
console.log(updatedUserData); // Output: { name: "John", age: 30 } (new object with the update)



***********2**********

function updateUserData(userObject, newName) {
  return { ...userObject, name: newName }; // Create a new object with the update
}

const userData = { name: "kishan", age: 30 };
const updatedUserData = updateUserData(userData, "John"); // Function returns a new object

console.log(userData); // Output: { name: "kishan", age: 30 } (original object remains unchanged)
console.log(updatedUserData); // Output: { name: "John", age: 30 } (new object with the update)



2. Non funtional we are directly changing the object 

// Non-Functional Example (Modifying Internal Object State)
function updateUserData(userObject) {  // Function takes an object as a parameter
  userObject.name = "John";          // Modifying the `name` property of the object (side effect)
}

const userData = { name: "Kishan", age: 30 };  // Original user data object
updateUserData(userData);                        // Calling the function with the object
console.log(userData);                         // Printing the modified object

// Expected Output: { name: "John", age: 30 }

