let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let game = document.querySelector(".game");

let turnO = true;

const winPatterns = [
    [0,1,2], // rows
    [3,4,5],
    [6,7,8],
    [0,3,6], //columns
    [1,4,7],
    [2,5,8],
    [0,4,8], //diagnols
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    game.classList.remove("hide");
    reset.classList.remove("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    disableBoxes();
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    game.classList.add("hide");
    reset.classList.add("hide");
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
    
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
            }

        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
