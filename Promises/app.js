/*
 resolve and reject keywords-
  resolve : promise fullfilled / success.
  reject : failure 
*/

function saveData(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Data Saved Successfully");
    } else {
      reject("Slow network..Try again later");
    }
  });
}

saveData("Hello my name is Shiv");

// when JS API's request to the server promises promise that no matter request failure or successful it always returns a response.
