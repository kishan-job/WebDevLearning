const fetchApi = fetch("https://randomuser.me/api/");

const handle = async () => {
  try {
    const response = await fetchApi;
    console.log(response);

    if (!response.status) {
      throw new Error("error is", response.status);
      }
      
      const resData =  await response.json()
      console.log(resData);
      
  } catch (error) {}
};

handle();
