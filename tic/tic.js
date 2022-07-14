"use strict";

import { gameBoard } from "../tic/modules/gameboard.js";

gameBoard();
// Controls the display
const displayController = (() => {
  const boxCtn = document.querySelector(".box-ctn");
  const box = document.querySelectorAll(".box");
  const winCtn = document.querySelector(".win-display");
  // Display winner function
  const winDisplay = () => {
    // Displays the win combo
    combDisplay = () => {
      for (i = 0; i < gameBoard.winnerCombo.length; i++) {
        document.getElementById(
          gameBoard.winnerCombo[i]
        ).style.backgroundColor = "rgba(0, 0, 0, 0.040)";
      }
    };
    // Displays the winner
    if (gameBoard.winner === "p1") {
      winCtn.textContent = "X Wins the round!";
      combDisplay();
    } else if (gameBoard.winner === "p2") {
      winCtn.textContent = "O Wins the round!";
      combDisplay();
    } else if (gameBoard.winner === "tie") {
      winCtn.textContent = "It's a tie!";
    } else {
      return;
    }

    replayBtn.style.display = "flex";
    backBtn.style.display = "flex";
  };
  // Board render
  const gamePlay = () => {
    winCtn.style.display = "block";

    header.style.display = "none";

    playBtn.style.display = "none";

    boxCtn.style.display = "flex";

    backBtn.style.display = "flex";
  };

  // Resets board and display
  const gameReplay = () => {
    gameBoard.gameReset();

    box.forEach((box) => {
      box.textContent = "";
      box.style.opacity = "0";
      box.style.backgroundColor = "white";
    });

    replayBtn.style.display = "none";

    winCtn.textContent = "";
  };

  // Back to main button
  const mainPage = () => {
    // styling
    boxCtn.style.display = "none";

    winCtn.style.display = "none";

    backBtn.style.display = "none";

    //  playBtnAi.style.display = 'flex';

    playBtn.style.display = "flex";

    header.style.display = "flex";
    // Resets board and display
    gameReplay();
  };

  // Event listeners
  const playBtn = document.getElementById("play-btn");
  playBtn.addEventListener("click", gamePlay);

  const replayBtn = document.querySelector(".replay-btn");
  replayBtn.addEventListener("click", gameReplay);

  const backBtn = document.querySelector(".back-btn");
  backBtn.addEventListener("click", mainPage);

  const header = document.querySelector("header");

  return { winDisplay, gamePlay };
})();
