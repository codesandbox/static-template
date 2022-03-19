const slides = document.querySelectorAll('section div.split');

slides.forEach((slide) => {
	let current = 0;
	let z = 1000;

	const images = slide.querySelectorAll('img');

	images.forEach((image) => {
		z = z - 1;
		image.style.zIndex = z;
	});

	const timeline = gsap.timeline();

	timeline.set(images, { y: 500 });

	slide.addEventListener('click', () => {
		z = z - 1;

		images[current].style.zIndex = z;

		current = current + 1;
		current = current % images.length;
	});
});
