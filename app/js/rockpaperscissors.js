////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var move; // Write an expression that operates on a variable called `move`
    } 
    if (move === "rock") {
        return 'rock';
    }
    if (move === "paper") {
        return 'paper';
    }
    if (move === "scissors") {
        return 'scissors';
    } // If a `move` has a value, your expression should evaluate to that value.
    if (move === null) {
        return 'getInput()';
    } // However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getComputerMove(move) {
    var move; // Write an expression that operates on a variable called `move`
    } 
    if (move === "rock") {
        return 'rock';
    }
    if (move === "paper") {
        return 'paper';
    }
    if (move === "scissors") {
        return 'scissors';
    } // If a `move` has a value, your expression should evaluate to that value.
    if (move === null) {
        return 'randomPlay()';
    } // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.


function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "paper")     
        return "computer";
}   if (playerMove === "rock" && computerMove === "scissors") {
        return "player";
}   if (playerMove === "scissors" && computerMove === "paper") {
        return "player";
}   else {
    return "tie"
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while (playerMove < 5, computerMove < 5) {
    playerMove = getPlayerMove ();
    computerMove = getComputerMove ();
    winner = getWinner (playerMove, computerMove);
  }
if (winner === "player") {
    console.log("Player chose " + playerMove + " and computer chose" + computerMove + ". Player wins this round!");
}
else if (winner === "computer") {
    console.log("Player chose " + playerMove + " and computer chose " + computerMove + " . Computer wins this round.");
    console.log("The score is now " + playerWins + " to " + computerWins + ".");
  }
  return [playerWins, computerWins];
}










