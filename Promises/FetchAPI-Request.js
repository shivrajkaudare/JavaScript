// Fetch is used to make API's Request in JavaScript (HTTP Request).
// Fetch is used to fetch Resources from server.

let url = "https://catfact.ninja/facts";

fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
