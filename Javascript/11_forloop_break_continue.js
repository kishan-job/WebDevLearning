
// In JavaScript, the continue keyword is used inside loops to skip the current iteration and proceed to the next iteration. It is commonly used within loops like for and while to control the flow of execution.

// Here's how continue works:

// javascript
// Copy code
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip iteration when i is 2 means it didn't exeucte the code below and moved to next iteration
  }
  console.log(i);
}
