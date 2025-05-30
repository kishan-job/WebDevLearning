// Global Context:

// The global context is the top-level environment in JavaScript. It's created when the script starts executing.

// Execution Context:

// An execution context is a container for executing JavaScript code. It's created whenever a function is called or when the script starts.
// Each execution context has its own scope chain, which determines the variable and function accessibility within that context.
// The scope chain includes the current context's variables and functions, as well as the outer context's scope chain.

// This keyword:
// 1. For all regular function calls this belongs to global object or window.so if we want to use the varible from the global object no need to use the this keyword.Person
let name1 = "name1"
function funname1(){
    console.log(name1);// to access name1 from global no need to use this keyword
    console.log(this)//global or window object
}

// 2. When a function is called as a method of an object, this refers to that object

let nameobj = {
    nameobj1: "nameobj1",
    funobj: function () {
        console.log(this);// here in console we can wee the nameobj entirly to access properties of nameobj we need to use this.nameobj1
        
    }
}

// Behavior of the this Keyword:

// The this keyword refers to the current execution context. Its value depends on how the function is called.
// 1. Global Context:

// When the function is called outside of any object or function, this refers to the global object (e.g., window in a browser).

let namee = "kishan";
function fun1() {
    console.log(namee);
    
}
fun1()

// 2. Object Method:

// When a function is called as a method of an object, this refers to that object(current execution contex).
let firstName="kk"
const obj1 = {
    firstName: "Kishan",
    lastName: "Kancharla",
    courseList: [],
    address: {
        city: "Eluru",
        Pincode:534002
    },
    setCourseList: function(course){
        this.courseList.push(course)
        console.log(this.courseList.length);
        console.log(firstName); //here by using this keyword we can access firstname from the global object
        console.log(this.firstName); //here by using this keyword we can access firstname from the current object
        
    }
}
obj1.setCourseList("react");
console.log(obj1.courseList);

// so When we use the the funciton as the method of the object we need to use the this keyword to access the properties of current object.

// 3. In a function constructor, the this keyword refers to the newly created object instance.

// When you use the new keyword to create a new object from a function constructor

// when we use new keyword before the constructor fucntion call then new keyword makes this keyword belogs to corrent object instead of pointing this to glaobal. Person("Alice", 30) is regular function call when we use new Person("Alice", 30) then it is not a regular function call then this keyword poinging to current execution



function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person("Alice", 30);
  console.log(person1); // Output: { name: 'Alice', age: 30 }


