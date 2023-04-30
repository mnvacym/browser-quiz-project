import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

import { QUIZ_DATA_KEY } from './constants.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initTimer } from './pages/timerPage.js';

// import { QUIZ_DATA_KEY } from './constants.js';
// import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  initWelcomePage();
  initTimer();
  // const quizDataFromLocalStorage = JSON.parse(
  //   localStorage.getItem(QUIZ_DATA_KEY)
  // );

  // if (quizDataFromLocalStorage) {
  //   initQuestionPage(quizDataFromLocalStorage);
  // } else {
  //   initWelcomePage();
  //   quizData.currentQuestionIndex = 0;
  // }
};

window.addEventListener('load', loadApp);
