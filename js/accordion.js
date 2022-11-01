const accordionsBehavior = () => {
	//Select all element with the class accordion__opener
	const accordionsOpeners = document.querySelectorAll('.accordion__opener');
	console.log(accordionsOpeners[0].dataset);

	if (accordionsOpeners[0].dataset.oneatatime === 'true') {
		console.log('one at a time');
		for (let i = 0; i < accordionsOpeners.length; i++) {
			accordionsOpeners[i].addEventListener('click', () => {
				const otherAccordions = [...accordionsOpeners].filter((accordionOpener) => {
					return accordionOpener !== accordionsOpeners[i];
				});
				console.log(otherAccordions);
				const accordionTarget = accordionsOpeners[i].nextElementSibling;
				const accordionIcon = accordionsOpeners[i].querySelector('.accordion__icon');
				const otherTargets = [];
				otherAccordions.forEach((accordions) => {
					otherTargets.push(accordions.nextElementSibling);
				});
				const otherIcons = [];
				otherAccordions.forEach((accordions) => {
					otherIcons.push(accordions.querySelector('.accordion__icon'));
				});
				//Remove the class active on all the other accordions, their target and their toggle
				otherTargets.forEach((target) => {
					target.classList.remove('js-accordion__target--active');
				});
				otherIcons.forEach((icon) => {
					icon.classList.remove('js-accordion__icon--active');
				});
				if (accordionTarget.classList.contains('js-accordion__target--active')) {
					//remove the class js-accordion__target--active from the accordionTarget
					accordionTarget.classList.remove('js-accordion__target--active');
					//remove the class js-accordion__icon--active from the accordionIcon
					accordionIcon.classList.remove('js-accordion__icon--active');
				} else {
					//add the class js-accordion__target--active to the accordionTarget
					accordionTarget.classList.add('js-accordion__target--active');
					//add the class js-accordion__icon--active to the accordionIcon
					accordionIcon.classList.add('js-accordion__icon--active');
				}
			});
		}
	} else {
		//For each accordions__opener
		for (let i = 0; i < accordionsOpeners.length; i++) {
			//add an event listener
			accordionsOpeners[i].addEventListener('click', function () {
				//select the element with class accordion__target that is the next sibling of the clicked element
				const accordionTarget = this.nextElementSibling;
				// console.log(accordionTarget);
				//select the icon of the clicked element
				const accordionIcon = this.querySelector('.accordion__icon');
				// console.log(accordionIcon);
				//if the accordionTarget contains the class js-accordion__target--active
				if (accordionTarget.classList.contains('js-accordion__target--active')) {
					//remove the class js-accordion__target--active from the accordionTarget
					accordionTarget.classList.remove('js-accordion__target--active');
					//remove the class js-accordion__icon--active from the accordionIcon
					accordionIcon.classList.remove('js-accordion__icon--active');
				} else {
					//add the class js-accordion__target--active to the accordionTarget
					accordionTarget.classList.add('js-accordion__target--active');
					//add the class js-accordion__icon--active to the accordionIcon
					accordionIcon.classList.add('js-accordion__icon--active');
				}
			});
		}
	}
};

accordionsBehavior();
