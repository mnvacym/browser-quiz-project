import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const selectAnswer = (answerElement) => {
    const answers = document.querySelectorAll('li');
    answers.forEach((answer) => answer.classList.remove('selected'));
    answerElement.classList.add('selected');
  };
  // const selectAnswer = (selectedAnswer) => {
  //   console.log(` ${selectedAnswer}`);
  // };

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // answerElement.addEventListener('click', () => {
    //   selectAnswer(answerElement);
    // });
    console.log(answerElement);
    answerElement.addEventListener('click', (event) => {
      selectAnswer(event.target);
    });
    answersListElement.appendChild(answerElement);
    // console.log(answersListElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
