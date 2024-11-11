let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const USER_OUTPUT = document. getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const ROCK = document.getElementById("rock");
const PAPER = document. getElementById("paper");
const SCISSORS = document .getElementById("scissors");

const RESULT = document. getElementById("result");
const SCORE_BOARD = document. getElementById("score-board");

PAPER.addEventListener("click" ,function () {
    computerChoice();
    userHand = "Paper";
    calculateResult();
    changeColor();
});

ROCK.addEventListener("click" ,function () {
    computerChoice();
    userHand = "Rock";
    calculateResult();
    changeColor();
});

SCISSORS.addEventListener("click" ,function () {
    computerChoice();
    userHand = "Scissors";
    calculateResult();
    changeColor();
});

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerHand = "Rock";
    } else if (randomNumber == 1) {
    computerHand = "Paper";
    } else {
    computerHand = "Scissors";
    }
}


function calculateResult() {
    if (
        (userHand == "Rock" && computerHand == "Scissors") ||
        (userHand == "Paper" && computerHand == "Rock") ||
        (userHand == "Scissors" && computerHand == "Paper")
        ){
        userScore++;
        USER_OUTPUT.innerHTML = userScore;
        RESULT.innerHTML =
        userHand +
        "<sup>(user)</sup> Beats " +
        computerHand +
        "<sup>(computer)</sup>. You Win!";
        
        roundResult = "You Win";
        } else if(
        (computerHand =="Rock" && userHand =="Scissors") ||
        (computerHand == "Paper" && userHand == "Rock") ||
        (computerHand =="Scissors" && userHand== "Paper") 
        
    ){
        computerScore++;
        COMPUTER_OUTPUT.innerHTML = computerScore;
        RESULT.innerHTML =
        computerHand +
        "<sup>(computer)</sup> Beats" +
        userHand +
        "<sup>(user)</fup>. You Lose!";
        roundResult = "You Lose";


    }
}

function changeColor(){
    if (roundResult == "You Win") {
        SCORE_BOARD.style.backgroundColor = "#4caf50";
    } else if (roundResult == "You Lose") {
        SCORE_BOARD.style.backgroundColor = "#f44336";
    }else {
        SCORE_BOARD.style.backgroundColor = "#2196f3";
    }

}