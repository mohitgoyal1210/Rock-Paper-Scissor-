let userScore = 0;
let computerScore = 0;
// cashing(for future use) the memory
const userScore_span =  document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_div = document.querySelector(".result > h1");
const rock_btn = document.getElementById("Rock");
const paper_btn = document.getElementById("Paper");
const scissor_btn = document.getElementById("Scissors");
// Computer Choices
function getComputerChoices(){
    const choices = ['Rock','Paper','Scissors'];
    const random_number = Math.floor(Math.random()*3);  //Math floor for round off // Math.random for random number
    return choices[random_number];
}
// Win / lose / draw
function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    result_div.innerHTML= user+ smallUserWord+ " beats "+ computer + smallCompWord+". You win 🔥🎖️ ";
    // document.getElementById("choices").classList.add('green-glow')
    // setTimeout(function(){document.getElementById(choices).classList.remove("green-glow")})
}
function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    result_div.innerHTML= user+smallUserWord+" lose "+ computer + smallCompWord+ " You Looose.. 🤙 ";
}
function draw(){
    
    
    result_div.innerHTML= "Draw Match";
}

// create a game function
function game(userChoices){
    const computerchoice = getComputerChoices()
    switch(userChoices+computerchoice){
        case "RockPaper":
        case "PaperRock":
        case "ScissorsPapers":
            win(userChoices,computerchoice);
            break;
        case "RockScissors":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoices,computerchoice); 
            break;                 
        case "RockRock":
        case "ScissorsScissors": 
        case "PaperPaper":
            draw(userChoices,computerchoice);
            break;   
    }
}

// add some event listener
rock_btn.addEventListener('click',function(){
    // console.log("u have just click on rock");
    game("Rock");
});
paper_btn.addEventListener('click',function(){
    // console.log("u have just click on paper");
    game("Paper");
})
scissor_btn.addEventListener('click',function(){
    // console.log("u have just click on scissor");
    game("Scissors");
})
