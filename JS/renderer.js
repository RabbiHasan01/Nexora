// ==========================================
// renderer.js
// Handles all visual updates of the board
// ==========================================

const boardState = new Array(NODES.length).fill(PLAYER.EMPTY);

// ------------------------------------------
// Get piece at a position
// ------------------------------------------

function getPiece(index) {

    return boardState[index];

}

// ------------------------------------------
// Is node empty?
// ------------------------------------------

function isEmpty(index) {

    return boardState[index] === PLAYER.EMPTY;

}

// ------------------------------------------
// Place a piece
// ------------------------------------------

function placePiece(index, player) {

    if (!isEmpty(index))
        return false;

    boardState[index] = player;

    paintNode(index, player);

    return true;

}

// ------------------------------------------
// Remove piece (Undo / AI Search)
// ------------------------------------------

function removePiece(index) {

    boardState[index] = PLAYER.EMPTY;

    paintNode(index, PLAYER.EMPTY);

}

// ------------------------------------------
// Reset board
// ------------------------------------------

function clearBoard() {

    for (let i = 0; i < boardState.length; i++) {

        boardState[i] = PLAYER.EMPTY;

        paintNode(i, PLAYER.EMPTY);

    }

}

// ------------------------------------------
// Highlight last move
// ------------------------------------------

function showLastMove(index) {

    clearHighlights();

    highlightNode(index);

}

// ------------------------------------------
// Count pieces
// ------------------------------------------

function countPieces(player) {

    let count = 0;

    for (let value of boardState) {

        if (value === player)
            count++;

    }

    return count;

}

// ------------------------------------------
// Empty positions
// ------------------------------------------

function getEmptyNodes() {

    const result = [];

    for (let i = 0; i < boardState.length; i++) {

        if (boardState[i] === PLAYER.EMPTY)
            result.push(i);

    }

    return result;

}

// ------------------------------------------
// Is board full?
// ------------------------------------------

function isBoardFull() {

    return getEmptyNodes().length === 0;

}
