import {
  START_QUIZ_BUTTON_ID,
  TIMER_QUESTION_ID,
  USER_HEADER_INTERFACE_ID,
  RESET_QUIZ_BUTTON_ID,
} from '../constants.js';
import { createTimer } from '../views/timerView.js';

let isTimerDisplayed = false;
let startTimer
let seconds = 0;
let minutes = 0;
let timerInterval;

export const initTimer = () => {
  // If the timer is already running, stop the timer and reset the variables

   startTimer = () => {
    const userInterface = document.getElementById(TIMER_QUESTION_ID);
    userInterface.innerHTML = '';
    const timer = createTimer();
    userInterface.appendChild(timer);

    //  setInterval() function is used to execute the callback function

    timerInterval = setInterval(() => {
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
  startQuizButton.addEventListener('click', () => {
    if (!isTimerDisplayed) {
      startTimer();
      isTimerDisplayed = true;
    }
  });
};

export const initResetTimer = () => {
  const stopTimer = () => {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
  };

  const resetTimer = () => {
    const timer = document.getElementById(TIMER_QUESTION_ID);
    timer.textContent = '00:00';
    stopTimer();
    isTimerDisplayed = false;
  };

  const restButton = document.getElementById(USER_HEADER_INTERFACE_ID);
  console.log(restButton);
  restButton.addEventListener('click', () => {
    resetTimer();
  });

  const timer = document.getElementById(TIMER_QUESTION_ID);
  console.log(timer);
  const startQuizButton = document.getElementById(START_QUIZ_BUTTON_ID);
  console.log(startQuizButton);
  startQuizButton.addEventListener('click', () => {
    if (!isTimerDisplayed) {
      startTimer();
      isTimerDisplayed = true;
    }
  });
};
