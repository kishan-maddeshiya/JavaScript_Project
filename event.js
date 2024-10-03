let btns=document.querySelectorAll(".btn");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame= () => {
    turnO=true;
    enablebtns();
    msgcontainer.classList.add("hide");
}; 


btns.forEach((btn) =>{
   btn.addEventListener("click",() =>{
    
    if(turnO)
    {
    btn.innerText="O";
    turnO=false;
   }
    else{
        btn.innerText="X";
        turnO=true;
    }
    btn.disabled=true;
    checkWinner();
   })
})

const disablebtns=()=>{
    for (let btn of btns){
        btn.disabled=true;
    }
};

const enablebtns=()=>{
    for (let btn of btns){
        btn.disabled=false;
        btn.innerText = ""; 
    }
};
const showWinner= (winner) =>{
    msg.innerText= `Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}
const checkWinner=()=>
{
    for(let pattern of winpattern)
    {
        let pos1val=btns[pattern[0]].innerText;
        let pos2val=btns[pattern[1]].innerText;
        let pos3val=btns[pattern[2]].innerText;
        if(pos1val!=0 && pos2val!=0 && pos3val!=0){
           if(pos1val===pos2val && pos2val===pos3val){
            
            showWinner(pos1val);
           }
        }
           
        

    }
}

