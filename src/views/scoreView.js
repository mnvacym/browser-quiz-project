import { SCORE_DISPLAY_ID } from '../constants.js';

export const createScoreElement = () => {
  const element = Object.assign(document.createElement('div'), {
    className: 'score-display-id',
  });
  element.innerHTML = String.raw`
    ${SCORE_DISPLAY_ID}
  `;
  return element;
};
