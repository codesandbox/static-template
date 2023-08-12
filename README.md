## Building a Tic Tac Toe Game with HTML, CSS, and JavaScript

Tic Tac Toe, also known as Noughts and Crosses, is a classic two-player game that's both fun and challenging. In this tutorial, we will walk you through the process of creating a Tic Tac Toe game using HTML, CSS, and JavaScript.

<img width="1394" alt="Screenshot 2023-08-04 at 1 59 38 PM" src="https://github.com/developerrahulofficial/Tic-Tac-Toe-Game/assets/83329806/b59500a0-e261-4dc3-963a-f8881612bfce">


### Step 1: Setting Up the HTML Structure

Let's start by setting up the basic structure of our game using HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and stylesheets -->
    <!-- Link to external fonts and stylesheets -->
    <title>Tic Tac Toe</title>
</head>
<body>
    <!-- Your game elements will go here -->
</body>
</html>
```

### Step 2: Styling the Game with CSS

Now let's style the game elements using the provided CSS:

```css
/* Your provided CSS styles */
```

### Step 3: Adding JavaScript Logic

Next, we'll add the JavaScript code to make our game interactive. Below is the code you provided, along with some additional comments to explain each part:

```javascript
// Constants for player marks and winning combinations
const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    // ... (other combinations)
];

// Initialize game variables
let currentPlayerMark = O_CLASS;
let isVsPlayer = false;
let oTurn = false;

let xWin = 0;
let oWin = 0;
let tie = 0;

let winningArray;
let currentClass;

// ... (Other constants and variables)

// Function to handle game mode selection
function setGameModeHandler() {
    // Handle game mode selection here
}

// ... (Other functions)

// Event listeners for game mode buttons
vsCpuBtn.addEventListener('click', setGameModeHandler);
vsPlayerBtn.addEventListener('click', setGameModeHandler);
```

### Step 4: Handling User Interaction

In this step, we'll implement the logic to handle user interaction and gameplay. This includes functions for playing against the CPU and against another player.

```javascript
// Function to handle player's turn
function playHandler(event) {
    // Handle player's turn and gameplay logic here
}

// Function to check for a win
function checkWin(currentClass) {
    // Check if there is a win based on the current class
    // Return true if there's a win, false otherwise
}

// Function to check for a draw
function isDraw() {
    // Check if the game is a draw
    // Return true if it's a draw, false otherwise
}

// ... (Other functions)

// Event listener for player's moves
cells.forEach(cell => {
    cell.addEventListener('click', playHandler, { once: true });
});

// ... (Other event listeners and function calls)
```

### Step 5: Displaying Game Results

Finally, we'll implement the logic to display game results and handle restarts.

```javascript
// Function to handle end of the game
function endGame(draw) {
    // Handle displaying game result and options here
}

// Function to handle restarting the game
function setNextRound() {
    // Handle restarting the game here
}

// ... (Other functions)

// Event listeners for modal buttons
nextRoundBtn.addEventListener('click', setNextRound);
quitBtn.addEventListener('click', () => {
    location.reload();
});
```

### Conclusion

Congratulations! You've successfully created a Tic Tac Toe game using HTML, CSS, and JavaScript. This game demonstrates the core concepts of web development, including user interaction, event handling, and dynamic content updates.

Feel free to expand on this project by adding features like keeping track of game rounds, improving the user interface, or implementing more advanced AI for the CPU opponent. Happy coding!
