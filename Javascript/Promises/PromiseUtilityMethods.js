// ✅ 1. Promise.all()
// 📌 Waits for all promises to resolve

// Returns an array of results

// Fails immediately if any promise rejects

// 🧠 Interview Point
// Use Promise.all when all results are needed to proceed and failing one should stop the process.

// ✅ Example
const pp1 = Promise.resolve("Task 1 done");
const pp2 = Promise.resolve("Task 2 done");
pp;
const pp3 = Promise.reject("Task 3 failed");

Promise.all([pp1, pp2, pp3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error)); // Task 3 failed



// ✅ 2. Promise.race()
// 📌 Returns first settled promise

// Returns the first resolved OR rejected result

// ✅ Example

const fast = new Promise((resolve) =>
  setTimeout(() => resolve("Fast resolved"), 100)
);
const slow = new Promise((resolve) =>
  setTimeout(() => resolve("Slow resolved"), 500)
);

Promise.race([fast, slow]).then((result) => console.log(result)); // Fast resolved

// 🧠 Interview Point

// Use Promise.race for timeouts or fastest response.

//  ✅ 3. Promise.allSettled()
// 📌 Waits for ALL promises to finish

// Does NOT stop if one fails

// Gives status + value/reason

// ✅ Example

const ppp1 = Promise.resolve("Done 1");
const ppp2 = Promise.reject("Error 2");
const ppp3 = Promise.resolve("Done 3");

Promise.allSettled([ppp1, ppp2, ppp3]).then((results) => console.log(results));

// 🧠 Interview Point
// Use when you need results of all promises, even failures (e.g., multiple API calls UI still shows partial data).
//  output   [
//   { status: "fulfilled", value: "Done 1" },
//   { status: "rejected", reason: "Error 2" },
//   { status: "fulfilled", value: "Done 3" }
// ]

// 4. Promise.any()
// 📌 Returns first fulfilled promise

// Ignores failures

// Fails only if all promises fail

// ✅ Example

const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");

Promise.any([p1, p2, p3]).then((result) => console.log(result)); // Success 2

//   🧠 Interview Point

// Use when you only need first successful result (backup servers / multiple API endpoints).
