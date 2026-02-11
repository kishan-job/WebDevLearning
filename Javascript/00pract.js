async function fetching() {
  try {
    const firstFetch = await fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
      
      const resp = await firstFetch.json()
      console.log(resp.data[1].email);
      
      
  } catch (error) {}
}
fetching()