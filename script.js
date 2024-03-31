let stone=document.querySelector("#stone")
let paper=document.querySelector("#paper")
let scissor=document.querySelector("#scissor")

let compValue
let playerValue
function comp()
{
    let ran_num=Math.random()*100;
    if(ran_num<33)
    {
        compValue="st";
    }
    else if(ran_num<66)
    {
        compValue="p";
    }
    else{
        compValue="sc";
    }
}

let obj={
    st:"Stone",
    p:"Paper",
    sc:"Scissor"
}

let compScore=document.querySelector(".Cscore");
let playerScore=document.querySelector(".Yscore");
let resultButton=document.querySelector(".result");
let Cpoint=0;
let Ppoint=0;


function checkWin(compValue,playerValue)
{
    if(compValue===playerValue)
    {
        resultButton.innerHTML="Match Tie";
        resultButton.style.backgroundColor="#1C3041";
    }

    else if(compValue==="st" &&  playerValue=="sc" || compValue==="p" &&  playerValue=="st" || compValue==="sc" &&  playerValue=="p")
    {
        Cpoint++;
        compScore.innerHTML=Cpoint;
        resultButton.innerHTML=`${obj[compValue]} win over ${obj[playerValue]}`;
        resultButton.style.backgroundColor="red";


    }
    else{
        Ppoint++;
        playerScore.innerHTML=Ppoint;
        resultButton.innerHTML=`${obj[playerValue]} win over ${obj[compValue]}`;
        resultButton.style.backgroundColor="green";

    }

}



stone.addEventListener("click",()=>{
    playerValue="st";
    comp();
    console.log("player: ",playerValue);
    console.log("comp: ",compValue);
    checkWin(compValue,playerValue);
})

paper.addEventListener("click",()=>{
    playerValue="p";
    comp();
    console.log("player: ",playerValue);
    console.log("comp: ",compValue);
    checkWin(compValue,playerValue);
})

scissor.addEventListener("click",()=>{
    playerValue="sc";
    comp();
    console.log("player: ",playerValue);
    console.log("comp: ",compValue);
    checkWin(compValue,playerValue);
})


let newGameBtn=document.querySelector(".newGame");
newGameBtn.addEventListener("click",()=>{
    Cpoint=0;
    Ppoint=0;
    compScore.innerHTML=Cpoint;
    playerScore.innerHTML=Ppoint;
    resultButton.innerHTML="Pick Your Move";
    resultButton.style.backgroundColor="#1C3041";
})