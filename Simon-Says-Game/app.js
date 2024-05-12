let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {

    if(started == false ){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    },400);
}
function userFlash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // chose random idx no from btns arr.

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx) {
       if(userSeq[idx] === gameSeq[idx]){
         if (userSeq.length == gameSeq.length){
             setTimeout(levelUp, 1000);
         }
           
       }else{
         h2.innerHTML = `Game Over !!😒 your score was <b>${level}</b> <br> press any key to Restart the game.`;
         document.querySelector("body").style.color = "red";
         setTimeout(function() {

         }, 150);
         restart();   
        }
}
function btnPress(){
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for( let btn of allBtns){
     
    btn.addEventListener("click",btnPress);

}

// to restart the game after game over.

function restart(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}