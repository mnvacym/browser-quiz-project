import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  QUIZ_DATA_KEY,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

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

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextButton.addEventListener('click', () => nextQuestion(customQuizData));

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const correctAnswer = currentQuestion.correct;
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    const allOptions = document.querySelector('.answer-ul').children;

    if (currentQuestion.isAnswerCorrect) {
      if (key === currentQuestion.correct) {
        answerElement.classList.add('correct');
      } else if (key === currentQuestion.isAnswerCorrect) {
        answerElement.classList.add('wrong');
      }
      nextButton.classList.remove('disabled');
      localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(customQuizData));
      for (const option of allOptions) {
        option.classList.add('disabled');
      }
    } else {
      nextButton.classList.add('disabled');
    }

    answerElement.addEventListener('click', (event) => {
      const selectedElement = event.target;

      currentQuestion.isAnswerCorrect = key;
      nextButton.classList.remove('disabled');
      console.log(quizData);
      if (key === correctAnswer) {
        selectedElement.classList.add('correct');

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
