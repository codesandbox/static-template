import gaTabs from './tabClass.js';

// //Select the tabs__openers
// const tabsOpeners = document.querySelectorAll('.tabs__opener');

// //Create a function that takes the an accordion opener as argument
// function openTab(tabsOpener) {
// 	//Select the tab illustration that matched the accordion opener data tab attribute
// 	const tabIllustration = document.querySelector(`.tabs__illustration[data-tab="${tabsOpener.dataset.tab}"]`);
// 	//Select the tab divider overlay that matched the accordion opener data tab attribute
// 	const tabDividerOverlay = document.querySelector(`.tabs__divider-overlay[data-tab="${tabsOpener.dataset.tab}"]`);
// 	//Select the accordion target that matched the accordion opener data tab attribute
// 	const tabsTarget = document.querySelector(`.tabs__target[data-tab="${tabsOpener.dataset.tab}"]`);
// 	//Select the icon with class opener icon that matched the data tab attribute
// 	const openerIcon = document.querySelector(`.opener-icon[data-tab="${tabsOpener.dataset.tab}"]`);

// 	//Select all the accordion targets that are not the accordion target
// 	const othertabsTargets = document.querySelectorAll(`.tabs__target:not([data-tab="${tabsOpener.dataset.tab}"])`);

// 	//Select all the opener icons that are not the opener icon
// 	const otherOpenerIcons = document.querySelectorAll(`.opener-icon:not([data-tab="${tabsOpener.dataset.tab}"])`);

// 	//Select all the tabIllustrations that are not the tab illustration
// 	const otherTabIllustrations = document.querySelectorAll(`.tabs__illustration:not([data-tab="${tabsOpener.dataset.tab}"])`);

// 	//Select all the tabDividerOverlays that are not the tab divider overlay
// 	const otherTabDividerOverlays = document.querySelectorAll(`.tabs__divider-overlay:not([data-tab="${tabsOpener.dataset.tab}"])`);

// 	//Remove the class js-tabs__ilustration--active from all the tab illustrations that are not the tab illustration
// 	otherTabIllustrations.forEach((otherTabIllustration) => {
// 		otherTabIllustration.classList.remove('js-tabs__illustration-active');
// 	});

// 	//Remove the class js-opener-icon-rotated from all the opener icons that are not the opener icon
// 	otherOpenerIcons.forEach((otherOpenerIcon) => {
// 		otherOpenerIcon.classList.remove('js-opener-icon-rotated');
// 	});

// 	//Remove the class js-accordion-opened from the other accordion targets
// 	othertabsTargets.forEach((othertabsTarget) => {
// 		othertabsTarget.classList.remove('js-tab-opened');
// 	});

// 	//Remove the class js-tabs__divider-overlay--active from the other tab divider overlays
// 	otherTabDividerOverlays.forEach((otherTabDividerOverlay) => {
// 		otherTabDividerOverlay.classList.remove('js-divider-overlay-animated');
// 	});

// 	//add the class js-accordion-opened to the accordion target
// 	tabsTarget.classList.add('js-tab-opened');

// 	//add the class js-tabs__illustration-active to the tab illustration
// 	tabIllustration.classList.add('js-tabs__illustration-active');

// 	//add the class js-divider-overlay-animated to the tab divider overlay
// 	tabDividerOverlay.classList.add('js-divider-overlay-animated');

// 	//add the class js-opener-icon-rotated to the chevron up
// 	openerIcon.classList.add('js-opener-icon-rotated');
// }

// //For each accordion opener add an event listener that calls the openTab function
// tabsOpeners.forEach((tabsOpener) => {
// 	tabsOpener.addEventListener('click', () => {
// 		openTab(tabsOpener);
// 	});
// });

const tab = new gaTabs('.tabs', { tabToggle: true, closeWhenOpen: true }).init();
