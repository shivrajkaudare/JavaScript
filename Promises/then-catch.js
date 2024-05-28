/*
 then() and catch() methods -

 then() : if we want to do some works or print something if promise is fullfilled.
 catch() : catch() catch the errors if promise is rejected.
*/

function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Data is saved to databased Successfully");
    } else {
      reject("Slow Newwork..Please Try again Later...");
    }
  });
}

// let request = savetoDB("Hello Dear JS lovers..");
// request
//   .then(() => {
//     console.log("Promise is resolved");
//   })
//   .catch(() => {
//     console.log("Promise is rejected");
//   });

// or

savetoDB("Hello Dear JS lovers..")
  .then(() => {
    console.log("Promise is resolved");
  })
  .catch(() => {
    console.log("Promise is rejected");
  });
