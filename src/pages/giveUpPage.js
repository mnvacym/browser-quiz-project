import { GIVE_UP_BUTTON_ID } from '../constants.js';
import { createGiveUpButton } from '../views/giveUpView.js';
import { quizData } from '../data.js';

export const showGiveUpButton = () => {
  let btn = createGiveUpButton();
  const userInterface = document.getElementById(GIVE_UP_BUTTON_ID);
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const allOptions = document.querySelector('.answer-ul').children;
  const theCorrectAnswer = currentQuestion.correct;
  btn.addEventListener('click', () => {
    for (const option of allOptions) {
      if (option.innerText[0] === theCorrectAnswer) {
        option.classList.add('correct');
      }
      option.classList.add('disabled');
    }
  });
  userInterface.appendChild(btn);
};
