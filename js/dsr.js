gsap.registerPlugin(ScrollTrigger);

let gsapMatchMedia = gsap.matchMedia();

gsapMatchMedia.add('(min-width: 992px)', () => {
	gsap.to('#first', {
		y: '-=130px',
		scrollTrigger: {
			trigger: '.integration',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
			// pin: true
		}
	});

	gsap.to('#middle', {
		y: '+=200px',
		scrollTrigger: {
			trigger: '.integration',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
			// pin: true
		}
	});

	gsap.to('#last', {
		y: '-=150px',
		scrollTrigger: {
			trigger: '.integration',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
			// pin: true
		}
	});
});

gsapMatchMedia.add('(max-width: 992px)', () => {
	gsap.to('#first', {
		x: '+=130px',
		scrollTrigger: {
			trigger: '.integration',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
			// pin: true
		}
	});

	gsap.to('#middle', {
		x: '-=200px',
		scrollTrigger: {
			trigger: '.integration',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
			// pin: true
		}
	});

	gsap.to('#last', {
		x: '+=150px',
		scrollTrigger: {
			trigger: '.integration',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
			// pin: true
		}
	});
});
