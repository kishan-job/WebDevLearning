// In JavaScript, “truthy” and “falsy” values determine how expressions behave in conditionals

//=>
// In JavaScript, these are falsy:
// false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy.

// ===---> 1) Quick Mental Model

// if (value) → runs when value is truthy.
// if (!value) → runs when value is falsy.

// ===---> 2) Common “Short” Checks You’ll See
// Any non-empty (and non-whitespace-only) string
// if (str && str.trim()) { /* has visible characters */ }
if("str" && "  str   ".trim()){
    console.log("Non white space");
    
}

// Any non-empty string (whitespace allowed)
// if (str) { /* string not empty, null, or undefined */ }

if("     "){
    console.log("White space conditon also executed");
    
}

if(""){
    console.log("This if condition won't executed ");
    
}


// =>Object

if({}){
    console.log("Empty object is truthy so it executed");
    
}

if({} && Object.keys({}).length){
    console.log('In this we use key method from Object constructure function to get the properties in array and we check the lenght property here length is Zero it wont execute this if block');
    
}

// => Number

const num1 = 0
if(num1){}{
console.log("This won't executed because the 0 is falsy value");

}
 // Explicitly check for a number (including 0)
if (typeof(num1)  === 'number'){
    console.log("This if block executed because the we are checking the typeof num1 variable it returns data type of that variable we assign 0. so it executed");
    
}

if(typeof NaN === 'number' ){
console.log(
    "This executed because typeof NaN return type number"
);

}


// Safe

// 
if (typeof num1 === 'number' && !Number.isNaN(num1)) {
    console.log("This is executed: num1 is a valid number type and not NaN, ensuring meaningful mathematical operations.");
}
// =>
// In JavaScript, there are two primary methods for checking if a value is "Not-a-Number": the global isNaN() function  is type coversion and the modern Number.isNaN() method no type coversion strict.

// NaN is a special neumaric value  that represents the result of an operation that was intended to return a number but failed to do so in a mathematically meaningful way.

//  the common cases in which an expression evaluates to NaN

// Failed number conversion 
parseInt("abc"); // NaN
Number(undefined); // NaN


// Mathematically impossible operations that do not result in a real number
Math.sqrt(-1); // NaN
Math.log(-1);  // NaN


// Indeterminate forms in arithmetic operations.
0 / 0;             // NaN
Infinity / Infinity; // NaN
Infinity - Infinity; // NaN
0 * Infinity;      // NaN


// Operations involving NaN as an operand, as NaN is "contagious" and most mathematical operations involving it will result in NaN.

1 + NaN; // NaN
"string" * 7; // NaN (implicit conversion of "string" to a number fails)


// Using undefined in an arithmetic operation (except for addition where it might concatenate strings).

let x; // x is undefined
x * 2; // NaN


// ===---> 3) Idioms with &&, ||, ??, ?: 

// These patterns  are usually called short‑circuiting idioms or idiomatic use of logical/conditional operators.

// ==> 1)Guarded Execution (&&) or Conditional execution (&&)

const user = {
    name: "Alice",
    login: function() {
        console.log(`User ${this.name} logged in.`);
        return true;
    }
};
// Run right side only if left is truthy
user && user.login();           // call login if user exists
// obj && obj.items && obj.items.length && doSomething(); 

// Why use it?
// This pattern is a concise way to prevent common TypeError exceptions that occur when trying to access properties or call methods on variables that are null or undefined. It acts as a guard clause, ensuring the function is only called if the necessary object exists.

// It can be thought of as a shorthand for this if statement:

if (user) {
    user.login();
}


// ==>2) Fallback default/ Falsy fallback (falsy) (||)

// Use default when left is falsy (beware: 0, "" and other fasly values)
const title = user.title || 'untitled';   // if page is 0 => becomes 1 (maybe not desired)

// ==>3) Nullish Coalescing (??)
// Fallback only when the value is null or undefined not with falsy value.

const surname = user.surname ?? 'no surname'

// ==> 4) Ternary
const label = true ? "Present" : "Missing";



// ==> 5) Converting to Boolean (explicit)

// Double-bang to get a strict boolean
const hasName = !!user.name;           // true
const hasVisibleName = !!user.name?.trim();// true

console.log(hasVisibleName);



// ===---> 5) Practical Form Checks

// Sample form object (INVALID on purpose)
const form = {
  name: "   ",               // invalid: empty/whitespace
  age: "not-a-number",       // invalid: not a number
  items: [],                 // invalid: empty array
  meta: {}                   // invalid: empty object
};

const next = {};


// Required string: reject empty or whitespace-only
if (!form.name?.trim()) {
  next.name = "Name is required";
}

// Optional number but must be valid if provided
if (form.age != null && (typeof form.age !== 'number' || Number.isNaN(form.age))) {
  next.age = "Age must be a valid number";
}

// Required array with at least one item
if (!Array.isArray(form.items) || !form.items.length) {
  next.items = "At least one item is required";
}

// Required object with at least one key
if (!form.meta || !Object.keys(form.meta).length) {
  next.meta = "Meta must have at least one key";
}

console.log("Errors:", next);


// ===--->6) Common Pitfalls (Important)

// "0" is truthy. It’s a non-empty string.
if ("0") { /* runs */ }

// [] and {} are truthy. Don’t do if (arr) to check non-empty.
if ([]) { /* runs */ }
if ({}) { /* runs */ }

// new Boolean(false) is truthy (it’s an object!). Always use primitive booleans.

if (new Boolean(false)) { /* runs (surprise) */ }

// NaN is falsy, but typeof NaN === 'number'. Use Number.isNaN(x) to check NaN.
Number.isNaN(NaN) // true

// Loose equality (==) coerces. Prefer ===.
0 == false  // true   (coerced)
0 === false // false
"" == 0     // true   (coerced)
"" === 0    // false
null == undefined  // true (special case)
null === undefined // false


// ===---> 7) Reading “Short” Checks at a Glance

// if (x) → “x is truthy” (not one of the 8 falsy values).
// if (!x) → “x is falsy” (is one of the 8 falsy values).
// if (arr && arr.length) → “arr exists and has elements”.
// if (obj && Object.keys(obj).length) → “obj exists and has keys”.
// if (s && s.trim()) → “s is a non-empty, non-whitespace string”.
// a && doThing() → “only doThing if a is truthy”.
// x || fallback → “use fallback if x is falsy (0/'' will trigger)”.
// x ?? fallback → “use fallback only if x is null or undefined”.


// ⭐ **Understanding Truthy & Falsy Values in JavaScript
// and how they affect condition checks (if, &&, ||, ??)**
// Everything else is just:

// examples
// edge cases
// real-world usage
// common mistakes
// optional chaining
// fallback patterns
// form validation
// short-circuit tricks