why for browser-specific functions no need to provide the window.alert() 
Here's a breakdown of why you often don't need to explicitly provide window. before browser-specific functions like alert() in modern browsers:

To make common browser-specific functions more convenient for developers, browsers typically make them globally accessible. This means you can call them directly without explicitly referencing window.

getElementById('myElement') and document.getElementById('myElement') works in all cases

No, getElementById('myElement') and document.getElementById('myElement') do not work identically in all cases. It's essential to consider context and best practices to ensure consistent behavior:

Implicit vs. Explicit Invocation:

Modern Browsers: Implicit calls like getElementById('myElement') usually work in modern browsers due to their convenience features, but this behavior is not guaranteed across all browsers and environments.
Legacy Browsers: Older browsers might not support implicit usage, requiring the explicit document.getElementById('myElement') for proper function calls.
Compatibility: Using document.getElementById('myElement') ensures broader compatibility with minimal effort, making it a safer choice for production code.
Execution Context and Scope:

Global Scope: Implicit calls generally work in the global scope of a browser window, where document is often implicitly available.
Modules and Strict Mode: Within modules or strict mode, document might not be directly accessible in the global scope, requiring a proper import or reference to the object.
Node.js: document and browser-specific functions like getElementById are not available in Node.js, as it's a non-browser environment.
Clarity and Readability:

Explicit References: Using document.getElementById('myElement') explicitly:
Clarifies function ownership and object relationships.
Enhances code readability, especially for developers unfamiliar with implicit global availability.
Improves maintainability and understanding for future code revisions or collaboration.
Best Practices:

Prioritize Explicit References: For clarity, consistency, and broader compatibility, generally use document.getElementById('myElement').
Consider Implicit for Modern Code: In well-controlled modern environments, getElementById('myElement') can be acceptable for brevity, but exercise caution.
Mind Execution Context: Be mindful of the execution context (global scope, modules, strict mode) when implicitly accessing document and its methods.
Adapt for Non-Browser Environments: Use appropriate methods for DOM manipulation in non-browser JavaScript environments like Node.js, where browser-specific functions aren't available.



Common Implicitly Available Functions:

DOM Manipulation:
getElementById()
getElementsByClassName()
getElementsByTagName()
createElement()
appendChild()
removeChild()
querySelector()
querySelectorAll()

User Interaction:
alert()
confirm()
prompt()

Timers:
setTimeout()
setInterval()
Others:
location.href (for accessing and setting the current URL)
getComputedStyle() (for retrieving computed styles of elements)