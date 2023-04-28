import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_DISPLAY_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createScoreElement } from '../views/scoreView.js';
import { quizData } from '../data.js';
import { updateScore } from '../utils/updateScore.js';
let score = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const scoreElement = createScoreElement();
  userInterface.appendChild(scoreElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const theCorrectAnswer = currentQuestion.correct;
    const answerElement = createAnswerElement(key, answerText);
    const allOptions = document.querySelector('.answer-ul').children;

    answerElement.addEventListener('click', (event) => {
      const selectedElement = event.target;
      if (key === theCorrectAnswer) {
        selectedElement.classList.add('correct');
        score++;
        updateScore(score);

        for (const option of allOptions) {
          option.classList.add('disabled');
        }
      } else {
        selectedElement.classList.add('wrong');
        updateScore(score);

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
