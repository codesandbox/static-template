//We want to create a class for building tabs

export default class gaTabs {
	constructor(selector, options = {}, addOns = {}) {
		this.selector = selector;
		this.options = options;
		this.addOns = addOns;
	}

	init() {
		const tab = document.querySelector(this.selector);
		const tabContent = tab.querySelectorAll('.tab-content');
		const tabOpeners = tab.querySelectorAll('.tab-opener');
		let tabToggles = null;
		if (this.options.tabToggle === true) {
			tabToggles = tab.querySelectorAll('.tab-opener__toggle');
		}
		if (this.options.closeWhenOpen === true) {
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
			};
			tabsBehavior();
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
			};
			tabsBehavior();
		}
	}

	addOns() {
		if (this.addOns !== null && this.addOns !== undefined) {
			Object.keys(this.addOns).forEach((addOn) => {
				this.addOns[addOn]();
			});
		}
	}

	get start() {
		return this.init();
	}

	get extension() {
		return this.addOns();
	}
}
