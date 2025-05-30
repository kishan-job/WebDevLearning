// Exe 1
console.log(1);
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>(resolve("Promise resolved exe 1")),3000)
})

myPromise.then((res)=>(console.log(res)))
console.log(2);

// Exe 2
function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Promise data! exe 2";
      resolve(data); // Resolve the promise with some data
    }, 1000); // Simulate a delay of 1 second
  });
}

const myPromise1 = createPromise();
console.log(myPromise1); // This will log a Promise object which is pending

// Exe 3

function createPromise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Promise data! exe 3";
        resolve(data); // Resolve the promise with some data
      }, 1000); // Simulate a delay of 1 second
    });
  }

async function handel() {
  const myPromise2 = await createPromise2();
  console.log(myPromise2);
}

handel();

// Exe 4

// In this example:

// The reject handler sends an object containing error information and a retry function.
// The catch block can access the error data and call the retry function if needed.
// Remember that using functions within reject can help you organize your code and make it more reusable. However, be mindful of potential performance implications, especially when dealing with complex logic or large data sets.

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject({
          error: 'Data fetch failed',
          errorCode: 500,
          // Define a function within reject
          retry: () => {
            console.log('Retrying...');
            fetchData();
          }
        });
      } else {
        resolve('Data fetched successfully!');
      }
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error.error);
  console.error(error.errorCode);
  error.retry(); // Call the retry function defined in reject
});



// Exe 5
// In this example:

// The resolve handler returns an object containing a message property and a callback function.
// The then method receives this object as the resolved value.
// You can access the message property and call the callback function
  
const myPromiseWithFun = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const data = {
      message: 'Promise fulfilled!',
      callback: () => {
        console.log('Callback function executed!');
      }
    };
    resolve(data);
  }, 1000);
});

myPromiseWithFun.then((result) => {
  console.log(result.message);
  result.callback();
});