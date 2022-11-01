/**
 * We have to images inside a container.
 * We want the foreground image to be clipped at the desired starting position defined by the default
 * value of the range input and then updated acccordingly when the input value changes.
 * Since we replaced the inpur handle by an absolutely positioned icon, we also need to
 * update it's position to follow the input.
 *
 * Finally we have a progress bar under the images container, we need to adjust the progress bar overlay width
 * based on the input value.
 */

//Select the input range
const inputRange = document.getElementById('before-after__slider');

//Select the progress bar
const progressBar = document.querySelector('.progress-bar');

//Get the starting position and save it as an int
let startingPosition = parseInt(inputRange.value, 10);

//Set the foreground image clipping with the starting position
document.querySelector('.foreground-img').style.clipPath = `inset(0 ${startingPosition}% 0 0)`;

//Set the progress bar width based on the starting position
progressBar.style.width = `${startingPosition}%`;

//Listen for an input change
inputRange.addEventListener('input', (event) => {
	//Get the new value of the range input and save it as an int
	const inputRangeValue = parseInt(event.target.value, 10);
	//Set the new clipping value --> We want the clipping value to go down when the input value increase
	const clipValue = startingPosition + (startingPosition - inputRangeValue);
	// Update the clipping value with the input value
	document.querySelector('.foreground-img').style.clipPath = `inset(0 ${clipValue}% 0 0 )`;
	// Update the position of the slider button
	document.querySelector('.before-after__slider-button').style.left = `calc(${inputRangeValue}% - 26px)`;
	//Update the progress bar width, and add a minimum value of 1rem so the bar never disapears
	progressBar.style.width = `calc(${inputRangeValue}% + 1rem)`;
});
