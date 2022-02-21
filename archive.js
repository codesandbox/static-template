console.log("g4knr");

/*
*****
nav
*****
*/

/* function to close the nav when the overlay or links are clicked */
function closeNav() {
	// determine if the break point is as required
	const isMobile = window.matchMedia("(max-width: 479px)");
	if (!isMobile) {
		return;
	}

	// get a reference to the overlay and links
	const navCloseElements = document.querySelectorAll(
			".nav__close, .nav__links a"
		),
		navButton = document.querySelector(".nav__menu-btn");

	// toggle aria options when navButton is clicked
	navButton.onclick = () => {
		console.log("clicked");
		const isOpen =
			navButton.getAttribute("aria-expanded") === "true" ? false : true;
		console.log(navButton.getAttribute("aria-expanded"));
		console.log(isOpen);
		navButton.setAttribute("aria-expanded", isOpen);
	};

	// click the button when the overlay is clicked
	navCloseElements.forEach((navCloseElement) => {
		navCloseElement.onclick = () => {
			navButton.click();
		};
	});
}

/* ********** */

/*
*****
contact form
*****
*/

/* function to open the form modal */
function openFormModal() {
	// get a reference to all action buttons
	const contactTriggers = document.querySelectorAll("[data-g-action]");

	// for each trigger button, add a click listener
	contactTriggers.forEach((trigger) => {
		trigger.onclick = () => {
			// get the action then click the relevant trigger
			const contactAction = trigger.getAttribute("data-g-action"),
				actionTrigger = document.querySelector(
					`.contact-modal__${contactAction}`
				);
			actionTrigger.click();

			// toggle the overflow-hidden class from the body element
			document.querySelector("body").classList.toggle("overflow-hidden");
		};
	});
}

/* function to handle the form submission */
function contactForm() {
	// get a reference to the form
	const contactForm = document.querySelector("#wf-form-contact-form"),
		formInputs = contactForm.querySelectorAll("input, textarea, select"),
		formSubmit = contactForm.querySelector(".button.is--submit"),
		errorClass = "has-error";

	console.log(contactForm.form);

	// function to handle input and textarea errors
	function standardErrors(input, valid) {
		if (valid) {
			input.classList.remove(errorClass);
		} else {
			input.classList.add(errorClass);
		}

		// return the element to focus on
		return input;
	}

	// function to handle select errors
	const selectErrors = (select, valid) => {
		const selectDropdown = select.closest(".form__dropdown"),
			selectToggle = selectDropdown.querySelector(
				".form__input.is--dropdown-toggle"
			);

		if (valid) {
			selectToggle.classList.remove(errorClass);
		} else {
			selectToggle.classList.add(errorClass);
		}

		// return the element to focus on
		return selectToggle;
	};

	const validateInputs = (input) => {
		const isValid = input.checkValidity();
		let focusElement;
		if (input.localName === "select") {
			focusElement = selectErrors(input, isValid);
		} else {
			focusElement = standardErrors(input, isValid);
		}

		return {
			isValid,
			focusElement
		};
	};

	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();
		event.stopImmediatePropagation();
		console.log(event);
		return false;
	});

	// when the submit button is clicked
	// loop through the inputs to determine next steps
	formSubmit.addEventListener("click", () => {
		// create a variable to define if validation has passed
		// and whether an element is in focus
		let hasPassed = true,
			isFocused = false;

		formInputs.forEach((input) => {
			const inputValidation = validateInputs(input);

			if (!inputValidation.isValid && !isFocused) {
				inputValidation.focusElement.focus();
				hasPassed = false;
				isFocused = true;
			} else if (!inputValidation.isValid) {
				hasPassed = false;
			}
		});

		// submit the form is all checks pass
		if (hasPassed) {
			formSubmit.nextElementSibling.click();
		}
	});

	const selectText = document.querySelectorAll(
		"[fs-selectcustom-element='label']"
	);

	const hiddenSelects = document.querySelectorAll(".hidden-select");
	hiddenSelects.forEach((select, index) => {
		select.addEventListener("change", (event) => {
			selectText[index].classList.add("text-color-dark");
		});
	});
}

/* ********** */

/*
*****
site prep functions
*****
*/

function sitePrep() {
	closeNav();
	openFormModal();
	contactForm();
}

if (document.readyState !== "loading") {
	// document is already ready
	sitePrep();
} else {
	document.addEventListener("DOMContentLoaded", () => {
		// wait for document to be ready
		sitePrep();
	});
}

/* ********** */

let Webflow = Webflow || [];
Webflow.push(function () {
	const contactForm = document.querySelector("#wf-form-contact-form");
	contactForm.onsubmit = (event) => {
		console.log(event);
		event.preventDefault();
		event.stopImmediatePropagation();
	};
});
