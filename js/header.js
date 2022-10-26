/**
 * We are building a header with mega menus.
 * -> We want to create a mobile version of this header for screensizes below 1132px wide
 * -> On desktop mode, we want to show the mega menus when the user hovers over the related mega menu opener
 * -> On tablet/mobile mode, we want to show the mega menus when the user clicks on the related mega menu opener
 *
 * a) Build the behavior of the transition between desktop and mobile mode
 * b) Build the mega menus behavior
 * 	=> For desktop mode
 * 	=> For mobile/tablet mode
 * c) Set the correct behavior based on the screen size
 */
export const headerFunction = () => {
	//select all the elements in the document with the class .js-mega-menu-openers
	const megaMenuOpeners = document.querySelectorAll('.js-mega-menu-openers');

	if (megaMenuOpeners.length > 0) {
		//select the element with the .header__nav class
		const headerNav = document.querySelector('.header__nav');

		/**
		 * Add the behavior for the mobile menu toggle
		 */

		//select the element with the class .js-mobile-menu__toggle
		const mobileMenuToggle = document.querySelector('.js-mobile-menu__toggle');

		//select the icon inside the mobileMenuToggle element
		const mobileMenuToggleIcon = mobileMenuToggle.querySelector('i');

		//create a event listener handler for the click event
		const mobileMenuToggleHandler = (event) => {
			//toggle the class .is-open on the headerNav element
			headerNav.classList.toggle('js-mobile-menu-active');
			//toggle the class .js-mobile-menu-icon-white on the mobileMenuToggleIcon element
			mobileMenuToggleIcon.classList.toggle('js-mobile-menu-icon');
			//toggle the class .fa-bars on the mobileMenuToggleIcon element
			mobileMenuToggleIcon.classList.toggle('fa-bars');
			//toggle the class .fa-times on the mobileMenuToggleIcon element
			mobileMenuToggleIcon.classList.toggle('fa-times');
		};

		//Add the event listener to the mobileMenuToggle element
		mobileMenuToggle.addEventListener('click', mobileMenuToggleHandler);

		/**
		 * We will have three events in total:
		 * -> 2 for the desktop screen size where we want the mega menus to be visible when hovering over the openers or the mega menu themseleves
		 * -> 1 for the tablet and mobile screensize where we want the mega menus to be visible when the user clicks on the opener
		 * These events need to be removed and added dynamically when the user resizes, to avoid scope issues we need to define the targets inside each handler
		 */

		// Helper functions

		const selectTargetAndChevron = (element) => {
			const target = document.querySelector(`[data-mega-menu="${element}"]`);
			const chevron = document.querySelector(`.header-nav__link-arrow[data-opens="${element}"]`);
			const elements = { target: target, chevron: chevron };
			return elements;
		};

		const openTheMegaMenu = (element, elements) => {
			//select all the elements with the .menu-class that are not the target element and remove the class .js-mega-menu-active
			document.querySelectorAll(`.mega-menu:not([data-mega-menu="${element}"])`).forEach((element) => {
				element.classList.remove('js-mega-menu-active');
			});
			[...document.querySelectorAll('.header-nav__link-arrow')]
				.filter((arrow) => {
					return arrow !== elements.chevron;
				})
				.forEach((arrow) => {
					arrow.classList.remove('js-toggle-icon-rotated');
				});
			elements.chevron.classList.toggle('js-toggle-icon-rotated');
			elements.target.classList.toggle('js-mega-menu-active');
		};

		const closeTheMegaMenu = (elements) => {
			[...document.querySelectorAll('.header-nav__link-arrow')]
				.filter((arrow) => {
					return arrow !== elements.chevron;
				})
				.forEach((arrow) => {
					arrow.classList.remove('js-toggle-icon-rotated');
				});
			elements.target.classList.remove('js-mega-menu-active');
			elements.chevron.classList.toggle('js-toggle-icon-rotated');
		};

		const clickHandler = (event) => {
			openTheMegaMenu(event.target.dataset.opens, selectTargetAndChevron(event.target.dataset.opens));
		};

		const mouseEnterHandler = (event) => {
			openTheMegaMenu(event.target.dataset.opens, selectTargetAndChevron(event.target.dataset.opens));
		};

		/**
		 * For the mouseleave event we need to wait a certain time and check if the user is hovering over the menu before closing
		 * the mega menu.
		 * To avoid having several menus showing at the same time due to the setTimeout() we made
		 * sure to close all menus before opening a new one in the previous function.
		 */

		//create a function to check if a element is being hovered over
		const isHovered = (element) => {
			return element.parentElement.querySelector(':hover') === element;
		};

		const mouseLeaveHandler = (event) => {
			const target = document.querySelector(`[data-mega-menu="${event.target.dataset.opens}"]`);
			setTimeout(() => {
				if (!isHovered(target) && target.classList.contains('js-mega-menu-active')) {
					closeTheMegaMenu(selectTargetAndChevron(event.target.dataset.opens));
				} else if (!isHovered(event.target) && target.classList.contains('js-mega-menu-active')) {
					target.addEventListener('mouseleave', () => {
						closeTheMegaMenu(selectTargetAndChevron(event.target.dataset.opens));
					});
				}
			}, 400);
		};

		/**
		 * Based on the design we need to switch to mobile view at 1132px
		 */

		//check if the window size matches the media query 1132px or smaller
		const mediaQuery = window.matchMedia('(max-width: 1132px)');

		//Create a megaMenuBehavior function
		const megaMenuBehavior = () => {
			//if the mediaquery matches, remove the mouseenter and mouseleave event listeners and add the click event listener to each megaMenuOpener
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
	}
};

//Instead of adding the script to the file we can simply export the function and initialize it in the the script.js file

export { headerFunction as default } from './header.js';
