let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let reset2 = document.querySelector("#reset2");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let game = document.querySelector(".game");
let turns = 0;
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
    turns = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    game.classList.remove("hide");
    reset.classList.remove("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        turns++;
        if(turnO){
            box.style.color = "#b0413e";
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.style.color = "blue";
            box.innerText = "x";
            turnO = true;
            
        }
        box.disabled = true;

        checkWinner();
        console.log(turns);
        checkDraw(turns);
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
    turns = 0;
    disableBoxes();
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    game.classList.add("hide");
    reset.classList.add("hide");
    reset2.classList.add("hide");
};

const checkDraw = (turns) => {
    if(turns === 9){
        msg.innerText = "Draw";
        msgContainer.classList.remove("hide");
        newGame.classList.add("hide");
        game.classList.add("hide");
        reset2.classList.remove("hide");
    }
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
reset2.addEventListener("click", resetGame);
