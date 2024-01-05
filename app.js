let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
//playerX,playerO

let turnO=true;

//ab store kr lengai ki kaise kaise win hoga uska multi d array bna lengai
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
   }


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("Button was clicked")
    if(turnO===true){
        box.innerText="O"//PlayerO
        box.style.color="dodgerblue";
        turnO=false;
    }
    else{
        box.innerText="X"; //Player X
        turnO=true;
    }
    box.disabled=true;
    checkWin();
  });
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulation to the winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   };
   
   
const checkWin=()=>{
    for(let pattern of winPattern)
    {
        let pos0=boxes[pattern[0]].innerText;
        let pos1=boxes[pattern[1]].innerText;
        let pos2=boxes[pattern[2]].innerText;
        if(pos0!=="" &&pos1!=="" &&pos2!=="")
        {
            if(pos0==pos1 && pos1==pos2)
            {
                console.log("winner", pos0);
                showWinner(pos0);
            }
        }

    }
}



newGame.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame);