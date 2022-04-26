const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}

let timerId = null;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

refs.stopBtn.disabled = true;

function changeBodyBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timerId = setInterval(changeBodyBackgroundColor, 1000);
}

function onStopClick() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};