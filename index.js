const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.body,
  startBtn: document.querySelector('.js_start'),
  stopBtn: document.querySelector('.js_stop'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let colorChange = null;
function onStartBtnClick(event) {
  if (refs.startBtn.hasAttribute('isActive')) {
    return;
  }
  colorChange = setInterval(() => {
    refs.startBtn.setAttribute('isActive', true);
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  console.log(colorChange);
  refs.startBtn.disabled = true;
}
function onStopBtnClick(event) {
  clearInterval(colorChange);
  refs.startBtn.disabled = false;
  refs.startBtn.removeAttribute('isActive');
}
