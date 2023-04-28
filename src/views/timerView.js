import { TIMER_QUESTION_ID } from '../constants.js';

export const createTimer = () => {

  const timerElement = document.createElement('div');
  timerElement.setAttribute('id', TIMER_QUESTION_ID);
  timerElement.textContent = '00:00';
  return timerElement;

  const timer = document.createElement('div');
  timer.setAttribute('id', TIMER_QUESTION_ID);
  timer.textContent = '00:00';
  return timer;

};
