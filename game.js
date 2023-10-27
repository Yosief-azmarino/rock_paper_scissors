const options = ["Rock", "Paper", "Scissor"]

const playerName = "Yosief"


let playerScore = 0
let computerScore = 0
let rounds = 0

let gameOn = true

while (gameOn) {
    const computerOption = options[Math.floor(Math.random() * 3)]
    const playerOption = prompt("Choose an option: Rock, Paper, or Scissor")

    rounds++ // Increment the number of rounds

    if (playerOption === computerOption) {
        console.log("Draw!")
    } else if (
        (playerOption === "Rock" && computerOption === "Scissor") ||
        (playerOption === "Paper" && computerOption === "Rock") ||
        (playerOption === "Scissor" && computerOption === "Paper")
    ) {
        console.log("Player wins this round!")
        playerScore++
    } else {
        console.log("Computer wins this round!")
        computerScore++
    }

    console.log(`Player score: ${playerScore} - Computer score: ${computerScore}`)

    // Check if the game should end
    if (rounds > 5) {
        gameOn = false;
    }
}

// the final winner based on the scores
if (playerScore > computerScore) {
    console.log(`Player ${playerName} wins the game!`);
} else if (playerScore < computerScore) {
    console.log(`Computer wins the game!`);
} else {
    console.log("It's a tie!");
}



// module.exports = {
//     playGame
// }






