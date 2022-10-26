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

interactiveCardsClickUp();
