var startBtn = document.getElementById("start");

startBtn.addEventListener("click",startGameHandler);

function startGameHandler(){ //changes screen to desired location
    introScreen.style.display="none";
    gameScreen.style.display="block";
}
function endGame(){
    introScreen.style.display="none";
    gameScreen.style.display="none";
    endScreen.style.display="block";

}

/*     above is for start screen and screen transitions.... below is game screen    */

var uScore = 0; //line 18-25 sets all global varibles for the program
var compScore = 0;
var userScore = document.getElementById("user-score");
var computerScore = document.getElementById("computer-score");
var result = document.querySelector(".result > p");
var fire = document.getElementById("f");
var plant = document.getElementById("p");
var water = document.getElementById("w");

function convertToWord(letter){ //receives letter from the win/lose/tie funtions to return original choice spelled out for both comp and player
    if (letter === "f") return "Fire";
    if (letter === "p") return "Plant";
    return "Water";
}

function win(uChoice, cChoice){ //displays win text
    uScore++;
    userScore.innerHTML=uScore;
    result.innerHTML = convertToWord(uChoice)+" beats "+convertToWord(cChoice)+", you win!";
}
function lose(uChoice, cChoice){ //displays lose text
    compScore++;
    computerScore.innerHTML=compScore;
    result.innerHTML = convertToWord(uChoice)+" lost to "+convertToWord(cChoice)+", you lose!";
} 
function tie(uChoice){ //displays tie text
    result.innerHTML = convertToWord(uChoice)+" is the same as "+convertToWord(uChoice)+", you tie!";
}


function getComputerChoice(){ //gets random number and returns char of choice
    var choice = ["f", "p", "w"];
    var randomNum = Math.floor(Math.random()*3);
    return choice[randomNum];
}


function game(userChoice){
    if(uScore < 5 && compScore < 5){ //checks to see if the game is done yet if not, round is continued
    var compChoice = getComputerChoice();
    switch (userChoice+compChoice){ //switched used with string to check result of round
        case "fp":
        case "pw":
        case "wf":
            win(userChoice, compChoice);
        break;
        case "pf":
        case "wp":
        case "fw":
            lose(userChoice, compChoice);
        break;
        case "ff":
        case "pp":
        case "ww":
            tie(userChoice);
        break;
    }
    }
    if (uScore >= 5 || compScore >=5){ //checks to see if game is done
    if(uScore > compScore) {
        result.innerHTML="Congratulations, You won! Final score was "+uScore+" to "+compScore+"!";
        setTimeout(function(){endGame();},3000); //setTimeout creates a delay before transition to final screen
    }
    else {
        result.innerHTML="Unfortunantely you lost! Final score was "+uScore+" to "+compScore+"!";
        setTimeout(function(){endGame();},3000);}
    }
}

fire.addEventListener('click', function(){ //addes event listener to button
game("f");
});
plant.addEventListener('click', function(){ //addes event listener to button
game("p");
});
water.addEventListener('click', function(){ //addes event listener to button
game("w");
});
