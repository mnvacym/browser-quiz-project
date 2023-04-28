import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = Object.assign(document.createElement('div'), {
    className: 'question-div',
  });
  // <div id="${TIMER_QUESTION_ID}"></div>

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul class='answer-ul' id="${ANSWERS_LIST_ID}">
    </ul>

    <button class='next-button' id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};
