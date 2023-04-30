import { GIVE_UP_BUTTON_ID } from '../constants.js';
export const createGiveUpButton = () => {
  const giveUpButton = document.createElement('button');
  giveUpButton.setAttribute('id', GIVE_UP_BUTTON_ID);
  giveUpButton.innerText = `Give Up`;
  return giveUpButton;
};
