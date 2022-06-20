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


let playRound = (computerSelection) => {
    let playerSelection = prompt("Enter: Rock Paper or Scissors?").toLocaleLowerCase();
    console.log("Player Chose: " + playerSelection);
    console.log("Computer Chose: " + computerSelection);
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

let game = () => {
    let ties = 0;
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        let result = playRound(computerPlay());
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
                console.log("Error");
                break;
        }
    }
    console.log("Ties: " + ties);
    console.log("Player Wins: " + playerWins);
    console.log("Computer Wins: " + computerWins);
    if (playerWins > computerWins) {
        console.log("YOU WON!");
    } else if (playerWins < computerWins) {
        console.log("You lost! :(");
    } else if (playerWins === computerWins) {
        console.log("It's a Tie!")
    }

}

game();