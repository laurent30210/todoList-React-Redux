/* eslint-disable import/prefer-default-export */
const colorsRandom = () => {
  const arrayColors = ['#ffa500', '#ff516e', '#10c437', '#a010c4', '#0f42e9', '#c7144a'];
  const index = Math.floor(Math.random() * arrayColors.length);
  return arrayColors[index];
};

export default colorsRandom;
