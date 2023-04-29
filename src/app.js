import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

import { QUIZ_DATA_KEY } from './constants.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const quizDataFromLocalStorage = JSON.parse(
    localStorage.getItem(QUIZ_DATA_KEY)
  );

  if (quizDataFromLocalStorage) {
    initQuestionPage(quizDataFromLocalStorage);
  } else {
    initWelcomePage();
    quizData.currentQuestionIndex = 0;
  }
};

window.addEventListener('load', loadApp);
