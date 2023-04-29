import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createGiveUpButton } from '../views/giveUpView.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
//----------- select give up parent element--------->
const giveUpParent = document.querySelector('#user-interface #give-up');
const giveUpButton = createGiveUpButton();
//----------- End select give up parent element----->
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
    // ---------------------------------   give up button --------------------------//
    giveUpButton.addEventListener('click', () => {
      for (const option of allOptions) {
        if (option.innerText[0] === theCorrectAnswer) {
          option.classList.add('correct');
        }
        option.classList.add('disabled');
      }
    });
    userInterface.appendChild(giveUpButton);
    // ---------------------------------   End give up button --------------------------//

    //---------------------------------- select Answer && check Answer -----------------//
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
//---------------------------------- end select Answer && check Answer -----------------//

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
