Dom is the program interface, js can intract with dom and manupulate the elements

DOM (Document Object Model): The DOM is a structured representation of a web page in the browser's memory. It organizes the HTML elements into a hierarchical tree, allowing JavaScript to interact with them.

HTMLElement: Every HTML element in the DOM, such as <div>, <p>, <h1>, and others, is represented as an object of type HTMLElement.

Browser Implementation:

When a web page is loaded, the browser constructs the DOM and assigns these properties, including style, to each element.
This "inheritance" isn't in the traditional object-oriented sense, but rather a fundamental characteristic of elements within the DOM's structure.


Key Points:

The style object is not inherited from a parent object but is a built-in property of every element in the DOM.


const myElement = document.getElementById("uniqueId");
const myStyleObject = myElement.style;