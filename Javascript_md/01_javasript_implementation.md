every 

1. it means every bowser need to write their own low level code for the Object constructor and methods

Yes, exactly. Each browser or JavaScript runtime environment (like Node.js) implements its own version of the JavaScript engine, which includes the Object constructor and its methods. These implementations are written in low-level languages like C or C++ and js to ensure efficient execution.

While the ECMAScript specification defines the behavior of JavaScript and its standard objects like Object, Array, and Function, it does not dictate how these objects should be implemented internally. This allows browser vendors and runtime environments to optimize their JavaScript engines according to their own requirements and constraints.

So, every browser or runtime environment may have its own implementation of the Object constructor and its methods, tailored to its specific needs and performance considerations. However, they all strive to adhere to the ECMAScript specification to ensure interoperability and consistency in behavior across different environments.

2. The Object constructor function in JavaScript is built into the language itself. When JavaScript code is executed in a runtime environment (like a web browser or a Node.js server), the JavaScript engine provides implementations for these built-in functions.

Internally, the Object constructor function is implemented in the JavaScript engine using low-level programming languages like C or C++. These implementations vary depending on the JavaScript engine being used (e.g., V8 for Chrome, SpiderMonkey for Firefox, JavaScriptCore for Safari, etc.). However, the functionality provided by these methods is standardized by the ECMAScript specification, ensuring consistent behavior across different JavaScript environments.

When you use the Object constructor function or its methods in your JavaScript code, the JavaScript engine executes the corresponding implementation provided by the engine. For example, when you call Object.create(proto, [propertiesObject]), the JavaScript engine creates a new object with the specified prototype and properties based on its internal implementation of the create method.

In summary, the Object constructor function and its methods are fundamental parts of the JavaScript language, and their implementations are provided by the JavaScript engine running your code.





