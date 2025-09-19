let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true //player0, player1
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            //Player0
            box.innerText = "O";
            box.style.color = "blue";
            turn0 = false;
        } else {
            //Player X
            box.innerText = "X";
            box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

//Disable Boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};

//Enable Boxes
const enaableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

//Winner
const showWinner = (Winner) => {
    msg.innerText = `Congratulation, winner is  ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

//CheckWinner Show
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            };
        };
    };
};

//Reset
const resetGame = () => {
    turn0 = true;
    enaableBoxes();
    msgcontainer.classList.add("hide");
};
//Reset...//NewGame...
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);