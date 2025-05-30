// Events in JavaScript
// Events in JavaScript are actions or occurrences that happen in the browser, such as clicking a button, hovering over an element, or pressing a key. JavaScript provides event handling mechanisms that allow developers to respond to these interactions dynamically.

// 1. What is an Event?
// An event is a signal that something has happened. It can be triggered by the user (e.g., clicking a button) or the browser itself (e.g., page load). Some common events include:

// Mouse Events: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup
// Keyboard Events: keydown, keyup, keypress
// Form Events: submit, change, focus, blur
// Window Events: load, resize, scroll
// Clipboard Events: copy, cut, paste
// 2. Event Listeners
// To handle events, we use event listeners. The addEventListener() method allows us to attach an event to an element without modifying its HTML.

// Example: Using addEventListener()
// javascript
// Copy
// Edit
// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Button was clicked!");
// });
// This code listens for a click event on an element with the ID "myButton" and executes the function when the event occurs.

// 3. Event Propagation
// When an event occurs on an element inside another element, the event can propagate through multiple elements. There are two phases of event propagation:

// A. Event Bubbling (Bottom to Top)
// The event starts at the target element and bubbles up to its parent elements.
// This is the default behavior in JavaScript.
// Example:

// javascript
// Copy
// Edit
// document.getElementById("child").addEventListener("click", function() {
//     alert("Child clicked");
// });

// document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent clicked");
// });
// If you click on "child", both "child clicked" and "parent clicked" alerts will appear because the event bubbles up to the parent.

// B. Event Capturing (Top to Bottom)
// The event starts from the outermost parent and moves down to the target element.
// To enable this, we pass true as the third argument in addEventListener().
// Example:

// javascript
// Copy
// Edit
// document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent clicked first (capturing)");
// }, true);

// document.getElementById("child").addEventListener("click", function() {
//     alert("Child clicked");
// });
// Now, clicking on "child" will show "Parent clicked first (capturing)" first, followed by "Child clicked".

// Stopping Propagation
// To prevent the event from propagating further:

// javascript
// Copy
// Edit
// event.stopPropagation();
// Example:

// javascript
// Copy
// Edit
// document.getElementById("child").addEventListener("click", function(event) {
//     alert("Child clicked");
//     event.stopPropagation(); // Stops bubbling
// });
// 4. Event Delegation
// Instead of adding event listeners to multiple elements, we can add a single listener to a parent element and use event delegation.

// Example:
// javascript
// Copy
// Edit
// document.getElementById("list").addEventListener("click", function(event) {
//     if (event.target.tagName === "LI") {
//         alert("You clicked: " + event.target.innerText);
//     }
// });
// This method improves performance when handling events on dynamically generated elements.

// 5. Default Behavior and preventDefault()
// Some events have default browser behaviors, such as form submission or link navigation. We can prevent them using event.preventDefault().

// Example: Preventing Form Submission
// javascript
// Copy
// Edit
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Form submission prevented!");
// });
// 6. Event Object (event or e)
// When an event occurs, an event object is automatically passed to the event handler. This object contains useful properties and methods.

// Example:
// javascript
// Copy
// Edit
// document.addEventListener("click", function(event) {
//     console.log("Event type:", event.type);
//     console.log("Mouse coordinates:", event.clientX, event.clientY);
// });
// 7. this in Event Handlers
// Inside an event handler, this refers to the element that received the event.

// Example:
// javascript
// Copy
// Edit
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button clicked:", this.innerText);
// });
// But in arrow functions, this does not refer to the event target.

// Example:
// javascript
// Copy
// Edit
// document.getElementById("myButton").addEventListener("click", () => {
//     console.log(this); // `this` will not refer to the button
// });
// 8. Removing Event Listeners
// To remove an event listener, use removeEventListener(). The function reference must be the same.

// Example:
// javascript
// Copy
// Edit
// function greet() {
//     alert("Hello!");
// }

// document.getElementById("myButton").addEventListener("click", greet);

// // Removing the event listener
// document.getElementById("myButton").removeEventListener("click", greet);
// 9. Important Topics in JavaScript Events
// Event Bubbling & Capturing
// Event Delegation
// Stopping Propagation (stopPropagation())
// Preventing Default Actions (preventDefault())
// Using the event object
// Removing Event Listeners
// Would you like me to explain any topic in more detail? 😊