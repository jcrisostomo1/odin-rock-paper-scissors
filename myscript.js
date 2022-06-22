let computerPlay = () => {
    let computerSelection = ''; 
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            computerSelection = "rock"
        break;
        case 1:
            computerSelection = "paper"
        break;
        case 2:
            computerSelection = "scissors"
        break;
        default: 
            computerSelection = "error"
        break;
    }
    return computerSelection;
}

let ties = parseInt(document.querySelector(".score-tie p").textContent);
let playerWins = parseInt(document.querySelector(".score-player p").textContent);
let computerWins = parseInt(document.querySelector(".score-computer p").textContent);
let winner = document.querySelector(".winner p");


let playRound = (playerSelection ,computerSelection) => {
    while (playerWins !== 5 && computerWins !== 5) {
        if(playerSelection === computerSelection) {
            console.log("It's a Tie!")
            return 0;
        } else if (playerSelection === "rock") {
            if(computerSelection === "scissors") {
                console.log("You Win! Rock beats Scissors.");
                return 1;
            } else if(computerSelection === "paper") {
                console.log("Computer Wins. Paper beats Rock.");
                return 2;
            }
        } else if (playerSelection === "paper") {
            if(computerSelection === "rock") {
                console.log("You Win! Paper beats Rock.");
                return 1;
            } else if (computerSelection === "scissors") {
                console.log("Computer Wins. Scissors beat Paper.");
                return 2;
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                console.log("You win! Scissors beat Paper.");
                return 1;
            } else if (computerSelection === "rock") {
                console.log("Computer Wins. Rock beats Scissors.");
                return 2;
            }
        } else {
            console.log("Please enter a valid entry.")
            return -1;
        }
    }
}

let keepScore = result => {
    switch (result) {
        case 0 :
            ties++;
            break;
        case 1 :
            playerWins++;
            break;
        case 2 : 
            computerWins++;
            break;
        case -1 :
            break;
    }
    document.querySelector(".score-tie p").textContent = ties;
    document.querySelector(".score-player p").textContent = playerWins;
    document.querySelector(".score-computer p").textContent = computerWins;
    if (playerWins === 5 || computerWins === 5) {
        if (playerWins > computerWins) {
            winner.textContent = "YOU!";
        } else {
            winner.textContent = "COMPUTER!"
        }
        
    }
}

let rockBtn = document.getElementById("rock-btn");
rockBtn.addEventListener('click', () => {
    let result = playRound(rockBtn.textContent.toLocaleLowerCase(), computerPlay());
    keepScore(result);
});

let paperBtn = document.getElementById("paper-btn");
paperBtn.addEventListener("click", () => {
    let result = playRound(paperBtn.textContent.toLowerCase(), computerPlay());
    keepScore(result);
});

let scissorsBtn = document.getElementById("scissors-btn");
scissorsBtn.addEventListener('click', () => {
    let result = playRound(scissorsBtn.textContent.toLowerCase(), computerPlay());
    keepScore(result);
});