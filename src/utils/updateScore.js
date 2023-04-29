import { SCORE_DISPLAY_ID } from '../constants.js';
export const updateScore = (updatedScore = 0) => {
  const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
  scoreDisplay.innerHTML = `Score: ${updatedScore}`;
};
