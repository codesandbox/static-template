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
		console.log('adjusting');
		const firstElementChild = element.firstElementChild;
		console.log('child', firstElementChild);
		const computedHeight = window.getComputedStyle(firstElementChild).height;
		console.log(computedHeight);
		console.log(element.style);
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
