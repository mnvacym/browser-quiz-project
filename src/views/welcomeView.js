import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = Object.assign(document.createElement('div'), {
    className: 'welcome-page',
  });

  element.innerHTML = String.raw`
    <h1 class='welcome-heading'>Welcome to our quiz App</h1>
    <button class='welcome-button' id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;

  return element;
};
