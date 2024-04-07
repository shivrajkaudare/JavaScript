
/**************** fetch request using Promises. ******************************************/ 
let url = "https://catfact.ninja/fact";

fetch(url) // returns promise in the form of responce
// so we here using promise methods then and catch
.then((responce) =>{
     console.log(responce);
    return responce.json()   //data parse- convert data in readable format and this method also returns promise                 
    })
    .then((data) =>{
        console.log("data1 :",data);
    })
.catch((err) =>{
    console.log(err);
})



/********************** if we want to give multiple request.  ***************************/ 

fetch(url).then((responce) =>{
     console.log(responce);
     return responce.json();
})
.then((data1) =>{
    console.log("data1 :", data1);
    return fetch(url);
})
.then((responce) => {
    console.log(responce);
    return responce.json();
})
.then((data2) => {
    console.log(data2);
})
.catch((err) =>{
    console.log(err);
})