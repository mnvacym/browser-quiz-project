import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initTimer } from './pages/timerPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  initWelcomePage();
  initTimer();
};

window.addEventListener('load', loadApp);
