import headerFunction from './js/header.js';

headerFunction();

const interactiveCardsClickUp = () => {
	const clickUpToggles = document.querySelectorAll('.clickUp-toggle');
	clickUpToggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			const interactiveCard = toggle.parentElement;
			if (interactiveCard.getAttribute('data-state') === 'opened') {
				interactiveCard.setAttribute('data-state', 'closed');
				toggle.firstElementChild.classList.replace('fa-xmark', 'fa-plus');
			} else if (interactiveCard.getAttribute('data-state') === 'closed') {
				interactiveCard.setAttribute('data-state', 'opened');
				toggle.firstElementChild.classList.replace('fa-plus', 'fa-xmark');
			}
		});
	});
};

const forcedAutoHeight = () => {
	const adjustHeight = (element) => {
		const firstElementChild = element.firstElementChild;
		const computedHeight = window.getComputedStyle(firstElementChild).height;
		element.style.minHeight = `${computedHeight}`;
	};
	const elementsToAdjust = document.querySelectorAll('.js-calculate-height');
	elementsToAdjust.forEach((element) => adjustHeight(element));
	window.addEventListener('resize', () => {
		console.log('resize');
		elementsToAdjust.forEach((element) => {
			adjustHeight(element);
		});
	});
};

forcedAutoHeight();

interactiveCardsClickUp();

//Force aspect ratio for compaitbility with safari < 15

const forceAspectRatio = (element, ratio) => {
	let width = window.getComputedStyle(element).width;
	let height = window.getComputedStyle(element).height;

	if (ratio == 'square') {
		height = width;
	}

	if (ratio == 'widescreen') {
		height = (width * 9) / 16;
	}

	if (ratio == 'ultrawide') {
		height = (width * 5) / 18;
	}

	if (ratio == 'portrait') {
		height = (width * 4) / 3;
	}

	if (ratio == 'story') {
		height = (width * 16) / 9;
	}

	if (ratio == 'landscape') {
		height = (width * 3) / 4;
	}

	if (ratio == 'golden') {
		height = (width * 1) / 1.618;
	}
};

const setAspectRatio = () => {
	const elements = document.querySelectorAll('[data-ratio]');
	elements.forEach((element) => {
		const ratio = element.getAttribute('data-ratio');
		let dataRatioAvailable = false;
		if (window.getComputedStyle(element).aspectRatio) {
			dataRatioAvailable = true;
			console.log(dataRatioAvailable, window.getComputedStyle(element).aspectRatio);
			return;
		} else {
			forceAspectRatio(element, ratio);
		}
	});
};

setAspectRatio();
