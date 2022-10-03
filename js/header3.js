//select all the elements in the document with the class .mega-menu
const megaMenu = document.querySelectorAll('.mega-menu');

//select all the elements in the document with the class .js-mega-menu-openers
const megaMenuOpeners = document.querySelectorAll('.js-mega-menu-openers');

//select the element with the class .js-mobile-menu__toggle
const mobileMenuToggle = document.querySelector('.js-mobile-menu__toggle');

//select the element with the .header__nav class
const headerNav = document.querySelector('.header__nav');

//select the icon inside the mobileMenuToggle element
const mobileMenuToggleIcon = mobileMenuToggle.querySelector('i');

//create a event listener handler for the click event
const mobileMenuToggleHandler = (event) => {
	//toggle the class .is-open on the headerNav element
	headerNav.classList.toggle('js-mobile-menu-active');
	//toggle the class .js-mobile-menu-icon-white on the mobileMenuToggleIcon element
	mobileMenuToggleIcon.classList.toggle('js-mobile-menu-icon-white');
	//toggle the class .fa-bars on the mobileMenuToggleIcon element
	mobileMenuToggleIcon.classList.toggle('fa-bars');
	//toggle the class .fa-times on the mobileMenuToggleIcon element
	mobileMenuToggleIcon.classList.toggle('fa-times');
};

//Add the event listener to the mobileMenuToggle element
mobileMenuToggle.addEventListener('click', mobileMenuToggleHandler);

//check if the window size matches the media query 1132px or smaller
const mediaQuery = window.matchMedia('(max-width: 1132px)');

//create a function to check if a element is being hovered over
const isHovered = (element) => {
	return element.parentElement.querySelector(':hover') === element;
};

//create a event listener handler for the click event
const clickHandler = (event) => {
	//select the target element of the click event which will have the same data-mega-menu attribute as the element's data-opens attribute
	const target = document.querySelector(`[data-mega-menu="${event.target.dataset.opens}"]`);
	//create a function that toggle the class .js-mega-menu-active on the target element
	const toggleActive = () => {
		//select all the elements with the .menu-class that are not the target element and remove the class .js-mega-menu-active
		document.querySelectorAll(`.mega-menu:not([data-mega-menu="${event.target.dataset.opens}"])`).forEach((element) => {
			element.classList.remove('js-mega-menu-active');
		});
		target.classList.toggle('js-mega-menu-active');
	};
	//run the toggleActive function
	toggleActive();
};

//create a event listener handler for the mouseenter event
const mouseEnterHandler = (event) => {
	//select the target element of the mouseenter event which will have the same data-mega-menu attribute as the element's data-opens attribute
	const target = document.querySelector(`[data-mega-menu="${event.target.dataset.opens}"]`);
	//create a function that toggle the class .js-mega-menu-active on the target element
	const addActive = () => {
		//select all the elements with the .menu-class that are not the target element and remove the class .js-mega-menu-active
		document.querySelectorAll(`.mega-menu:not([data-mega-menu="${event.target.dataset.opens}"])`).forEach((element) => {
			element.classList.remove('js-mega-menu-active');
		});
		target.classList.add('js-mega-menu-active');
	};
	//run the toggleActive function
	addActive();
};

//create a event listener handler for the mouseleave event
const mouseLeaveHandler = (event) => {
	//select the target element of the mouseleave event which will have the same data-mega-menu attribute as the element's data-opens attribute
	const target = document.querySelector(`[data-mega-menu="${event.target.dataset.opens}"]`);
	//Wait for 400ms then check if the target element is not being hovered over and if the target element has the class .js-mega-menu-active
	setTimeout(() => {
		if (!isHovered(target) && target.classList.contains('js-mega-menu-active')) {
			//if the target element is not being hovered over and has the class .js-mega-menu-active, remove the class .js-mega-menu-active
			target.classList.remove('js-mega-menu-active');
		}
		//also check if the opener element is not being hovered over and if the target element has the class .js-mega-menu-active
		else if (!isHovered(event.target) && target.classList.contains('js-mega-menu-active')) {
			//if the opener element is not being hovered over and the target element has the class .js-mega-menu-active, listen for when the mouse leaves the target element and remove the class .js-mega-menu-active
			target.addEventListener('mouseleave', () => {
				target.classList.remove('js-mega-menu-active');
			});
		}
	}, 400);
};

//if the mediaquery matches, remove the mouseenter and mouseleave event listeners and add the click event listener to each megaMenuOpener

const megaMenuBehavior = () => {
	if (mediaQuery.matches) {
		megaMenuOpeners.forEach((megaMenuOpener) => {
			megaMenuOpener.removeEventListener('mouseenter', mouseEnterHandler);
			megaMenuOpener.removeEventListener('mouseleave', mouseLeaveHandler);
			megaMenuOpener.addEventListener('click', clickHandler);
		});
	} else {
		//if the mediaquery does not match, remove the click event listener and add the mouseenter and mouseleave event listeners to each megaMenuOpener
		megaMenuOpeners.forEach((megaMenuOpener) => {
			megaMenuOpener.removeEventListener('click', clickHandler);
			megaMenuOpener.addEventListener('mouseenter', mouseEnterHandler);
			megaMenuOpener.addEventListener('mouseleave', mouseLeaveHandler);
		});
	}
};
megaMenuBehavior();

//add an event listener to the mediaquery that runs the megaMenuBehavior function when the mediaquery changes
mediaQuery.addEventListener('change', megaMenuBehavior);
