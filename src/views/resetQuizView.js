import { RESET_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */

export const createResetQuiz = () => {
  const element = Object.assign(document.createElement('div'), {
    className: 'button-container',
  });

  element.innerHTML = String.raw`
    
       
        <button id='reset-quiz-button'  id="${RESET_QUIZ_BUTTON_ID}">rest quiz</button>
    
      `;

  return element;
};
