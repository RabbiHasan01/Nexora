// ==========================================
// game.js
// Main Game Controller
// ==========================================

// ----------------------------
// New Game
// ----------------------------

function startGame() {

    clearBoard();

    resetController();

    document.getElementById("winner").textContent = "None";

}

startGame();


// ----------------------------
// Called after every move
// ----------------------------

function afterMove(lastMove) {

    // Winner?
    if (typeof checkWinner === "function") {

        const winner = checkWinner(currentPlayer);

        if (winner) {

            declareWinner(currentPlayer);

            return;

        }

    }

    // Draw?

    if (isBoardFull()) {

        document.getElementById("winner").textContent = "Draw";

        gameOver = true;

        return;

    }

    // Next Player

    switchPlayer();

    updateTurnLabel();

    // AI Turn

    if (
        currentPlayer === PLAYER.RED &&
        typeof aiMove === "function"
    ) {

        setTimeout(() => {

            aiMove();

        }, 300);

    }

}


// ----------------------------
// Buttons
// ----------------------------

const btnNew = document.getElementById("newGame");

if (btnNew) {

    btnNew.onclick = startGame;

}


const btnUndo = document.getElementById("undo");

if (btnUndo) {

    btnUndo.onclick = function () {

        alert("Undo will be implemented later.");

    };

}


const btnAI = document.getElementById("aiMove");

if (btnAI) {

    btnAI.onclick = function () {

        if (
            typeof aiMove === "function" &&
            !gameOver
        ) {

            aiMove();

        }

    };

}
