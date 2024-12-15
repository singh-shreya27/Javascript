let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#resetButton");
let newGameButton=document.querySelector("#newButton");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");


let turnO =  true; //playerX, playerO

const winPatterns =[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
      ];

const resetGame=()=>{
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){ //playerO
      box.innerText="O";
      turnO=false;
    }else{  //playerX
        box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    
    checkWinner();


    });
});

const disableBoxes=()=>{
    for (let box of boxes){
   box.disabled=true;

}
};


const enableBoxes=()=>{
    for (let box of boxes){
   box.disabled=false;
   box.innerText="";
}
};





const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   disableBoxes();
}


const checkWinner= ()=>{
    for(let pattern of winPatterns){
        
        let position1Val=  boxes[pattern[0]].innerText; 
        let pos2Val=  boxes[pattern[1]].innerText;
        let pos3Val=  boxes[pattern[2]].innerText;

        if(position1Val !="" && pos2Val !="" && pos3Val !=""){
            if(position1Val === pos2Val && pos2Val === pos3Val){

                showWinner(position1Val);

            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);