let userScore  = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// Display Message
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.color = "#333533";
}

const showWinnner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
}

// Generate Computer Choice
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            //scissors , paper
            userWin = compChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper") {
            //rock , scissors
            userWin = compChoice === "Scissors" ? false: true;
        } else {
            //rock , paper
            userWin = compChoice === "Rock" ? false: true;
        }
        showWinnner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});