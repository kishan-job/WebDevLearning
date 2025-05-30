# Functions

`code fiel:`   [06_functions](../Javascript/06_functions.js)

In JavaScript, functions are blocks of reusable code that perform a specific task or calculate a value. Functions are a fundamental building block of JavaScript programming, allowing you to encapsulate a set of statements into a single unit and invoke them as needed. Here are some key points about functions in JavaScript:

---

**Function Declaration:** Functions can be declared using the function keyword followed by the function name, parameters (optional), and the function body enclosed in curly braces.

```
function myFunctin(name){
    console.log(`Hey ${name}`);
}

myFunctin("kishan") // invoking the function

```
**Functionn Expression:** A function expression is a way to define a function by assigning it to a variable, which involve assigning an anonymous function to a variable.

javascript
Copy code
var greet = function(name) {
    console.log('Hello, ' + name + '!');
};
**Arrow Functions:** Introduced in ECMAScript 6 (ES6), arrow functions provide a more concise syntax for writing functions.

javascript
Copy code
var greet = (name) => {
    console.log('Hello, ' + name + '!');
};
Parameters: Functions can accept zero or more parameters, which are variables,functions that hold the values passed to the function when it is called.

javascript
Copy code
function add(a, b) {
    return a + b;
}
Return Statement: Functions can return a value using the return statement. If no return statement is present, the function returns undefined.

javascript
Copy code
function add(a, b) {
    return a + b;
}
Function Invocation: Functions are called or invoked using their name followed by parentheses containing any arguments.


greet('John'); // Output: Hello, John!

# Scope: Functions have their own scope, and variables declared inside a function are only accessible within that function unless explicitly returned or declared globally.

# Function Hoisting: In JavaScript, function declarations are hoisted to the top of the enclosing scope, meaning they can be invoked before they are declared in the code.

javascript
Copy code
greet('John');

function greet(name) {
    console.log('Hello, ' + name + '!');
}
Function as First-Class Citizens: In JavaScript, functions are treated as first-class citizens, meaning they can be passed as arguments to other functions, returned from functions, and assigned to variables.

javascript
Copy code
function sayHello() {
    return "Hello";
}

function greet(callback) {
    console.log(callback());
}

greet(sayHello); // Output: Hello
These are some of the essential aspects of functions in JavaScript, which play a crucial role in organizing and structuring JavaScript code.
