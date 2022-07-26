"use strict";

import { gameModule } from "../tic/modules/gameboard.js";

document
  .querySelectorAll(".board-square")
  .forEach((square) =>
    square.addEventListener("click", gameModule.handleClick)
  );
document
  .getElementById("restart-game")
  .addEventListener("click", gameModule.restartGame);
