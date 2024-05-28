// async functions always return a Promise.
// await- used to wait for promise and gets its fullfilled value.

// ex.- a function which generates a three random number each number is generated after 1 sec (use async and await keywords).

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random * 10) + 1;
      console.log(randomNum);
      resolve("number is genereted");
    });
  });
}

// async finction and await keyword.
async function demo() {
  await getNum();
  await getNum();
  getNum();
}

/*------------- Error handling with await-------------------*/

// try and catch block is used in error handling ..
