// Create variables for the game state
let player1Score = 0
let player2Score = 0

// Create variables to store references to the necessary DOM nodes
const Dice1 = document.getElementById("Dice1")
const Dice2 = document.getElementById("Dice2")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const player1Btn = document.getElementById("player1Btn")
const player2Btn = document.getElementById("player2Btn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    resetBtn.style.display = "block"
}

player1Btn.addEventListener("click", function() {
    const randomNumber3 = Math.floor(Math.random() * 6) + 1
    const randomNumber4 = Math.floor(Math.random() * 6) + 1
    player1Score += randomNumber3 + randomNumber4
    player1Scoreboard.textContent = player1Score
    Dice1.textContent = randomNumber3
    Dice2.textContent = randomNumber4
    player1.classList.remove("active")
    player2.classList.add("active")
    message.textContent = "Player 2 Turn"
    if (player1Score >= 30) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }
})

player2Btn.addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1
    player2Score += randomNumber1 + randomNumber2
    player2Scoreboard.textContent = player2Score
    Dice1.textContent = randomNumber1
    Dice2.textContent = randomNumber2
    player2.classList.remove("active")
    player1.classList.add("active")
    message.textContent = "Player 2 Turn"
    if (player2Score >= 30) {
        message.textContent = "Player 2 Won 🥳"
        showResetButton()
    }
})

/* player1Btn.addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber1 + randomNumber2
        player1Scoreboard.textContent = player1Score
        Dice1.textContent = randomNumber1
        Dice2.textContent = randomNumber2
        player1.classList.remove("active")
        player2.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber1 + randomNumber2
        player2Scoreboard.textContent = player1Score
        Dice1.textContent = randomNumber1
        Dice2.textContent = randomNumber2
        player2.classList.remove("active")
        player1.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
*/


 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    Dice1.textContent = "-"
    Dice2.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    player2.classList.remove("active")
    player1.classList.add("active")
}
