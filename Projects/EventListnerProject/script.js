const red = document.querySelector(".red");
// const yellow = document.querySelector(".yellow");
// const blue = document.querySelector(".blue");
// const green = document.querySelector(".green");
// const grey = document.querySelector(".grey");

// const center = document.querySelector("#center");


// const getColor = (element) => ( window.getComputedStyle(element).backgroundColor)

// function addColor(e){
//     e.addEventListener("mouseenter",()=>(center.style.backgroundColor = getColor(e) ))
// }


// addColor(red)
// addColor(yellow)
// addColor(blue)
// addColor(green)
// addColor(grey)

// ****************2**************

// const coloredElements = document.querySelectorAll(".red, .yellow, .blue, .green");
// const center = document.querySelector("#center");

// const getColor = (element) => window.getComputedStyle(element).backgroundColor;

// coloredElements.forEach((element) => {
//   element.addEventListener("mouseenter", () => {
//     center.style.backgroundColor = getColor(element);
//   });
// });


// 1. Selecting Elements:

// const coloredElements = document.querySelectorAll(".red, .yellow, .blue, .green"); collects all elements with the specified classes into a NodeList.
// const center = document.querySelector("#center"); selects the element with the ID "center".
// 2. Defining a Helper Function:

// const getColor = (element) => window.getComputedStyle(element).backgroundColor; creates a function to retrieve an element's background color.
// 3. Attaching Event Listeners:

// coloredElements.forEach((element) => { ... }); loops through each of the selected colored elements.
// element.addEventListener("mouseenter", () => { ... }); attaches a "mouseenter" event listener to each element.
// 4. Listener Function Handling:

// When a "mouseenter" event occurs on a colored element:
// center.style.backgroundColor = getColor(element); gets the hovered element's background color using the getColor function.
// It then applies that color to the #center element, dynamically changing its appearance.