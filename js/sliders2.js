// Custom extensions
const scaleDownInactive = function (Splide, Components, options) {
	const Component = {
		mount() {
			this.scaleDownSlides();
		},

		scaleDownSlides() {
			let perPageValue = Splide.options.perPage;
			let sliderType = Splide.options.type;

			const updateTheSlides = (event) => {
				if (sliderType === 'slide') {
					//Wait a little bit to allow for the the classes to apply
					setTimeout(() => {
						//Select the slides that don't have the is-visible class
						const inactiveSlides = [...Splide.Components.Elements.slides].filter((slide) => {
							return !slide.classList.contains('is-visible');
						});
						//Select the slides that have the is-visible class
						const visibleSlides = [...Splide.Components.Elements.slides].filter((slide) => {
							return slide.classList.contains('is-visible');
						});
						//Make all the slides scaled to 1
						Splide.Components.Elements.slides.forEach((slide) => slide.setAttribute('data-scale', 'initial'));
						if (visibleSlides.length === perPageValue) {
							//Wait for the number of visible slides to be equal to the desired amount of slides per view
							//Scale down the slides outside of the viewport
							inactiveSlides.forEach((slide) => slide.setAttribute('data-scale', 'scaleDown'));
						}
					}, 50);
				}
				if (sliderType === 'loop') {
					const allSlides = [...Splide.root.querySelectorAll('.splide__slide')];
					allSlides.forEach((slide) => {
						setTimeout(() => {
							const inactiveSlides = [...allSlides].filter((slide) => {
								return !slide.classList.contains('is-visible');
							});
							const visibleSlides = [...allSlides].filter((slide) => {
								return slide.classList.contains('is-visible');
							});
							allSlides.forEach((slide) => slide.setAttribute('data-scale', 'initial'));
							if (visibleSlides.length === perPageValue) {
								inactiveSlides.forEach((slide) => slide.setAttribute('data-scale', 'scaleDown'));
							}
						}, 50);
					});
				}
			};
			Splide.on('ready', updateTheSlides);
			Splide.on('moved', updateTheSlides);
		}
	};

	return Component;
};

const scaleUpOnHover = function (Splide, Components, options) {
	const Component = {
		mount() {
			this.scaleUpSlidesOnHover();
		},

		scaleUpSlidesOnHover() {
			Splide.on('ready', () => {
				Splide.root.querySelectorAll('.splide__slide').forEach((slide) => {
					slide.firstElementChild.addEventListener('mouseenter', () => {
						slide.setAttribute('data-scale', 'scaleUp');
					});
					slide.firstElementChild.addEventListener('mouseleave', () => {
						slide.setAttribute('data-scale', 'initial');
					});
				});
			});
		}
	};
	return Component;
};
const AsNavFor = function (Splide, Components, options) {
	const sliderPerPage = Splide.options.perPage;
	const Component = {
		mount() {
			this.asNavFor();
		},
		asNavFor() {
			const callback = (event) => {
				// console.log('run');
				const visible = [...Splide.Components.Elements.slides].filter((slide) => {
					return slide.classList.contains('is-visible') || slide.classList.contains('is-active');
				});
				const targetContainer = document.querySelector(`#${Splide.root.dataset.asnavfor}`);
				// // console.log(targetContainer);
				// console.log(Splide.root.dataset.asnavfor);
				// console.log(visible);
				const targetIndex = visible[0].dataset.illustration;
				const target = targetContainer.querySelector(`.content__container[data-illustration="${targetIndex}"]`);
				//Select other content containers that are not the target
				const otherContentContainers = [...targetContainer.querySelectorAll('.content__container')].filter((container) => {
					return container !== target;
				});
				//Remove active class from other content containers
				otherContentContainers.forEach((container) => {
					container.classList.remove('js-content__container-active');
				});
				//Add active class to target
				target.classList.add('js-content__container-active');
			};

			if (sliderPerPage > 1) {
				Splide.on('visible', callback);
			}

			if (sliderPerPage === 1) {
				Splide.on('active', callback);
			}
			// Splide.on(
			// 	'moved',
			// 	setTimeout(() => {
			// 		Component.asNavFor();
			// 	}, 100)
			// );
		}
	};

	return Component;
};
const FiveStepsSliderBehavior = function (Splide, Components, options) {
	const Component = {
		mount() {
			this.fiveStepsSliderBehavior();
		},
		fiveStepsSliderBehavior() {
			const cardToggles = [...Splide.Components.Elements.list.children].map((slide) => {
				return slide.querySelector('.clickUp-toggle');
			});
			const cards = [...Splide.Components.Elements.list.children];
			const isHovered = (element) => {
				return element.parentElement.querySelector(':hover') === element;
			};

			cardToggles.forEach((cardToggle, index) => {
				cardToggle.addEventListener('click', () => {
					Splide.go(index);
				});
			});
			const sliderArrows = [...Splide.Components.Elements.list.children].map((slide) => {
				return slide.querySelector('.slider-arrows');
			});
			sliderArrows.forEach((arrow) => {
				arrow.addEventListener('click', () => {
					Splide.go('>');
					Splide.on('moved', (newIndex) => {
						console.log(Splide);
						// console.log(Splide.Components.Slides.getAt(newIndex));
						const activeSlide = Splide.Components.Slides.getAt(newIndex);
						const activeCard = activeSlide.slide.firstElementChild;
						activeCard.setAttribute('data-state', 'opened');
						// Closing the other slides
						const otherSlides = [...Splide.Components.Elements.slides].filter((slide) => {
							return slide !== activeSlide.slide;
						});
						console.log(otherSlides);
						otherSlides.forEach((slide) => {
							slide.firstElementChild.setAttribute('data-state', 'closed');
						});
					});
				});
			});
			cards.forEach((card, index) => {
				card.addEventListener('click', () => {
					if (!isHovered(card.querySelector('.slider-arrows')) && !isHovered(card.querySelector('.clickUp-toggle'))) {
						Splide.go(index);
						const activeSlide = Splide.Components.Slides.getAt(index);
						const activeCard = activeSlide.slide.firstElementChild;
						activeCard.setAttribute('data-state', 'opened');
						// Closing the other slides
						const otherSlides = [...Splide.Components.Elements.slides].filter((slide) => {
							return slide !== activeSlide.slide;
						});
						console.log(otherSlides);
						otherSlides.forEach((slide) => {
							slide.firstElementChild.setAttribute('data-state', 'closed');
						});
					}
				});
			});
		}
	};
	return Component;
};

