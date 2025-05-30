// In JavaScript, an array is an ordered collection of items (values) that are stored under a single variable name and can be accessed using zero-based numerical indices.

var myArray = ["sai", "kishan", "siri"]
// console.log(myArray.length);
// console.log(myArray.indexOf("kishan"));

var myArray2 = new Array("2","3","7")

// console.log(myArray2.indexOf("7"));

let numbers = [5,43,4,84,99,104,26];

let dividednum = [];
let nondividednum = [];

let findEvenNum =(e)=>{
e.forEach(element => {
    element % 2 == 0 ? dividednum.push(element) : nondividednum.push(element)
});

}



findEvenNum(numbers)
console.log(dividednum);

