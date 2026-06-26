// ==========================================
// clickHandler.js
// Handles all mouse interactions
// ==========================================

let currentPlayer = PLAYER.GREEN;
let gameOver = false;

// ----------------------------
// Attach click listeners
// ----------------------------
function registerBoardEvents() {

    circles.forEach((circle, index) => {

        circle.addEventListener("click", () => {

            onNodeClicked(index);

        });

    });

}

// ----------------------------
// Node Click
// ----------------------------
function onNodeClicked(index) {

    if (gameOver)
        return;

    // Cannot place on occupied node
    if (!isEmpty(index))
        return;

    const success = placePiece(index, currentPlayer);

    if (!success)
        return;

    showLastMove(index);

    updateTurnLabel();

    // Ask game controller to check winner
    if (typeof afterMove === "function")
        afterMove(index);

}

// ----------------------------
// Switch Player
// ----------------------------
function switchPlayer() {

    if (currentPlayer === PLAYER.GREEN)
        currentPlayer = PLAYER.RED;
    else
        currentPlayer = PLAYER.GREEN;

}

// ----------------------------
// Update UI
// ----------------------------
function updateTurnLabel() {

    const turn = document.getElementById("turn");

    if (!turn)
        return;

    turn.textContent =
        currentPlayer === PLAYER.GREEN ?
        "Green" :
        "Red";

}

// ----------------------------
// Winner UI
// ----------------------------
function declareWinner(player) {

    gameOver = true;

    const winner = document.getElementById("winner");

    if (!winner)
        return;

    winner.textContent =
        player === PLAYER.GREEN ?
        "Green Wins" :
        "Red Wins";

}

// ----------------------------
// Reset Controller
// ----------------------------
function resetController() {

    currentPlayer = PLAYER.GREEN;

    gameOver = false;

    updateTurnLabel();

}

registerBoardEvents();
