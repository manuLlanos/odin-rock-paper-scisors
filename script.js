"use strict";

const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;


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
    let choice = prompt("rock, paper or scissors?");
    while (!choices.includes(choice)) {
        choice = prompt("Wrong input.\nrock, paper or scissors?");
    }

    return choice;
}
