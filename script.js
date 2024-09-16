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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let isGameOver = false;

    const score = document.querySelector("#score");
    const results = document.querySelector("#results");
    results.textContent = "";

    
    function updateScoreText() {
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }

    updateScoreText();

    function playRound(humanChoice, computerChoice) {
        //reset if game was over
        if (isGameOver) {
            results.textContent = "";
            humanScore = 0;
            computerScore = 0;
            score.style.color = "white";
            updateScoreText();
            isGameOver = false;
        }
        // handle simplest case: a draw
        if (humanChoice === computerChoice) {
            results.textContent += `It's a draw, ${humanChoice} cannot beat another ${humanChoice}.\r\n`;
        }
        else {
            switch (computerChoice) {
                case "rock":
                    if (humanChoice === "paper") {
                        results.textContent += `You win! Paper beats Rock\r\n`;
                        humanScore++;
                    }
                    else {
                        results.textContent += `You lose! Rock beats Scissors\r\n`;
                        computerScore++;
                    }
                    break;
                case "paper":
                    if (humanChoice === "scissors") {
                        results.textContent += `You win! Scissors beats paper\r\n`;
                        humanScore++;
                    }
                    else {
                        results.textContent += `You lose! Paper beats Rock\r\n`;
                        computerScore++;
                    }
                    break;
                case "scissors":
                    if (humanChoice === "rock") {
                        results.textContent += `You win! Rock beats scissors\r\n`;
                        humanScore++;
                    }
                    else {
                        results.textContent += `You lose! Scissors beats Paper\r\n`;
                        computerScore++;
                    }
                    break;
            }
        }

        updateScoreText();

        if (humanScore === 5 || computerScore === 5) {
            isGameOver = true;

            // determine winner
            if (humanScore > computerScore) {
                results.textContent += `You win the game!!!`;
                score.style.color = "green";
            }
            else if (humanScore < computerScore) {
                results.textContent += `You lose...`;
                score.style.color = "red";
            }
        }
    }

    for (let button of document.querySelectorAll("button")) {
        switch (button.id) {
            case "btn-rock":
                button.addEventListener("click", () => { playRound("rock", getComputerChoice()) });
                break;
            case "btn-paper":
                button.addEventListener("click", () => { playRound("paper", getComputerChoice()) });
                break;
            case "btn-scissors":
                button.addEventListener("click", () => { playRound("scissors", getComputerChoice()) });
                break;
        }
    }
}

playGame()