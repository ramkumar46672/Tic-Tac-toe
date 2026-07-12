let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

var a = 5;
let turnO = true;
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
 const resetgame = () =>{
  turnO = true;
  enablebox();
  msgcontainer.classList.add("hide");
 }
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        box.innerText = "R";
        if(turnO){
          box.innerText = "X";
          turnO = false;
        }
        else{
          box.innerText = "O";
          turnO = true;
        }
        box.disabled = true;//disable button
        checkWinner();
    });
});
  const disablebox =  () =>{
    for (let box of boxes){
      box.disabled = true;
    }
  }
   const enablebox =  () =>{
    for (let box of boxes){
      box.disabled = false;
      box.innerText="";
    }
  }
 const showWinner = (winner) =>{
      msg.innerText = `Congratulations, Winner is ${winner}`;
      msgcontainer.classList.remove("hide");
      disablebox();
    }
const checkWinner = () =>{
  for(let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
  
  if(pos1val !="" && pos2val !="" && pos3val !="" ){
  if(pos1val == pos2val && pos2val == pos3val)
  {
    showWinner(pos1val);
  }
  }
}
};
newgamebtn.addEventListener("click", resetgame);
reset_btn.addEventListener("click", resetgame);