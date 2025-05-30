function getData(id, callFun) {
  setTimeout(() => {
    console.log(`logging the num ${id}`);
    callFun(id + 1); // we are calling the funciton reference which we are passing as call back to the getData.
  }, 1000);
}

getData(1, function (result1) {
  // here we are defining the fucntion definition of the refenece call back function
  getData(result1, function (result2) {
    getData(result2, function (result3) {
      console.log(result3);
    });
  });
});
