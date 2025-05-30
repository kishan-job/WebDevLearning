// we can Handel api using Async and Await also instead of try, catch

// Advantages of Async/Await:

// Async/await provides a cleaner and more readable syntax compared to traditional .then and .catch methods for handling asynchronous operations.
// It makes error handling more intuitive, as errors can be thrown and caught naturally within the code flow.
// Key Points:

// The async/await syntax simplifies asynchronous programming with fetch.
// Error handling is implemented using try/catch blocks with throw statements.
// The provided example demonstrates successful error handling and logging.
// I hope this comprehensive explanation clarifies the code you provided!

async function fetchUsers() {
    try {
      const response = await fetch("https://reqres.in/api/users/r");
      if (!response.ok) {
        throw new Error(`Error status code: ${response.status}`); // if statement is executed means throw create a error object and stop executing the other code inside the try block
      }
      console.log("kishan1112");
      const data = await response.json();
      console.log(data.data[2]); // Assuming data.data is an array
    }
    catch (error) {
        console.log(error); // .log method is used to print the error  from the the error object which create from throw 
        console.error(error.message); // show the error with the message property 
        console.error(error); // show the entire object 
    }
  }
  
fetchUsers();




  
// const MyP = fetch("https://reqres.in/api/users")

// async function fetchUsers() {
//     try {
//       const response = await MyP;
//       if (!response.ok) {
//         throw new Error(`Error status code: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data.data[2]); // Assuming data.data is an array
//       console.log("kishan1112");
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
// fetchUsers();

  