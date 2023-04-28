import { SCORE_DISPLAY_ID } from '../constants.js';

export const createScoreElement = () => {
  const element = Object.assign(document.createElement('div'), {
    id: 'score-display-id',
  });
  element.innerHTML = String.raw`
    ${SCORE_DISPLAY_ID}
  `;
  return element;