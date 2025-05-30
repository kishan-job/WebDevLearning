function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User Data ✅"), 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts Data ✅"), 2000);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Comments Data ✅"), 1500);
  });
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then((results) => {
    console.log("All data received:");
    console.log(results); // ["User Data ✅", "Posts Data ✅", "Comments Data ✅"]
  })
  .catch((err) => {
    console.log("Something failed:", err);
  });
