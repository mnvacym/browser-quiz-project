import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  USER_HEADER_INTERFACE_ID,
  TIMER_QUESTION_ID,
  START_QUIZ_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createResetQuiz } from '../views/resetQuizView.js';
import { initWelcomePage } from './welcomePage.js';
import { initResetTimer } from './timerPage.js';
import { initTimer } from './timerPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const theCorrectAnswer = currentQuestion.correct;
    const answerElement = createAnswerElement(key, answerText);
    const allOptions = document.querySelector('.answer-ul').children;

    answerElement.addEventListener('click', (event) => {
      const selectedElement = event.target;
      if (key === theCorrectAnswer) {
        selectedElement.classList.add('correct');

        for (const option of allOptions) {
          option.classList.add('disabled');
        }
      } else {
        selectedElement.classList.add('wrong');

        for (const option of allOptions) {
          if (option.innerText[0] === theCorrectAnswer) {
            option.classList.add('correct');
          }
          option.classList.add('disabled');
        }
      }
    });
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

let quizStart = false;

export const initResetQuiz = () => {
  const userHeaderInterface = document.getElementById(USER_HEADER_INTERFACE_ID);
  userHeaderInterface.innerHTML = '';
  const resetButton = createResetQuiz();
  userHeaderInterface.appendChild(resetButton);
  userHeaderInterface.style.display = 'block';

  const timer = document.getElementById(TIMER_QUESTION_ID);

  timer.style.display = 'block';
  resetButton.addEventListener('click', () => {
    if (quizStart === true) {
      timer.style.display = 'block';
      initTimer();
    } else {
      timer.style.display = 'none';
    }
    initWelcomePage();
    initResetTimer();
    userHeaderInterface.style.display = 'none';
  });
};
