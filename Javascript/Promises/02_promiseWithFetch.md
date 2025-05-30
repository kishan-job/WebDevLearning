Understanding Promises with Fetch API
The fetch API is used to make network requests in JavaScript, and it returns a Promise. We can handle this promise using:

.then() chaining
async/await syntax
1. Using .then() Chaining (Traditional Approach)
The .then() method is used to handle the resolved value of the promise.

javascript
Copy
Edit
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert response to JSON
  })
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
Explanation:
fetch(url) makes a request and returns a promise.
.then(response => response.json()) converts the response to JSON.
Another .then(data => { console.log(data) }) handles the actual data.
.catch(error => { console.error(error) }) catches any errors in the request.
2. Using async/await (Modern Approach)
The async/await syntax makes the code cleaner and easier to read.

javascript
Copy
Edit
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Convert response to JSON
    console.log("Data received:", data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Call the function
fetchData();
Explanation:
async function fetchData() defines an asynchronous function.
await fetch(url) pauses execution until the fetch request completes.
await response.json() waits for JSON conversion.
try...catch handles errors like network failures.