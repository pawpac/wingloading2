const sizeSlider = document.querySelector('.size-slider');

const canopyDigits = document.querySelector('.canopy-digit');

canopyDigits.textContent = sizeSlider.value;

let initialCanopySlider = parseInt(sizeSlider.value);

let canopySize = 75;

console.log(canopySize);


sizeSlider.oninput = function() {
  canopyDigits.textContent = sizeSlider.value;
  let newCanopySlider = parseInt(sizeSlider.value);
  console.log(initialCanopySlider);
  console.log(newCanopySlider);

  canopySize = canopySize + ((newCanopySlider - initialCanopySlider) * 0.217391304);

  console.log('canopy percent: ' + parseInt(canopySize));
  initialCanopySlider = newCanopySlider;
  // console.log(initialCanopySlider);
}
