// In JavaScript, conditionals are programming constructs that allow you to execute different blocks of code based on specified conditions.

// if statment

// if (condition) {
//     // code to be executed if the condition is true
// }

//   switch statement
//   switch statement: The switch statement evaluates an expression and executes code associated with a matching case label.

// switch (expression) {
//     case value1:
//       // code to be executed if expression equals value1
//       break;
//     case value2:
//       // code to be executed if expression equals value2
//       break;
//     // Add more case statements as needed
//     default:
//       // code to be executed if expression doesn't match any case
//   }

let dateObject = new Date(2124, 20);
console.log(dateObject);



const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is Alice

  