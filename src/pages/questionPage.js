import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  QUIZ_DATA_KEY,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = (quizDataFromLocalStorage = []) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const isDataInLocalStorage = quizDataFromLocalStorage.length > 0;
  const customQuizData = isDataInLocalStorage
    ? quizDataFromLocalStorage
    : quizData;

  const currentQuestion =
    customQuizData.questions[quizData.currentQuestionIndex];
  console.log('=====currentQuestion', currentQuestion);

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const correctAnswer = currentQuestion.correct;
    const answerElement = createAnswerElement(key, answerText);
    const allOptions = document.querySelector('.answer-ul').children;

    answerElement.addEventListener('click', (event) => {
      const selectedElement = event.target;
      if (key === correctAnswer) {
        selectedElement.classList.add('correct');
        currentQuestion.isAnswerCorrect = true;
        localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(customQuizData));
        for (const option of allOptions) {
          option.classList.add('disabled');
        }
      } else {
        selectedElement.classList.add('wrong');
        currentQuestion.isAnswerCorrect = false;
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
