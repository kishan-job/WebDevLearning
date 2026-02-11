# In JavaScript, built-in constructor functions are functions provided by the language to create instances of standard object types like Object, Array, String, Number, Boolean, Function, and others. These constructors allow developers to create and manipulate objects using built-in types, and they provide essential methods and properties for interacting with those types.

every thing is object in js

## we create a array object using new keyword plus invocking the constuctor fuction.
## for build in constructor fucntions like array,object,boolen,num no need to invoke the build in constructor fuctions to create instance object of the particular build infucniton. Exm: let aar= new Array("a", "b") we use let aar=["a","b"]here instance object is Array object.

Common Built-in Constructor Functions in JavaScript
Object Constructor:

Creates a new object.
javascript
Copy code
const person = new Object();
person.name = "Kishan";
person.age = 23;

Array Constructor:

Creates a new array.
javascript
Copy code
let arr = new Array(1, 2, 3);
String Constructor:

Creates a new string object.
javascript
Copy code
let str = new String("Hello");
Number Constructor:

Creates a new number object.
javascript
Copy code
let num = new Number(100);
Boolean Constructor:

Creates a new boolean object.
javascript
Copy code
let bool = new Boolean(true);
Function Constructor:

Creates a new function.
javascript
Copy code
let func = new Function('x', 'y', 'return x + y');
Date Constructor:

Creates a new date object.
javascript
Copy code
let date = new Date();
RegExp Constructor:

Creates a new regular expression object.
javascript
Copy code
let regex = new RegExp('\\d+');
Error Constructor:

