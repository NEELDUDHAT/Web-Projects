let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame=()=>{
    msg.textContent="Game was Draw! Play again.";
    msg.style.backgroundColor="#081b31";

}
const updateScore=(userWin)=>{
    if(userWin)
    {
        userScore++;
        uScore.textContent=userScore;
    }
    else{
        compScore++;
        cScore.textContent=compScore;
    }
}
const showWinner=(userWin)=>{
    if(userWin)
    {
        msg.textContent="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        msg.textContent="You Lose!";
        msg.style.backgroundColor="red";
    }
    updateScore(userWin);
}
const playGame=(userChoice)=>{
    console.log("user choice:",userChoice)
    const compChoice=genCompChoice();
    console.log("comp choice:",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