// Slider instances
if (document.querySelector('.slider__full-width')) {
	const fullWidthSlider = new Splide('.slider__full-width', {
		type: 'loop',
		width: '100%',
		perMove: 3,
		height: '650px',
		fixedHeight: '600px',
		rewind: true,
		rewindByDrag: true,
		perPage: 3,
		drag: true,
		gap: '30px',
		arrows: false,
		pagination: true,
		accesibility: true,
		flickPower: 1500,
		focus: 'center',
		classes: {
			pagination: 'splide__pagination slider-dots',
			page: 'splide__pagination__page slider-dot',
			arrows: 'splide__arrows slider__arrows',
			arrow: 'splide__arrow slider__arrow',
			prev: 'splide__arrow--prev slider__arrow--prev',
			next: 'splide__arrow--next slider__arrow--next'
		},
		breakpoints: {
			992: {
				// fixedWidth: '350px',
				perPage: '2',
				perMove: '2',
				gap: 'clamp(16px, calc(1rem + ((1vw - 5.6px) * 3.2407)), 30px)'
			},
			560: {
				// fixedWidth: '350px',
				perPage: 1,
				perMove: 1,
				fixedWidth: '90%',
				fixedHeight: '400px',
				gap: '20px'
			}
		}
	}).mount({ scaleDownInactive: scaleDownInactive, scaleUpOnHover: scaleUpOnHover });
}
if (document.querySelector('.slider__testimonial')) {
	const testimonialSlider = new Splide('.slider__testimonial', {
		type: 'loop',
		width: '100%',
		perPage: 1,
		perMove: 1,
		gap: '30px',
		drag: true,
		arrows: true,
		pagination: false
	}).mount();
}
if (document.querySelector('.slider__asNavForTabs')) {
	const sliderAndTab = new Splide('.slider__asNavForTabs', {
		type: 'slide',
		width: '100%',
		startAt: 0,
		perPage: 2,
		perMove: 2,
		height: '650px',
		rewind: true,
		rewindByDrag: true,
		drag: true,
		gap: '30px',
		arrows: false,
		pagination: true,
		flickPower: 1000,
		classes: {
			pagination: 'splide__pagination slider-dots',
			page: 'splide__pagination__page slider-dot',
			arrows: 'splide__arrows slider__arrows',
			arrow: 'splide__arrow slider__arrow',
			prev: 'splide__arrow--prev slider__arrow--prev',
			next: 'splide__arrow--next slider__arrow--next'
		},
		breakpoints: {
			992: {
				gap: 'clamp(16px, calc(1rem + ((1vw - 5.6px) * 3.2407)), 30px)'
			},
			560: {
				perPage: 1,
				perMove: 1,
				fixedWidth: '80%',
				height: '400px'
			}
		}
	}).mount({ AsNavFor: AsNavFor, scaleDownInactive: scaleDownInactive, scaleUpOnHover: scaleUpOnHover });
}
if (document.querySelector('.slider__vertical')) {
	const sliderVertical = new Splide('.slider__vertical', {
		type: 'loop',
		direction: 'ttb',
		paginationDirection: 'ttb',
		heightRatio: 1,
		perPage: 1,
		perMove: 1,
		width: '100%',
		gap: '30px',
		drag: true,
		arrows: false,
		pagination: true,
		classes: {
			pagination: 'splide__pagination slider-dots--vertical mega-offset__left',
			page: 'splide__pagination__page slider-dot',
			arrows: 'splide__arrows slider__arrows',
			arrow: 'splide__arrow slider__arrow',
			prev: 'splide__arrow--prev slider__arrow--prev',
			next: 'splide__arrow--next slider__arrow--next'
		},
		breakpoints: {
			560: {
				gap: '30px',
				paginationDirection: 'ltr',
				direction: 'ltr'
			}
		}
	}).mount({ AsNavFor: AsNavFor });
}
if (document.querySelector('.slider__testimonial-center')) {
	const sliderTestimonialCentered = new Splide('.slider__testimonial-center', {
		type: 'loop',
		width: '100%',
		perPage: 1,
		perMove: 1,
		gap: '30px',
		drag: true,
		arrows: true,
		pagination: false
	}).mount();
}
if (document.querySelector('.slider__testimonial-long')) {
	const sliderTestimonialLong = new Splide('.slider__testimonial-long', {
		type: 'loop',
		width: '100%',
		perPage: 1,
		perMove: 1,
		gap: '30px',
		drag: true,
		arrows: true,
		pagination: false
	}).mount();
}
if (document.querySelector('#slider7')) {
	const sliderTestimonialLong2 = new Splide('#slider7', {
		type: 'loop',
		width: '100%',
		perPage: 1,
		perMove: 1,
		gap: '30px',
		drag: true,
		arrows: true,
		pagination: false
	}).mount();
}
if (document.querySelector('#slider8')) {
	const sliderThreeCards = new Splide('#slider8', {
		type: 'loop',
		width: '100%',
		perPage: 3,
		perMove: 3,
		gap: '30px',
		drag: true,
		arrows: true,
		pagination: false,
		breakpoints: {
			992: {
				// fixedWidth: '350px',
				perPage: '2',
				perMove: '2',
				gap: 'clamp(16px, calc(1rem + ((1vw - 5.6px) * 3.2407)), 30px)'
			},
			560: {
				// fixedWidth: '350px',
				perPage: 1,
				perMove: 1,
				fixedWidth: '90%',
				gap: '20px'
			}
		}
	}).mount();
}
if (document.querySelector('.fiveStepsSlider')) {
	const fiveStepsSlider = new Splide('.fiveStepsSlider', {
		type: 'slide',
		width: '100%',
		startAt: 0,
		perPage: 2,
		perMove: 1,
		rewind: true,
		rewindByDrag: true,
		flickMaxPages: 1,
		flickPower: 50,
		drag: true,
		gap: '30px',
		arrows: false,
		pagination: true,
		classes: {
			pagination: 'splide__pagination slider-dots',
			page: 'splide__pagination__page slider-dot',
			arrows: 'splide__arrows slider__arrows',
			arrow: 'splide__arrow slider__arrow',
			prev: 'splide__arrow--prev slider__arrow--prev',
			next: 'splide__arrow--next slider__arrow--next'
		},
		breakpoints: {
			992: {
				gap: 'clamp(16px, calc(1rem + ((1vw - 5.6px) * 3.2407)), 30px)'
			},
			560: {
				perPage: 1,
				perMove: 1,
				fixedWidth: '80%'
			},
			360: {
				perPage: 1,
				perMove: 1,
				fixedWidth: '100%'
			}
		}
	}).mount({ FiveStepsSliderBehavior: FiveStepsSliderBehavior });
}

const featuresSliders = () => {
	if (document.querySelector('.feature__slider')) {
		const sliders = document.querySelectorAll('.feature__slider');
		sliders.forEach((slider) => {
			const featureSlider = new Splide(slider, {
				type: 'loop',
				width: '100%',
				perPage: 1,
				perMove: 1,
				gap: '30px',
				drag: true,
				arrows: false,
				pagination: true,
				classes: {
					pagination: 'splide__pagination slider-dots',
					page: 'splide__pagination__page slider-dot'
				}
			}).mount();
		});
	}
};

featuresSliders();
