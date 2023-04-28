import { SCORE_DISPLAY_ID } from '../constants.js';

export const createScoreElement = () => {
  const element = Object.assign(document.createElement('div'), {
    id: SCORE_DISPLAY_ID,
  });

  return element;
};
