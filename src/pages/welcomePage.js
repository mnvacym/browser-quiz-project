import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  RESET_QUIZ_BUTTON_ID,
  USER_HEADER_INTERFACE_ID,
} from '../constants.js';




import { quizData } from '../data.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { initResetQuiz } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const userHeaderInterface = document.getElementById(USER_HEADER_INTERFACE_ID);
userHeaderInterface.style.display = 'none';
const startQuiz = () => {
  initQuestionPage();
  initResetQuiz();
};
