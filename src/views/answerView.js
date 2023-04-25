import { quizData } from '../data';

/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};

const viewQuestion = () => {
  let currentQuestion = quizData[quizData.currentQuestionIndex];
  const userInterface = document.getElementById('user-interface');
  userInterface.innerHTML = createQuestionElement(currentQuestion);

  for (const element of Object.entries(currentQuestion)) {
    element.textContent = answerText;
    answerListElement.appendChild(element);
  }
  document
    .getElementById('next-question-button')
    .addEventListener('click', () => {
      currentQuestionIndex++;
      viewQuestion();
    });
};
