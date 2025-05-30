// function login(userName,callback) {
//   var logindate;

//   setTimeout(() => {
//     logindate = new Date();
//     callback(userName, logindate); // Pass userName and logindate
//   }, 1000);
// }

// //call back function
// function userLogdate(userName,logindate) {
//   console.log(`${userName} is logged at ${logindate}`);
// }

// login("kishan",userLogdate);

// ******2********
// function login(callback) {
//   var logindate = new Date();
//   var userName = "kishan"

//   callback(userName, logindate); // Pass userName and logindate
// }

// //call back function
// function userLogdate(logindate) {
//   console.log(`${userName} is logged at ${logindate}`);
// }

// login( userLogdate);


// // **********3*********
// function login(callback) {
//     var userName = "kishan"; // Define username within login
//     var logindate;
  
//     setTimeout(() => {
//       logindate = new Date();
//       callback(logindate); // Pass only logindate
//     }, 1000);
//   }
  
//   function userLogdate(logindate) { // Now accepts one argument
//     console.log(`${userName} is logged at ${logindate}`);
//   }
  
//   login(userLogdate);



//   ********4*****
// function login(callback) {
//     var userName = "kishan"; // Define username within login
//     var logindate;
  
//     setTimeout(() => {
//       logindate = new Date();
//       callback(userName, logindate); // Pass both userName and logindate
//     }, 1000);
//   }
  
//   function userLogdate(userName, logindate) { // Now accepts two arguments
//     console.log(`${userName} is logged at ${logindate}`);
//   }
  
//   login(userLogdate);
  