/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = Object.assign(document.createElement('li'),{
className : 'answer-list' 
  })
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
