const sizeSlider = document.querySelector('.size-slider');

const canopyDigits = document.querySelector('.canopy-digit');

const canopy = document.querySelector('.canopy');

canopyDigits.textContent = sizeSlider.value;

let initialCanopySlider = parseInt(sizeSlider.value);

let canopySize = 75;

console.log(canopySize);


sizeSlider.oninput = function() {
  canopyDigits.textContent = sizeSlider.value;
  let newCanopySlider = parseInt(sizeSlider.value);


  canopySize = canopySize + ((newCanopySlider - initialCanopySlider) * 0.217391304);

  canopy.style.width = parseInt(canopySize) + '%';

  initialCanopySlider = newCanopySlider;
}
