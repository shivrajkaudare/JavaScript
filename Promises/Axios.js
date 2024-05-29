// Axios get the responce in readable format i.e JSON data so there is no need to parse it like fetch.
// axios is used to make HTTp requests like get and post.

let url = "https://catfact.ninja/facts";
async function getfacts() {
  try {
    let res = axios.get(url);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
