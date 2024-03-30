let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomcolor = getRandomColor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

    console.log("color updated");

});


 function getRandomColor() {
    let red = math.floor(math.random() * 255);
    let green = math.floor(math.random() * 255);
    let blue = math.floor(math.random() * 255);


    let color = `rgb (${red}, ${green}, ${blue})`
    return color;
 }