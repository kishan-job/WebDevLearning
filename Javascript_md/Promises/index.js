const fetchUsers = fetch("https://reqres.in/api/users");
fetchUsers
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })
  .then((data) => console.log("first name: ",data.data[0].first_name));
