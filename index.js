let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;
}

function restartGame() {
    currentPlayer = 'X';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.getElementById('winnerAlert').style.display = 'none';
    document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}

function checkWinner() {
    
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            announceWinner(gameBoard[i][0]);
            return;
        }
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            announceWinner(gameBoard[0][i]);
            return;
        }
    }
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        announceWinner(gameBoard[0][0]);
        return;
    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        announceWinner(gameBoard[0][2]);
        return;
    }

    
    if (gameBoard.every(row => row.every(cell => cell !== ''))) {
        announceDraw();
    }
}

function announceWinner(winner) {
    document.getElementById('winnerAlert').innerText = `${winner} wins!`;
    document.getElementById('winnerAlert').classList.remove('alert-danger');
    document.getElementById('winnerAlert').classList.add('alert-success');
    document.getElementById('winnerAlert').style.display = 'block';
}

function announceDraw() {
    document.getElementById('winnerAlert').innerText = 'It\'s a draw!';
    document.getElementById('winnerAlert').classList.remove('alert-success');
    document.getElementById('winnerAlert').classList.add('alert-danger');
    document.getElementById('winnerAlert').style.display = 'block';
}