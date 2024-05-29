// making fetch Request using async and await.
// we used try and catch for error handling
let url = "https://catfact.ninja/facts";

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
