 /***************** updating query setting usnig axios ***************/
 
 let url = "http://universities.hipolabs.com/search?name=";
 let btn = document.querySelector("button");

 btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await getCollege(country);
    console.log(collArr);
    show(collArr);
 });

 function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(college of collArr){
        console.log(college.name);
        // creating list and saving colleges names in it.
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }

 }
 async function getCollege(country){

    try{
        let result = await axios.get(url + country);
        return result.data;

    }
    catch(e){
        console.log("error",e);
        return [];
    }
 }