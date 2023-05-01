import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  QUIZ_DATA_KEY,
  USER_INTERFACE_ID,
  USER_HEADER_INTERFACE_ID,
  TIMER_QUESTION_ID,
  START_QUIZ_BUTTON_ID,
  SCORE_DISPLAY_ID,
} from '../constants.js';
import { createGiveUpButton } from '../views/giveUpView.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createResetQuiz } from '../views/resetQuizView.js';
import { initWelcomePage } from './welcomePage.js';
import { initResetTimer } from './timerPage.js';
import { initTimer } from './timerPage.js';
import { createScoreElement } from '../views/scoreView.js';
import { updateScore } from '../utils/updateScore.js';

//----------- select give up parent element--------->
const giveUpParent = document.querySelector('#user-interface #give-up');
const giveUpButton = createGiveUpButton();
//----------- End select give up parent element----->
let score = 0;
export const initQuestionPage = (quizDataFromLocalStorage) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  // const isDataInLocalStorage = quizDataFromLocalStorage.length > 0;
  const customQuizData = quizDataFromLocalStorage
    ? quizDataFromLocalStorage
    : quizData;

  const currentQuestion =
    customQuizData.questions[customQuizData.currentQuestionIndex];

  console.log('=====currentQuestion', currentQuestion);

  const questionElement = createQuestionElement(currentQuestion.text);
  console.log(questionElement);

  userInterface.appendChild(questionElement);
  const scoreElement = createScoreElement();
  userInterface.appendChild(scoreElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextButton.addEventListener('click', () => nextQuestion(customQuizData));
  updateScore(score);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const correctAnswer = currentQuestion.correct;
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    const allOptions = document.querySelector('.answer-ul').children;

    // ---------------------------------   give up button --------------------------//
    giveUpButton.addEventListener('click', () => {
      for (const option of allOptions) {
        if (option.innerText[0] === correctAnswer) {
          option.classList.add('correct');
        }
        option.classList.add('disabled');
      }
    });
    userInterface.appendChild(giveUpButton);
    // ---------------------------------   End give up button --------------------------//

    answerElement.addEventListener('click', (event) => {
      const selectedElement = event.target;

      currentQuestion.isAnswerCorrect = key;
      nextButton.classList.remove('disabled');
      console.log(quizData);
      if (key === correctAnswer) {
        selectedElement.classList.add('correct');
        score++;
        updateScore(score);

        localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(customQuizData));
        for (const option of allOptions) {
          option.classList.add('disabled');
        }
      } else {
        selectedElement.classList.add('wrong');

        localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(customQuizData));
        console.log('-------currentQuestion', currentQuestion);
        console.log('-------allOptions', allOptions);
        for (const option of allOptions) {
          //show correct answer
          if (option.innerText[0] === correctAnswer) {
            option.classList.add('correct');
          }
          //otherwise disabled
          option.classList.add('disabled');
        }
      }
    });
  }
};

const nextQuestion = (quizDataFromLocalStorage) => {
  quizDataFromLocalStorage.currentQuestionIndex =
    quizDataFromLocalStorage.currentQuestionIndex + 1;
  // quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage(quizDataFromLocalStorage);
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
