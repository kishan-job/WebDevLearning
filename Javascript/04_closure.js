// Closures in JavaScript are functions that remember and can access variables from their outer (enclosing) function’s scope, even after that outer function has returned.It works because JavaScript keeps those variables alive in memory for the inner function.
// This works because JavaScript maintains the scope chain — the inner function keeps a reference to the variables in the outer function, not a copy.

// How Is the State Maintained in Your Code?
// State is maintained using closures in JavaScript. Closures allow functions to "remember" the variables from their lexical scope, even after the outer function has finished executing.

// Here in below example outer funciton returns the refernce of the inner function, to call the innner function we use ()().
// createCounter()() is simply calling the createCounter() function and immediately invoking the returned increment function.
// Here's a simple example of a closure:

// JavaScript
function createCounter() {
  let count = 0; // Outer function variable

  function increment() {
    count++; // Inner function accessing outer function's variable
    return count;
  }

  return increment; // Return the inner function (closure)
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2 inner functions to "remember" the state of the outer function, enabling powerful use cases like private state management or event handling.

console.log(counter2()); // 1 (separate closure with its own count)

// Why the Counters are Independent:

// Each time you call createCounter(), you are essentially creating a new execution context for that function. Within that context, a fresh count variable is created. The increment function defined within that specific call to createCounter() forms a closure over that particular count variable.

// Therefore, f1 and f2 hold references to two distinct increment functions, each bound to its own separate count variable created during their respective calls to createCounter().

// ********* Here are a few more examples of closures in JavaScript to showcase their versatility:

// Module Pattern:
// This pattern creates private variables and functions within a closure, exposing only the desired functionality to the outside world.

// JavaScript
const modulee = (function () {
  let privateData = "This is private data";

  function getData() {
    return privateData;
  }

  return {
    getData: getData,
  };
})();

console.log(modulee.getData()); // "This is private data" (Access granted through exposed function)
// console.log(privateData); // ReferenceError (privateData is not accessible outside the closure)
// Use code with caution.
// content_copy
// Simulating Private Methods:
// JavaScript doesn't have built-in private methods for objects. Closures can be used to achieve a similar effect.

// JavaScript
function createPerson(name) {
  let greeting = "Hello, my name is " + name;

  function sayHi() {
    console.log(greeting);
  }

  return {
    sayHi: sayHi,
  };
}

const person1 = createPerson("Alice");
person1.sayHi(); // "Hello, my name is Alice"
// Use code with caution.
// content_copy
// Event Listeners with Data Persistence:
// Create event listeners that remember information specific to the element they are attached to.

// JavaScript
function createWarning(message) {
  let warningElem = document.createElement("p");
  warningElem.textContent = message;

  function handleClick() {
    alert(message);
  }

  warningElem.addEventListener("click", handleClick);
  return warningElem;
}

const warning1 = createWarning("This button deletes data!");
const warning2 = createWarning("Are you sure you want to exit?");

document.body.appendChild(warning1);
document.body.appendChild(warning2);
// Use code with caution.
// content_copy
// In this example, each warningElem has its own click event listener closure that remembers the specific message to display in the alert.

// These are just a few examples of how closures can be used in JavaScript. With practice, you'll discover many more ways to leverage closures to write effective and well-structured code.