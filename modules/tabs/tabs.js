//We want to create a class for building tabs
export default class gaTabs {
	constructor(selector, options = {}, addOns = {}) {
		this.selector = selector;
		this.options = options;
		this.addOns = addOns;
	}

	init() {
		console.log('run');
		console.log(this);
		const tab = document.querySelector(`${this.selector}`);
		console.log(tab);
		if (tab !== undefined && tab !== null) {
			// console.log(tab);
			const tabContents = tab.querySelectorAll('.tab-content');
			// console.log(tabContents);
			const tabOpeners = tab.querySelectorAll('.tab-opener');
			// console.log(tabOpeners);
			let tabToggles = null;
			// console.log(this.options.tabToggle);
			//Adding the height to the tabs element
			if (this.options.height) {
				tab.style.height = `${this.options.height}`;
			}

			if (this.options.tabToggle === true) {
				tabToggles = tab.querySelectorAll('.tab-opener__toggle');
			}
			if (this.options.closeWhenOpen === true) {
				const tabsBehavior = (tab) => {
					const openTab = (tabOpener) => {
						console.log(tab);
						console.log(tabOpener.dataset.opens);
						console.log(tab.querySelector('.tab-content'));
						const tabContent = tab.querySelector(`.tab-content[data-openedBy="${tabOpener.dataset.opens}"]`);
						const otherTabContents = tab.querySelectorAll(`.tab-content:not([data-openedBy="${tabOpener.dataset.opens}"])`);
						const otherTabOpeners = tab.querySelectorAll(`.tab-opener:not([data-opens="${tabOpener.dataset.opens}"])`);
						if (this.options.tabToggle === true) {
							const tabToggle = tab.querySelector(`.tab-opener__toggle[data-opens="${tabOpener.dataset.opens}"]`);
							console.log(tabToggle);
							const otherTabToggles = tab.querySelectorAll(`.tab-opener__toggle:not([data-opens="${tabOpener.dataset.opens}"])`);
							otherTabToggles.forEach((otherTabToggle) => {
								otherTabToggle.classList.remove('js-tab-toggle-active');
							});
							tabToggle.classList.add('js-tab-toggle-active');
						}
						otherTabContents.forEach((tabContent) => tabContent.classList.remove('js-tab-content-active'));
						otherTabOpeners.forEach((tabOpener) => tabOpener.classList.remove('js-tab-opener-active'));
						tabContent.classList.add('js-tab-content-active');
						tabOpener.classList.add('js-tab-opener-active');
					};
					tabOpeners.forEach((tabOpener) => {
						tabOpener.addEventListener('click', () => openTab(tabOpener));
					});
				};
				if (this.addOns !== null && this.addOns !== undefined) {
					// console.log(this.addOns);
					Object.keys(this.addOns).forEach((addOn) => {
						console.log('running an addOn');
						this.addOns[addOn](tab);
					});
				}
				tabsBehavior(tab);
			} else {
				const tabsBehavior = (tab) => {
					const openTab = (tabOpener) => {
						const tabContent = tab.querySelector(`.tab-content[data-tab="${tabOpener.dataset.opens}"]`);
						const otherTabContents = tab.querySelectorAll(`.tab-content:not([data-tab="${tabOpener.dataset.opens}"])`);
						const otherTabOpeners = tab.querySelectorAll(`.tab-opener:not([data-opens="${tabOpener.dataset.opens}"])`);
						if (this.options.tabToggle === true) {
							const tabToggle = tab.querySelector(`.tab-opener__toggle[data-opens="${tabOpener.dataset.opens}"]`);
							const otherTabToggles = tab.querySelectorAll(`.tab-opener__toggle:not([data-opens="${tabOpener.dataset.opens}"])`);
							otherTabToggles.forEach((otherTabToggle) => {
								otherTabToggle.classList.remove('js-tab-toggle-active');
							});
							tabToggle.classList.add('js-tab-toggle-active');
						}
						otherTabContents.forEach((tabContent) => tabContent.classList.remove('js-tab-content-active'));
						otherTabOpeners.forEach((tabOpener) => tabOpener.classList.remove('js-tab-opener-active'));
						tabContent.classList.add('js-tab-content-active');
						tabOpener.classList.add('js-tab-opener-active');
					};
					tabOpeners.forEach((tabOpener) => {
						tabOpener.addEventListener('click', () => openTab(tabOpener));
					});
					if (this.addOns !== null && this.addOns !== undefined) {
						Object.keys(this.addOns).forEach((addOn) => {
							console.log('running an addOn');
							this.addOns[addOn]();
						});
					}
				};
				tabsBehavior();
			}
		}
	}

	get start() {
		return this.init();
	}

	get extension() {
		return this.addOns();
	}
}
