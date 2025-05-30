// // .then and .catch we need to pass the callback as the arguments

// const fetchUsers = fetch("https://reqres.in/api/users/l");
// fetchUsers
//   .then((resp) => {
//     if (!resp.ok) {
//       console.log("Error status code", resp.status);
//       return Promise.reject("Error status code 4XX or 5XX");
//     }
//     console.log("kishan");
//     return resp.json();
//   })
//   .then((d) => {
//     console.log(d.data[2]);
//     console.log("ksihan1112");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const fetchUsers = fetch("https://reqres.in/api/users/k");

fetchUsers
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(`Error fetching users: Status code ${resp.status}`); // Throw an error object with a descriptive message
    }
    return resp.json();
  })
  .then((data) => {
    console.log(data.data[2]);
    console.log("ksihan1112");
  })
  .catch((err) => {
    console.error("Catch error:", err.message); // Log a clear error message
  });

 

  