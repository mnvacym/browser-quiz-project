import { TIMER_QUESTION_ID } from '../constants.js';

export const createTimer = (timer) => {
  // div timer
  const timerElement = Object.assign(document.createElement('div'), {
    className: 'timer-div',
  });

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  timerElement.innerHTML = String.raw`
       <h1> ${timer}</h1>
       <p id='${TIMER_QUESTION_ID}'></p>
     `;

  return timerElement;
};
