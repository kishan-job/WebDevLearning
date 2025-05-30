1. Funtional programming means if we are not changing the state of the variable or parameter which we are using in the funtion is fucntional.

// Declare initial score using a more descriptive name (avoid global variables)
const initialScore = 5;

function addBonus(score = 0) { // Function with default parameter for score
  // Add bonus (functional approach: create a new value)
  const newScore = score + 45;
  return newScore;
}

// Call the function with the initial score as argument
const finalScore = addBonus(initialScore);

console.log("Initial Score:", initialScore); // Output: Initial Score: 5 (remains unchanged)
console.log("Score with Bonus:", finalScore); // Output: Score with Bonus: 50



2. Non fucntional programming if we  changing the state of the variable or parameter which we are using in the funtion.

- if we update the state of the varible which we are using the fucntion then it leads to update the value of the varible which is vailable in globl 

- if we update the state of the parameter which we pass in the fucntion it leads to update the parameter and if we use the parameter again in that same function call now we get update value. we didn't get the value which we pass initially

Here are two examples of non-functional programming functions in JavaScript that demonstrate modifying a global variable and changing a parameter:

Example 1: Modifying a Global Variable

JavaScript
// Global variable (avoid in functional programming)
let globalSum = 0;

function addNonFunctional(x) {
  globalSum += x; // Modifying the global variable
}

addNonFunctional(7); // Call the function with 7
console.log(globalSum); // Output: 7 (global variable modified)

addNonFunctional(8); // Call again with 8
console.log(globalSum); // Output: 15 (global variable modified again)
Use code with caution.
Explanation:

Global Variable: We declare a globalSum variable outside any function.
addNonFunctional Function: This function takes a number x as input.
Modification: Inside the function, it adds x to the globalSum variable using globalSum += x. This modifies the global variable.
Side Effects: Each call to addNonFunctional changes the globalSum value, leading to side effects. The output depends on the previous calls.
Example 2: Changing a Function Parameter

JavaScript
function addAndModify(number) {
  // Modify the parameter (not functional)
  number += 10;
  console.log("Inside function:", number); // Output: Inside function: 20 (modified value)

  return number;
}

const myNumber = 10;
const result = addAndModify(myNumber);

console.log("Outside function:", myNumber); // Output: Outside function: 10 (original value remains unchanged)
console.log("Returned value:", result); // Output: Returned value: 20
Use code with caution.
Explanation:

addAndModify Function: This function takes a number as input.
Modification: Inside the function, it attempts to modify the number parameter by adding 10 using number += 10. However, in JavaScript, primitive data types like numbers are passed by value, meaning a copy is made.
No Change to Original Variable: The modification happens to the copy within the function, not the original myNumber variable outside.
Side Effect (Printing): Printing the modified value inside the function (console.log("Inside function:", number)) demonstrates the intended modification (but doesn't actually change myNumber).
Key Points:

These examples showcase non-functional approaches that can lead to unpredictable behavior and difficulty in reasoning about the code.
Modifying global variables or parameters can cause unintended consequences.

