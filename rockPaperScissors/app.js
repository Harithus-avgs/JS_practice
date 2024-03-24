let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScore1 = document.querySelector("#user-score");
const computerScore1 = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const drawGame = () => {
    msgPara.style.backgroundColor = "darkgray";
    msgPara.innerText = "Draw";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScore1.innerText = userScore;
        msgPara.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msgPara.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScore1.innerText = computerScore;
        msgPara.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    let computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice, computerChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});