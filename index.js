let currentPlayer = 'X';
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


let gameActive = true; 

function makeMove(row, col) {
  if (gameActive && gameBoard[row][col] === '') {
    gameBoard[row][col] = currentPlayer;
    document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
    checkWinner();
    if (gameActive) { 
      togglePlayer();
      updateTurnText();
    }
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updateTurnText() {
  document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;
}

function restartGame() {
  currentPlayer = 'X';
  gameActive = true; 
  updateTurnText();
  clearBoard();
}

function clearBoard() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      document.getElementById(`cell-${row}-${col}`).innerText = '';
    }
  }
}

function checkWinner() {
    let winner = null;
  
   
    for (let i = 0; i < 3; i++) {
      if (gameBoard[i][0] && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
        winner = gameBoard[i][0];
      }
      if (gameBoard[0][i] && gameBoard[0][i] === gameBoard[1][i] && gameBoard[0][i] === gameBoard[2][i]) {
        winner = gameBoard[0][i];
      }
    }
  
 
    if (!winner && gameBoard[0][0] && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
      winner = gameBoard[0][0];
    }
    if (!winner && gameBoard[0][2] && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
      winner = gameBoard[0][2];
    }
  
    if (winner) {
      announceWinner(winner);
      gameActive = false; 
    } else if (!gameBoard.flat().includes('')) {
      announceWinner('Draw');
      gameActive = false; 
    }
  }
  function announceWinner(winner) {
    let winnerText = winner === 'Draw' ? 'It\'s a Draw!' : `Player ${winner} Wins!`;
    document.getElementById('winnerAlert').innerText = winnerText;
    document.getElementById('winnerAlert').style.display = 'block';
  }