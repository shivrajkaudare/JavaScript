
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let op = getFacts();
    let p = document.querySelector("#result");
    p.innerText = op;
})


let url = "https://catfact.ninja/fact";

 async function getFacts(){
    try{
        let resp = await axios.get(url);
        let data = axios.data;
        console.log(data);
    }
    catch(err){
        console.log("error :", err);
    }
 }