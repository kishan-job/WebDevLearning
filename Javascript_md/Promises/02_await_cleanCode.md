How async/await Creates Clean Code in JavaScript
async/await makes JavaScript code more readable, maintainable, and error-resistant compared to traditional promise chains.

1. Improves Readability (Avoids "Callback Hell")
Without async/await (Promise chaining)
javascript
Copy
Edit
function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return fetch("https://jsonplaceholder.typicode.com/todos/2");
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

getData();
✅ Issue: Nested .then() blocks make it harder to read and debug.

With async/await (More readable)
javascript
Copy
Edit
async function getData() {
  try {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data1 = await response1.json();
    console.log(data1);

    const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data2 = await response2.json();
    console.log(data2);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
✅ Why better?

Code reads like synchronous code (step by step).
No nesting of .then() makes it easier to debug.
Try-catch simplifies error handling.
2. Better Error Handling
Promise chaining error handling
javascript
Copy
Edit
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch("invalid-url"); // Causes an error
  })
  .then(response => response.json())
  .catch(error => console.log("Error:", error.message));
✅ Issue: If an error occurs, it jumps to the .catch() block, but it’s harder to debug where exactly it happened.

With async/await (Better error control)
javascript
Copy
Edit
async function getData() {
  try {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data1 = await response1.json();
    console.log(data1);

    // Intentional error
    const response2 = await fetch("invalid-url");
    const data2 = await response2.json();
    console.log(data2);

  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

getData();
✅ Why better?

Error is caught exactly where it happens.
Single try-catch block avoids scattered .catch() handlers.