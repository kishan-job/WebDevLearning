In JavaScript, async and await are used to work with asynchronous code in a cleaner, more readable way compared to traditional promise chaining.

1. async Function
An async function always returns a promise. It allows you to use the await keyword inside it.

javascript
Copy
Edit
async function fetchData() {
  return "Hello"; 
}

fetchData().then(console.log); // Output: Hello
Since async makes a function return a promise, the above function is equivalent to:

javascript
Copy
Edit
function fetchData() {
  return Promise.resolve("Hello");
}
2. await Keyword
The await keyword can only be used inside an async function. It pauses the execution of the function until the promise resolves or rejects.

javascript
Copy
Edit
async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}

getData();
await fetch(...) waits for the fetch request to complete.
await response.json() waits for the response to convert into JSON.
3. Error Handling with try...catch
Since await pauses execution, errors can be handled using try...catch blocks.

javascript
Copy
Edit
async function fetchData() {
  try {
    let response = await fetch("https://invalid-url.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();