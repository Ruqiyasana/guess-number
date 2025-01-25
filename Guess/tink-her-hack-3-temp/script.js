// Variables for the game
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let attempts = 0;
const guessInput = document.getElementById("guess");
const resultMessage = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");
const submitButton = document.getElementById("submitGuess");
const playAgainButton = document.getElementById("playAgain");

// Event listener for the submit button
submitButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = "Please enter a number between 1 and 100!";
        resultMessage.style.color = "red";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        resultMessage.style.color = "green";
        playAgainButton.style.display = "block"; // Show play again button
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = "Too low! Try again.";
        resultMessage.style.color = "orange";
    } else {
        resultMessage.textContent = "Too high! Try again.";
        resultMessage.style.color = "orange";
    }
});

// Event listener for the play again button
playAgainButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Reset the random number
    attempts = 0;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    resultMessage.textContent = "";
    guessInput.value = "";
    playAgainButton.style.display = "none"; // Hide play again button
});
