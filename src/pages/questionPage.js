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

function checkAnswer(questionIndex, selectedAnswer) {
  const currentQuestion = quizData.questions[questionIndex];
  const correctAnswer = currentQuestion.correct;
  const isCorrect = correctAnswer === selectedAnswer;

  if (!isCorrect) {
    // if the answer is incorrect, return the correct answer
    return { isCorrect: false, correctAnswer };
  }

  // if the answer is correct, return true
  return { isCorrect: true };
}

// assume the user selected answer 'a' for question 0
const selectedAnswer = 'a';
const questionIndex = 0;

// check the answer and display the result to the user
const result = checkAnswer(questionIndex, selectedAnswer);

if (result.isCorrect) {
  console.log('Correct answer!');
} else {
  console.log(
    `Incorrect answer. The correct answer is ${result.correctAnswer}.`
  );
}
