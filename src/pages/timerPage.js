import { START_QUIZ_BUTTON_ID, TIMER_QUESTION_ID } from '../constants.js';
import { createTimer } from '../views/timerView.js';

export const initTimer = () => {
  let seconds = 0;
  let minutes = 0;
  let timerInterval;

  const startTimer = () => {
    const userInterface = document.getElementById(TIMER_QUESTION_ID);
    userInterface.innerHTML = '';
    const timer = createTimer();
    userInterface.appendChild(timer);
    //  setInterval() function is used to execute the callback function
    timerInterval = setInterval(() => {
      //  incrementing the seconds
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      const showTimer = `${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      timer.textContent = showTimer;
    }, 1000);
  };

  const startQuizButton = document.getElementById(START_QUIZ_BUTTON_ID);
  startQuizButton.addEventListener('click', startTimer);
};
