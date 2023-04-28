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

  const selectAnswer = (answerElement) => {
    const answers = document.querySelectorAll('li');
    // answers.forEach((answer) => answer.classList.remove('selected'));
    // answerElement.classList.add('selected');
  };

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // console.log(answerElement);
    answerElement.addEventListener('click', (event) => {
      selectAnswer(event.target);

      const selectedElement = document.querySelector('.selected');
      console.log(selectedElement);
      if (key === currentQuestion.correct) {
        selectedElement.style.backgroundColor = 'green';
        score++;
      } else {
        selectedElement.style.backgroundColor = 'red';
        // const rightAnswer = currentQuestion.answers[currentQuestion.correct];
        // console.log(`The correct answer is ${rightAnswer}`);
        // rightAnswer.classList.add('right');
        // document.querySelector('right').style.backgroundColor = 'green';
      }
    });

    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
  const updateScore = () => {
    const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
    scoreDisplay.innerHTML = `Score: ${score}`;
  };

  updateScore();
  console.log(score);
  console.log(currentQuestion.correct);
  console.log(key);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
