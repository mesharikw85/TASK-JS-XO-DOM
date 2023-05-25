// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
//fillButton(1, "X");
//fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
// Define the game board
let gameBoard = ["", "", "", "", "", "", "", "", ""];
// Define the current player
let currentPlayer = "X";

// This function is called when any button is clicked in the game
function clickButton(index) {
  console.log(`Button number ${index} is clicked`); // Display a message containing the button number that was clicked
  // Your main code here.

  if (gameBoard[index - 1] === "") {
    // Check if the clicked button has not been clicked before
    gameBoard[index - 1] = currentPlayer; // Assign the current player to the clicked button
    fillButton(index, currentPlayer); // Fill the clicked button with the current player's symbol "X" or "O"
    if (checkWinner(currentPlayer)) {
      // Check if there is a winner in the game
      winningAlert(currentPlayer); // Display a message indicating the current player won
      resetGame(); // Reset the game after a win
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch the current player between "X" and "O"
    }
  } else {
    alert("This square is already taken!"); // Display a warning message if the clicked button is already taken
  }
}

// This function checks if there is a winner in the game
function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check if any of the winning combinations exists in the game board
  return winningCombinations.some((combination) =>
    combination.every((index) => gameBoard[index] === player)
  );
}

// This function resets the game board and current player to their default values
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  for (let i = 1; i <= 9; i++) {
    fillButton(i, ""); // Clear all buttons text
  }
  currentPlayer = "X"; //Reset current player to "X"
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
