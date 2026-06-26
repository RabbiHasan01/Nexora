// ==========================================
// Nexora Board Renderer
// board.js
// ==========================================

const SVG_NS = "http://www.w3.org/2000/svg";

let svg;
let circles = [];
let lines = [];

function initializeBoard() {

    const board = document.getElementById("board");

    board.innerHTML = "";

    svg = document.createElementNS(SVG_NS, "svg");

    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 700 500");

    drawConnections();

    drawNodes();

    board.appendChild(svg);

}

function drawConnections() {

    EDGES.forEach(edge => {

        const a = NODES[edge[0]];
        const b = NODES[edge[1]];

        const line = document.createElementNS(SVG_NS, "line");

        line.setAttribute("x1", a.x);
        line.setAttribute("y1", a.y);

        line.setAttribute("x2", b.x);
        line.setAttribute("y2", b.y);

        line.setAttribute("stroke", COLORS.LINE);
        line.setAttribute("stroke-width", "3");

        svg.appendChild(line);

        lines.push(line);

    });

}

function drawNodes() {

    NODES.forEach((node, index) => {

        const circle = document.createElementNS(SVG_NS, "circle");

        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);

        circle.setAttribute("r", BOARD_RADIUS);

        circle.setAttribute("fill", COLORS.EMPTY);

        circle.setAttribute("stroke", COLORS.BORDER);

        circle.setAttribute("stroke-width", "2");

        circle.dataset.index = index;

        circle.style.cursor = "pointer";

        svg.appendChild(circle);

        circles.push(circle);

    });

}

function resetBoardView() {

    circles.forEach(circle => {

        circle.setAttribute("fill", COLORS.EMPTY);

    });

}

function paintNode(index, player) {

    if (player === PLAYER.GREEN)
        circles[index].setAttribute("fill", COLORS.GREEN);

    else if (player === PLAYER.RED)
        circles[index].setAttribute("fill", COLORS.RED);

    else
        circles[index].setAttribute("fill", COLORS.EMPTY);

}

function highlightNode(index) {

    circles[index].setAttribute("stroke", COLORS.HIGHLIGHT);

    circles[index].setAttribute("stroke-width", "4");

}

function clearHighlights() {

    circles.forEach(circle => {

        circle.setAttribute("stroke", COLORS.BORDER);

        circle.setAttribute("stroke-width", "2");

    });

}

initializeBoard();
