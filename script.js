const sizeSlider = document.querySelector('.size-slider');
const exitSlider = document.querySelector('.exit-slider');
const canopyDigits = document.querySelector('.canopy-digit');
const exitDigits = document.querySelector('.exit-digit');
const canopy = document.querySelector('.canopy');
const wingloading = document.querySelector('.wingloading-digit');
const level = document.querySelector('.level-digit');

// LINES
const leftLines = document.querySelector('.lines-point-left');
const rightLines = document.querySelector('.lines-point-right');

// FAT
const fat = document.querySelector('.fat-img');

canopyDigits.textContent = sizeSlider.value;
exitDigits.textContent = exitSlider.value;

let initialCanopySlider = parseInt(sizeSlider.value);
let initialExitSlider = parseInt(exitSlider.value);

let canopySize = 75;

let leftLinesRotation = 5;
let rightLinesRotation = -5;
let exitWeight = 85;

sizeSlider.oninput = function() {
  canopyDigits.textContent = sizeSlider.value;
  let newCanopySlider = parseInt(sizeSlider.value);

  wingloading.textContent = (exitSlider.value / sizeSlider.value).toFixed(2);

  if ((wingloading.textContent < 1.8) && (wingloading.textContent >= 1.4)) {
    level.textContent = 'Advanced';
  } else if ((wingloading.textContent < 1.4) && (wingloading.textContent >= 1)) {
    level.textContent = 'Intermediate';
  } else if ((wingloading.textContent < 1)) {
    level.textContent = 'Novice';
  } else {
    level.textContent = 'Master';
  }

  canopySize = canopySize + ((newCanopySlider - initialCanopySlider) * 0.217391304);
  leftLinesRotation = leftLinesRotation + ((newCanopySlider - initialCanopySlider) * (- 0.095652174));
  rightLinesRotation = rightLinesRotation + ((newCanopySlider - initialCanopySlider) * 0.095652174);

  canopy.style.width = parseInt(canopySize) + '%';
  leftLines.style.transform = 'rotate(' + parseInt(leftLinesRotation) + 'deg)';
  rightLines.style.transform = 'rotate(' + parseInt(rightLinesRotation) + 'deg)';

  initialCanopySlider = newCanopySlider;
}

exitSlider.oninput = function () {
  exitDigits.textContent = exitSlider.value;
  let newExitSlider = parseInt(exitSlider.value);

  wingloading.textContent = (exitSlider.value / sizeSlider.value).toFixed(2);

  if ((wingloading.textContent < 1.8) && (wingloading.textContent >= 1.4)) {
    level.textContent = 'Advanced';
  } else if ((wingloading.textContent < 1.4) && (wingloading.textContent >= 1)) {
    level.textContent = 'Intermediate';
  } else if ((wingloading.textContent < 1)) {
    level.textContent = 'Novice';
  } else {
    level.textContent = 'Master';
  }

  exitWeight = exitWeight + ((newExitSlider - initialExitSlider) * 0.15);

  fat.style.width = parseInt(exitWeight) + '%';
  fat.style.height = parseInt(exitWeight) + '%';

  initialExitSlider = newExitSlider;
}