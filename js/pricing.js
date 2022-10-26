const pricingTable = () => {
	const openers = document.querySelectorAll('.pricing-table__section-opener');

	openers.forEach((opener) => {
		opener.addEventListener('click', () => {
			const target = document.querySelector(`.pricing-table__rows[data-openedBy="${opener.dataset.opens}"]`);
			console.log(target);
			target.classList.toggle('js-pricing-table__rows-active');
			const icon = document.querySelector(`.opener-icon[data-opens="${opener.dataset.opens}"]`);
			icon.classList.toggle('js-pricing-table__opener-icon-active');
		});
	});
};

pricingTable();
