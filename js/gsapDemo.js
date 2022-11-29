// gsap.fromTo(
// 	'.parralax-image',
// 	{
// 		scale: 0.8
// 	},
// 	{
// 		scale: 1,
// 		duration: 1,
// 		width: 1110
// 	}
// );

//Register the scroll trigger plugin from gsap
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let gsapMatchMedia = gsap.matchMedia();

gsapMatchMedia.add('(min-width: 992px)', () => {
	//Create a parallax effect for the hero image loacated under the hero paragraph. When scrolling down the hero image will move up and when scrolling up the hero image will move down

	if (document.querySelector('.parralax-image')) {
		console.log('parralax');
		gsap.to('.parralax-image', {
			// yPercent: -20,
			// scale: 1,
			// width: 1130,
			height: 645,
			ease: 'ease',
			scrollTrigger: {
				markers: true,
				trigger: '.hero__cta-container',
				start: 'top center',
				end: 'center top',
				scrub: 1
				// pin: true
			}
		});
	}

	if (document.querySelector('.hero-image')) {
		gsap.to('.hero-image', {
			// yPercent: -20,
			// scale: 1,
			width: 1130,
			ease: 'ease',
			scrollTrigger: {
				markers: true,
				trigger: '.hero__cta-container',
				start: 'top center',
				end: 'center top',
				scrub: 1
				// pin: true
			}
		});
	}

	gsapMatchMedia.add('(max-height: 1000px)', () => {
		gsap.to('.hero-parralax', {
			// yPercent: -20,
			// scale: 1,
			// width: 1130,
			// minHeight: '+= 300',
			ease: 'none',
			scrollTrigger: {
				markers: true,
				trigger: '.hero__cta-container',
				start: 'top center',
				end: 'center top',
				scrub: 1
				// pin: true
			}
		});
	});

	gsap.to('.animated-image--left', {
		y: '-= 100',
		scrollTrigger: {
			// markers: true,
			trigger: '.hero__cta-container',
			start: 'top center',
			end: 'center top',
			scrub: 1
			// pin: true
		}
	});

	gsap.to('.animated-image--right', {
		x: '-= 100',
		scrollTrigger: {
			// markers: true,
			trigger: '.hero__cta-container',
			start: 'top center',
			end: 'center top',
			scrub: 1
			// pin: true
		}
	});
});

gsapMatchMedia.add('(min-width: 768px)', () => {
	gsap.to('.animated-image--left', {
		y: '-= 100',
		scrollTrigger: {
			// markers: true,
			trigger: '.hero__cta-container',
			start: 'top center',
			end: 'center top',
			scrub: 1
			// pin: true
		}
	});

	gsap.to('.animated-image--right', {
		x: '-= 100',
		scrollTrigger: {
			// markers: true,
			trigger: '.hero__cta-container',
			start: 'top center',
			end: 'center top',
			scrub: 1
			// pin: true
		}
	});
});

// gsap.from('#feature1', {
// 	x: '+= 100',
// 	opacity: 0,
// 	scrollTrigger: {
// 		markers: true,
// 		trigger: '.demo-section',
// 		start: 'top bottom',
// 		end: 'bottom bottom',
// 		scrub: 1
// 	}
// });

const tl = gsap.timeline({
	scrollTrigger: {
		// markers: true,
		trigger: '.homepage__feature-container',
		start: 'top bottom',
		end: 'bottom bottom',
		scrub: 1
	}
});

tl.from('#feature1', {
	x: '+= 100',
	opacity: 0,
	ease: 'ease-in'
});
tl.from('#feature2', {
	y: '+= 100',
	opacity: 0,
	ease: 'ease-in'
});
tl.from('#feature3', {
	x: '-= 100',
	opacity: 0,
	ease: 'ease-in'
});
tl.from('#feature4', {
	x: '+= 100',
	opacity: 0,
	ease: 'ease-in'
});

// ScrollTrigger.create({
// 	animation: 'tl',
// 	markers: true,
// 	trigger: '.demo-section',
// 	start: 'top bottom',
// 	end: 'bottom bottom',
// 	scrub: 1
// });
