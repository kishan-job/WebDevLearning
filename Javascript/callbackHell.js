// Callback Hell - A Simple Example
// Callback Hell happens when multiple asynchronous functions depend on each other, leading to deeply nested callbacks. This makes the code hard to read and maintain.

// Example Without Callback Hell (Synchronous Code)
// Let's say we need to:
// 1️⃣ Get user data
// 2️⃣ Get user posts
// 3️⃣ Get post comments

// If these were synchronous functions, it would look simple:

// javascript
// Copy
// Edit
// const user = getUser();
// const posts = getPosts(user.id);
// const comments = getComments(posts[0].id);
// console.log(comments);
// But real-world tasks like fetching data are asynchronous, requiring callbacks.

// Example of Callback Hell (Nested Callbacks)
// javascript
// Copy
// Edit
function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: 1, name: "Alice" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback([{ id: 101, title: "Post 1" }]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["Nice post!", "Great read!"]);
  }, 1000);
}

// Nested callbacks (Callback Hell)
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});
// Problems with Callback Hell
// ❌ Hard to Read – Too many nested functions.
// ❌ Difficult to Debug – Errors are hard to trace.
// ❌ Not Scalable – If more steps are added, nesting increases.

// Solution: Using Promises to Avoid Callback Hell
// javascript
// Copy
// Edit
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve([{ id: 101, title: "Post 1" }]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["Nice post!", "Great read!"]);
    }, 1000);
  });
}

// Using Promises (Avoiding Callback Hell)
getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((error) => console.log("Error:", error));
// Even Cleaner: Using async/await
// javascript
// Copy
// Edit
async function fetchData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
// Conclusion
// ✅ Promises replace nested callbacks
// ✅ async/await makes it even simpler
// ✅ Code is cleaner and easier to maintain

// Would you like to try converting a callback function into a promise? 😊