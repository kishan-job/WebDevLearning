const greeting = "Hi!";
// greeting = "Bonjour!"; // TypeError: Assignment to constant variable


// variable declered with the primitive data types we are not able reassign the value to that variable.

//  we can still modify the properties of an object or the elements of an array, even if the variable is declared with const. This is because you're modifying the data within the same object or array, not changing the reference itself.

const person = { name: "Alice", age: 30 };

person.age = "31";

console.log(person);