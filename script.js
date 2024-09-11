"use strict";

const choices = ["rock", "paper", "scissors"];


// returns an integer between 0 and n-1
function getRandomInteger(n) {
    return Math.floor((Math.random() * n));
}

// Returns "rock" "paper" or "scissors" randomly
function getComputerChoice() {
    return choices[getRandomInteger(3)];
}

// prompts the user and returns the choice if valid
function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?").toLocaleLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt("Wrong input.\nrock, paper or scissors?").toLocaleLowerCase();
    }

    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // takes the computer and player choices as inputs
    // determines the winner and increases score
    function playRound(humanChoice, computerChoice) {
        // handle simplest case: a draw
        if (humanChoice === computerChoice) {
            console.log(`It's a draw, ${humanChoice} cannot beat another ${humanChoice}.`);
            return;
        }
        switch (computerChoice) {
            case "rock":
                if (humanChoice === "paper") {
                    console.log(`You win! Paper beats Rock`);
                    humanScore++;
                    return;
                }
                console.log(`You lose! Rock beats Scissors`);
                computerScore++;
                return;
            case "paper":
                if (humanChoice === "scissors") {
                    console.log(`You win! Scissors beats paper`);
                    humanScore++;
                    return;
                }
                console.log(`You lose! Paper beats Rock`);
                computerScore++;
                return;
            case "scissors":
                if (humanChoice === "rock") {
                    console.log(`You win! Rock beats scissors`);
                    humanScore++;
                    return;
                }
                console.log(`You lose! Scissors beats Paper`);
                computerScore++;
                return;
        }
    }

    // game loop
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // determine winner
    if (humanScore > computerScore) {
        console.log(`You win the game!!!`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lose...`);
    }
    else {
        console.log(`It's a draw!`);
    }
    console.log(`Final scores: human ${humanScore} - computer ${computerScore}`);
}

playGame()