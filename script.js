"use strict";


// returns an integer between 0 and n-1
function getRandomInteger(n) {
    return Math.floor((Math.random() * n));
}

// Returns "rock" "paper" or "scissors" randomly
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInteger(3)];
}
