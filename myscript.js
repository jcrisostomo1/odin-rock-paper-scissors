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

let playerSelection = prompt("Enter: Rock Paper or Scissors?").toLocaleLowerCase();

let playRound = (playerSelection, computerSelection) => {
    console.log("Player Chose: " + playerSelection);
    console.log("Computer Chose: " + computerSelection);
    if(playerSelection === computerSelection) {
        return "It's a Tie!"
    } else if (playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return "You Win! Rock beats Scissors."
        } else if(computerSelection === "paper") {
            return "Computer Wins. Paper beats Rock."
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win! Paper beats Rock."
        } else if (computerSelection === "scissors") {
            return "Computer Wins. Scissors beat Paper."
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beat Paper."
        } else if (computerSelection === "rock") {
            return "Computer Wins. Rock beats Scissors."
        }
    } else {
        return "Please enter a valid entry."
    }
    
}
console.log(playRound(playerSelection, computerPlay()));