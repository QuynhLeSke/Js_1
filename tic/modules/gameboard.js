"use strict";

export const gameBoard = (() => {
  // Creates players
  const playerFactory = (name, mark, turn) => {
    return { name, mark, turn };
  };

  const player1 = playerFactory("player 1", "X", true);
  const player2 = playerFactory("Player 2", "O", false);

  // Possible win combinations
  const winCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
  ];

  let winner = null;

  // Turn counter
  let turns = 0;

  // Board array
  let board = [];

  // Winner combination array
  let winnerCombo = [];

  // Function when making a move
  const playerTurn = (function () {
    const box = document.querySelectorAll(".box");
    box.forEach((box) => {
      box.addEventListener("click", (e) => {
        // X player move if conditions are met
        if (
          player1.turn == true &&
          gameBoard.winner == null &&
          e.target.textContent == ""
        ) {
          // Adds move to array
          board[e.target.id] = player1.mark;
          // Board styling
          box.textContent = player1.mark;
          box.style.color = "#EE6C4D";
          // Sets player turns
          player1.turn = false;
          player2.turn = true;

          // O player move if conditions are met
        } else if (
          player2.turn == true &&
          gameBoard.winner == null &&
          e.target.textContent == ""
        ) {
          // Adds move to array
          board[e.target.id] = player2.mark;
          // Board styling
          box.textContent = player2.mark;
          box.style.color = "#98C1D9";
          // Sets player turns
          player1.turn = true;
          player2.turn = false;
        } else {
          return;
        }
        winCheck();

        // Fade effect using opacity
        box.style.opacity = "1";
      });
    });
    return { box };
  })();

  // Checks for a winner
  const winCheck = () => {
    turns++;

    // Seperates each player X | O move into 2 diffrent arrays
    let xPlays = board.reduce(
      (a, e, i) => (e === player1.mark ? a.concat(i) : a),
      []
    );
    let oPlays = board.reduce(
      (a, e, i) => (e === player2.mark ? a.concat(i) : a),
      []
    );
    // Loop iterates over each winCombo array
    for (let [index, combo] of winCombos.entries()) {
      // Check if player moves index is equal to combo array index
      if (combo.every((elem) => xPlays.indexOf(elem) > -1)) {
        gameBoard.winner = "p1";
        gameBoard.winnerCombo = combo;
      } else if (combo.every((elem) => oPlays.indexOf(elem) > -1)) {
        gameBoard.winner = "p2";
        gameBoard.winnerCombo = combo;
      } else if (
        gameBoard.winner == null &&
        gameBoard.winner == undefined &&
        turns == 9
      ) {
        gameBoard.winner = "tie";
        gameBoard.winnerCombo = combo;
      }
    }
    // Display the winner
    winDisplay();
    return winnerCombo;
  };
  // Resets board and display
  const gameReset = () => {
    gameBoard.winner = null;
    gameBoard.winnerCombo = undefined;
    player1.turn = true;
    player2.turn = false;
    player2.ai = false;
    turns = 0;
    board.splice(0, board.length);
  };

  return { winCheck, gameReset, playerTurn, board, player2, winnerCombo };
})();
