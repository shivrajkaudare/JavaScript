
const max = prompt("enter the max number :");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess the number");

while(true){
    if( guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("You are right😊 ! congrats !! random Number was :",random);
        break;
    }
    else if(guess < random){
       guess= prompt(" hint : Your guess was too small. please try again 😒");
    }
    else{
        guess = prompt("hint : your guess was too large. please guess again");
    }
}
