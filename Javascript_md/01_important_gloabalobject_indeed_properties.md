1. Constructor Functions: Constructor functions like Object, Array, and String are indeed present in the global object (window in browsers, global in Node.js). Therefore, you can access them directly from the global scope.

Prototype Methods: Methods like Object.keys(), Array.push(), String.toUpperCase(), etc., are indeed present globally. However, they are not directly properties of the global object itself. Instead, they are properties of the prototypes (Object.prototype, Array.prototype, String.prototype) of their respective constructor functions. Therefore, you can access these methods globally through instances of objects created from these constructor functions.

So, to clarify, while prototype methods are not directly properties of the global object, they are indeed accessible globally when the constructor functions are present in the global object. 

2. what is mean of not directly properties of the global object itself. is that means are they nested
inside other object


Yes, exactly. When I say that prototype methods like Object.keys(), Array.push(), String.toUpperCase(), etc., are not directly properties of the global object itself, it means they are not directly attached to the global object as properties.

Instead, these methods are accessible globally because they are properties of the prototype objects (Object.prototype, Array.prototype, String.prototype) of their respective constructor functions (Object, Array, String). These prototype objects are themselves part of the inheritance chain for instances created from their corresponding constructors.

So, in a sense, these methods are nested inside other objects (Object.prototype, Array.prototype, String.prototype), and they become accessible globally because JavaScript automatically looks up the prototype chain when you try to access a property or method on an object. This allows you to use these methods globally without having to explicitly reference the prototype objects.