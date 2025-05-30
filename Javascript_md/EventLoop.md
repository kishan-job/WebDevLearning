![https://medium.com/@nimaab1992/execution-context-and-event-loop-1143d7805981]

1. Before Click Event:

Before any user clicks the button, the callback function associated with the click event is not in any queue (neither event queue nor a separate callback queue).
When you use addEventListener, you create an event listener object. This object stores information about the event type (click in this case), the target element (the button), and a reference to the callback function.
This event listener object is then associated with the button element in the DOM.
2. When Click Occurs:

When the user clicks the button, a click event is triggered in the browser.
This event contains information about the click, such as the clicked element, coordinates, and any modifier keys.
3. Event Queueing:

The click event information (including the event type and target element) is added to the event queue. This queue holds information about all events that have occurred in the browser.
4. Event Loop and Processing:

JavaScript uses a single-threaded event loop model.
The event loop continuously checks the event queue.
When the event loop finishes executing the current task (e.g., a function or script), it dequeues the oldest event from the queue.
For the click event, the event loop retrieves the event information from the queue.
5. Event Listener Execution:

Based on the event type and target element, the event loop locates the corresponding event listener object associated with the clicked button.
The event loop then executes the code within the event listener object. This code typically involves calling the referenced callback function you provided when you attached the event listener.    



## The callback function for an event that doesn't occur doesn't have a specific "place" where it resides. It's more accurate to say that it exists in a dormant state within the JavaScript engine's memory. Here's a breakdown:

Function Definition: When you define the callback function using the function keyword, it's stored in memory as any other function. This memory space is managed by the JavaScript engine.   
Event Listener Attachment: When you attach the callback function to an event listener (e.g., using addEventListener), the following occurs:
A reference to the function is stored within the event listener object. This reference points to the function's location in memory.
This event listener object itself is stored in memory associated with the DOM element or other object it's attached to.
Event Occurrence and Execution: When the specific event occurs:
The event loop finds the event in the event queue.
The event loop retrieves the event listener object associated with the event.
The event loop follows the reference stored in the event listener object to find the actual function in memory.
The event loop then executes the function (the callback function).   
No Event: If the event doesn't occur:
The event listener object and its reference to the callback function remain in memory but are not actively used.
The callback function itself is still defined in memory but is not currently executing.
In essence:

The callback function is not actively stored in any queue or on the call stack until the event occurs.
It exists as a defined function in memory, waiting to be called upon event triggering.
The event listener object holds a reference to the function, allowing the event loop to find it when needed.   
Thinking in terms of code:

JavaScript
// Define a callback function
function handleClick() {
  console.log("Button clicked!");
}

// Attach the callback function to an event listener
const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// If the button is never clicked
// - The handleClick function remains defined in memory.
// - The event listener object and its reference to handleClick remain in memory.
// - handleClick is not actively on the call stack or in the event queue.
Use code with caution.

Summary:

Event doesn't occur, callback doesn't execute, and it doesn't reside in any active queue or stack.
The callback function and event listener object remain dormant in memory, waiting for potential future use.