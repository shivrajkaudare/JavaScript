function saveData(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Promise is resolved");
    } else {
      reject("Promise is rejected");
    }
  });
}

// Promise chaining-

saveData("hello i am shiv")
  .then(() => {
    console.log("data1 is saved..");
    return saveData("Hello i am raj");
  })
  .then(() => {
    console.log("data2 is saved..");
    return saveData("my sir name is Kaudare");
  })
  .then(() => {
    console.log("data3 is saved..");
  })
  .catch(() => {
    console.log(" Promise is rejected..");
  });
