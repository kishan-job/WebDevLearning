// **Variable Declaration Keywords in JavaScript:**

// - **var:** (Older, not preferred in modern JavaScript)
//      - Functional Scope
//      - Can be accessed within functions.
//      - Subject to hoisting (conceptually moved to the top of scope).
//      - Can be reassigned and redeclared within the same scope.

var firstName = "one"; // Global variable using var
console.log(firstName); // Outputs: "one"

// **Function-Scoped vs. Global Scope:**

// - Global scope: Variables declared outside any function are accessible globally.
// - Function scope: Variables declared with var inside a function are accessible only within that function.

function withvar() {
  var firstvar= "outfirstVar"
  // **Function-Scoped Variable with var:**
  if (true) {
    var firstvar = "oneVar"; // Accessible within the entire function, even outside the if block
    console.log(`firstvar in if statement "${firstvar}"`);
  }
  console.log(`firstvar outside if statement in withvar function "${firstvar}"`); // Still accessible here
}

withvar(); // Output:
//       firstvar in if statement "oneVar"
//       firstvar outside if statement in withvar function "oneVar"

// **Hoisting with var:**
// Variables declared with var are conceptually moved to the top of their scope, even though the actual assignment happens later.

console.log(myVar); // Output: undefined (declared but not yet assigned)
var myVar = "Hello!"; // Actual assignment happens here





