//Select all element with the class accordion__opener
const accordionsOpeners = document.querySelectorAll('.accordion__opener');

//For each accordions__opener
for (let i = 0; i < accordionsOpeners.length; i++) {
	//add an event listener
	accordionsOpeners[i].addEventListener('click', function () {
		//select the element with class accordion__target that is the next sibling of the clicked element
		const accordionTarget = this.nextElementSibling;
		//select the icon of the clicked element
		const accordionIcon = this.querySelector('.accordion__icon');
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
