// async await eliminates the .then chaining 

const myPromise = fetch("https://reqres.in/api/users/K");

async function fetchUser() {
  try {
    const resp = await myPromise;
    if (!resp.ok) {
      throw new Error(`Error status code is: ${resp.status}`);
      }
      const userData = await resp.json()
      console.log(userData.data[0]);
  } catch (error){
      console.log(error); 
      console.error(error)
  }
}

fetchUser();
