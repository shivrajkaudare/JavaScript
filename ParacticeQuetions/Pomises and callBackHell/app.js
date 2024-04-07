
// function savetoDb(data, sucess, failure){
//     let internateSpeed = Math.floor(Math.random()* 10)+1;
//     if(internateSpeed > 4){
//         sucess();
//     }else{
//         failure();
//     }
// }

// // call-back Hell
// savetoDb(
//     "hello", 
//     () => {
//     console.log("sucess: your data was saved");
//     savetoDb("hello word",()=>{
//         console.log("success2: data2 was saved");
//     }, () =>{
//         console.log("failure2: weak connection");
//     })
// },
// () => {
//     console.log("Failure: your data was not saved");
// }
// );


///---- Promises ----
// 1)- resolve & reject

function savetoDb(data){
    return new Promise((resolve, reject) => {
       let internateSpeed = Math.floor(Math.random()* 10) + 1;
       if(internateSpeed > 4){
        resolve("success : data was saved");
       }else{
        reject("failure : weak connection");
       }

    });
}

savetoDb("Shivraj Kaudare");


// 2) then() & catch()

// let request = savedatatoDb("Hii there iam shivraj");

//  request.then(() => {
//     console.log("promise resolved");
//  })
//  .catch(() => {
//     console.log("Promise Rejected");
//  });
 // OR we can write it in another way
savetoDb("Hii there iam shivraj kaudare")
.then(() => {
    console.log("promise Was Resolved");
})
.catch(() => {
    console.log("promise was rejected")
});